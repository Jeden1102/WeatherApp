<template>
    <div>
        <h4>Weather</h4>
    </div>
</template>

<script>
import axios from 'axios';
import db from "../firebase/firebaseinit";
    export default {
        name:"Weather",
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
                        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.currentWeather.coord.lat}&lon=${this.currentWeather.coord.lon}&exclude=current,minutely&appid=${this.apiKey}`).then(res=>{
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
    h4{
        padding-top:100px;
    }
</style>