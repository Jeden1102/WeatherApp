<template>
    <div class="city">
        <span>{{city.city}}</span>
        <div class="weather">
            <span>{{Math.round(this.city.currentWeather.main.temp)}}&deg;</span>
            <img :src="`http://openweathermap.org/img/wn/${city.currentWeather.weather[0].icon}@2x.png`" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name:"city",
        props:["city"],
        created(){
            console.log(this.city)
        }
    }
</script>

<style lang="scss" scoped>

</style>