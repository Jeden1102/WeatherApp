<template>
<div class="bg">
  <div class="main" >
    <div class="loading" v-if="isLoading">
      <span></span>
    </div>
    <div class="app" v-else>
    <Navigation v-on:add-city="modalOpen = !modalOpen" v-on:edit-city="edit = !edit" :addCityActive="addCityActive" :isDay="isDay" :isNight="isNight"/>
    <Modal  v-if="modalOpen" v-on:close-modal="modalOpen = !modalOpen" :cities="cities" />
    <router-view :cities="cities" :edit="edit" v-on:is-day="isDay = !isDay" v-on:is-night="isNight = !isNight" v-on:resetDays="resetDays" :isDay="isDay" :isNight="isNight" v-on:add-city="modalOpen = !modalOpen"/>
    </div>

  </div>
</div>

</template>
<script>
import axios from 'axios';
import db from "./firebase/firebaseinit";
import Navigation from './components/Navigation.vue';
import Modal from './components/Modal.vue';

export default {

  name:"App",
   components:{
      Navigation,
      Modal
    },
  data(){

    return{
      isDay:null,
      isNight:null,
      apiKey : "ffce0cb1622ed4c6cc1ba7238e3dd846",
      cities:[],
      modalOpen:false,
      edit:false,
      addCityActive:null,
      isLoading:true,
    }
  },
  methods: {
    getCityWeather(){
      let firebaseDb = db.collection("cities");
      firebaseDb.onSnapshot((snap)=>{
        if(snap.docs.length ==0){
          this.isLoading = false;
        }
        snap.docChanges().forEach(async(doc)=>{
          if(doc.type === "added" && !doc.doc.Nd){
            try{
              const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${doc.doc.data().city}&units=imperial&appid=${this.apiKey}&lang=pl`)
              const data = response.data;
              firebaseDb.doc(doc.doc.id).update({
                currentWeather : data
              }).then(()=>{
                this.cities.push(doc.doc.data());
                this.isLoading =false;
              })
            }catch(err){ 
              console.log(err);
            }
          }else if(doc.type === "added" && doc.doc.Nd){
              this.cities.push(doc.doc.data());
          }else if(doc.type === "removed"){
            this.cities = this.cities.filter(city=>city.city !== doc.doc.data().city);
          }
        })
      })
    },
    resetDays(){
      this.isDay = false;
      this.isNight = false;
    },
    checkRoute(){
      if(this.$route.name === "AddCity"){
        this.addCityActive = true

      }else{
        this.addCityActive = false;
      }
    }
  },
  watch:{
    $route(){
      this.checkRoute();
    }
  },
  mounted(){
    this.checkRoute();
    this.getCityWeather();
  }
}
</script>
<style lang="scss">
.loading {
  @keyframes spin {
    to {
      transform: rotateZ(360deg);
    }
  }
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  span {
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border: 2px solid transparent;
    border-top-color: #142a5f;
    border-radius: 50%;
    animation: spin ease 1000ms infinite;
  }
}
    .day {
  transition: 500ms ease all;
  background-color: rgb(59, 150, 249);
    box-shadow:0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.1);

}
.night {
  transition: 500ms ease all;
  background-color: rgb(20, 42, 95);
    box-shadow:0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.1);

}
body{
  width:100%;
  height:100%;
  background: #414857;
}
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  font-family: "Quicksand",sans-serif;
}
.main{
  height:100vh;
  max-width:1024px;
  margin:0 auto;
  .container{
    padding:0 20px;
  }
}
</style>
