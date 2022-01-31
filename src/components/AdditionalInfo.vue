<template>
    <div class="addition-info container">
        <div>
            <span>Sunrise <i class="fas fa-sun yellow"></i></span>
            <span>{{new Date(currentWeather.sys.sunrise*1000).toLocaleTimeString()}}</span>
        </div>
        <div>
            <span>Sunset <i class="fas fa-moon"></i></span>
            <span>{{new Date(currentWeather.sys.sunset*1000).toLocaleTimeString()}}</span>
        </div>
        <div>
            <span>Humidity <i class="fas fa-tint"></i></span>
            <span>{{currentWeather.main.humidity}}%</span>
        </div>
        <div>
            <span>Cloudness <i class="fas fa-cloud"></i></span>
            <span>{{currentWeather.clouds.all}}%</span>
        </div>
        <div>
            <span>Wind <i class="fas fa-wind"></i></span>
            <span>{{Math.round(currentWeather.wind.speed)}}mph</span>
        </div>
        <div>
            <span>Pressure <i class="fas fa-compress-alt"></i></span>
            <span>{{currentWeather.main.pressure}}hPa</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"AdditionalInfo",
        props:["currentWeather"],
        created(){
            console.log(this.currentWeather)
        }
    }
</script>

<style lang="scss" scoped>
span i{
    font-size:20px;
    margin-left:5px;
}

.addition-info{
    padding:30px 20px;
    display:flex;
    flex-wrap:wrap;
    color:White;
    
    div{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-basis:40%;
        margin:10px 5px;
        background: rgba( 255, 255, 255, 0.3 );
        box-shadow: 0 4px 14px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 12px );
        -webkit-backdrop-filter: blur( 12px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        padding:8px;
        span:nth-child(1){
            font-size:12px;
            margin-bottom:8px;
        }
                span:nth-child(2){
            font-weight:600;
        }
    }
}
</style>