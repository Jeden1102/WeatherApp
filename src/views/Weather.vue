<template>
    <div class="main">
        <div v-if="loading" class="loading">
            <span></span>
        </div>
        <div v-if="!loading" class="weather" :class="{day:isDay,night:isNight}">
            <div class="weather-wrap">
                <CurrentWeather class="test" :currentWeather="currentWeather" :isDay="isDay" :isNight="isNight"/>
                <HourlyWeather :forecast="forecast"/>
                <WeeklyForecast :forecast="forecast"/>
                <AdditionalInfo :currentWeather="currentWeather"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import db from "../firebase/firebaseinit";
import HourlyWeather from "../components/HourlyWeather.vue";
import CurrentWeather from "../components/CurrentWeather.vue";
import WeeklyForecast from "../components/WeeklyForecast.vue";
import AdditionalInfo from "../components/AdditionalInfo.vue";
    export default {
        name:"Weather",
        props:["isDay","isNight"],
        components:{
            HourlyWeather,
            CurrentWeather,
            WeeklyForecast,
            AdditionalInfo
        },
        data(){
            return{
                forecast:null,
                currentWeather:null,
                currentTime:null,
                loading:true,
                 apiKey : "ffce0cb1622ed4c6cc1ba7238e3dd846",
            }
        },
        methods: {
            getWeather(){
                db.collection("cities").where('city',"==",`${this.$route.params.city}`).get().then((docs)=>{
                    docs.forEach(doc=>{
                        this.currentWeather = doc.data().currentWeather;
                        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.currentWeather.coord.lat}&lon=${this.currentWeather.coord.lon}&units=imperial&exclude=current,minutely&appid=${this.apiKey}`).then(res=>{
                            this.forecast = res.data;
                        }).then(()=>{
                            this.loading = false;
                            this.getCurrentTime();
                        })
                    })
                })
            },
            getCurrentTime(){
                const dateObject = new Date();
                this.currentTime = dateObject.getHours();
                const sunrise = new Date(this.currentWeather.sys.sunrise*1000).getHours();
                const sunset = new Date(this.currentWeather.sys.sunset*1000).getHours();
                if(this.currentTime > sunrise && this.currentTime < sunset){
                    this.$emit("is-day");
                }else{
                    this.$emit("is-night");
                }
            }
        },
        mounted(){
            this.getWeather();
        },
        beforeDestroy() {
            this.$emit("resetDays");
        },
    }
</script>

<style lang="scss" scoped>
.test{
        background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 4px 14px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 12px );
-webkit-backdrop-filter: blur( 12px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding:8px;
margin:90px 2px 0 2px;
}

.weather {
  transition: 500ms ease;
  overflow: scroll;
  width: 100%;
  height: 100%;
  .weather-wrap {
    overflow: hidden;
    max-width: 1024px;
    margin: 0 auto;
  }
}
</style>