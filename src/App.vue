<template>
  <div class="main" >
    <Navigation v-on:add-city="modalOpen = !modalOpen" v-on:edit-city="edit = !edit" :addCityActive="addCityActive" :isDay="isDay" :isNight="isNight"/>
    <Modal  v-if="modalOpen" v-on:close-modal="modalOpen = !modalOpen" />
    <router-view :cities="cities" :edit="edit" v-on:is-day="isDay = !isDay" v-on:is-night="isNight = !isNight" v-on:resetDays="resetDays" />
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
    }
  },
  methods: {
    getCityWeather(){
      let firebaseDb = db.collection("cities");
      firebaseDb.onSnapshot((snap)=>{
        snap.docChanges().forEach(async(doc)=>{
          if(doc.type === "added" && !doc.doc.Nd){
            try{
              const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${doc.doc.data().city}&units=imperial&appid=${this.apiKey}&lang=pl`)
              const data = response.data;
              firebaseDb.doc(doc.doc.id).update({
                currentWeather : data
              }).then(()=>{
                this.cities.push(doc.doc.data());
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
