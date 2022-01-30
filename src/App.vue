<template>
  <div class="main">
    <Navigation />
    <router-view :cities="cities"/>
  </div>
</template>
<script>
import axios from 'axios';
import db from "./firebase/firebaseinit";
import Navigation from './components/Navigation.vue';

export default {

  name:"App",
   components:{
      Navigation,
    },
  data(){

    return{
      apiKey : "ffce0cb1622ed4c6cc1ba7238e3dd846",
      cities:[],
    }
  },
  methods: {
    getCityWeather(){
      let firebaseDb = db.collection("cities");
      firebaseDb.onSnapshot((snap)=>{
        snap.docChanges().forEach(async(doc)=>{
          if(doc.type === "added"){
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
          }
        })
      })
    },
  },
  mounted(){
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
