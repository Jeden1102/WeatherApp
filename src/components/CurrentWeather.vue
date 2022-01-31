<template>
    <div class="current-weather">
        <div class="container">
            <div class="weather-info">
                    <span class="city">{{this.currentWeather.name}}</span>
                    <span class="current-temparature">{{Math.round((currentWeather.main.temp-32)/1.8000)}}&deg;</span>

                <div class="high-low-temperatures">
                    <div class="high">
                        <i class="fas fa-chevron-up"></i>
                        <span>{{Math.round((currentWeather.main.temp_max-32)/1.8000)}}&deg;</span>
                    </div>
                    <div class="low">
                        <i class="fas fa-chevron-down"></i>
                        <span>{{Math.round((currentWeather.main.temp_min-32)/1.8000)}}&deg;</span>
                    </div>
                </div>
                <span class="condition">
                    {{ currentWeather.weather[0].description }}
                </span>
                <span class="feels-like">
                    Feels like {{ Math.round((currentWeather.main.feels_like-32)/1.8000) }}&deg;
                </span>
            </div>
            <div class="imgBox">
                <img :src="`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`" alt="">
            </div>

        </div>
        
    </div>
</template>

<script>
    export default {
        name:"CurrentWeather",
        props:["isDay","isNight","currentWeather"],
    }
</script>

<style lang="scss" scoped>
.current-weather{
    margin-top:90px;
    border-bottom:1px solid rgba(255,255,255,.7);
    .container{
        margin:30px 0;
        min-height: 366px;
        position: relative;
        display:flex;
        color:White;
        .imgBox{
            width:200px;
            img{
                width:100%;
            }
        }

    }
    span{
        display:block;
    }
    .weather-info{
        padding-top: 30px;
        flex:1;
        .city{
            font-size:24px;
            font-weight: 500;
        }
        .current-temparature{
            margin-top:40px;
            font-size:80px;
            font-weight: 600;
        }
    }
    .high-low-temperatures{
        display:flex;
        gap:16px;
        .high,.low{
            display:flex;
            span{
                margin-left:8px;
            }
        }
    }
    .condition{
        text-transform: capitalize;
        font-size:24px;
        font-weight: 500;
        margin:60px 0 8px 0;
        
    }
    .feels-like{
        font-weight: 400;
        font-size:14px;
    }
}
</style>