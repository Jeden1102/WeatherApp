<template>
    <div class="daily-forecast">
        <div>
            <span>{{betterDate}}</span>
        </div>
        <div class="condition">
            <img :src="`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`" alt="">
        </div>
        <div class="weather">
            <span class="high">{{Math.round((day.temp.max-32)/1.8000)}}&deg;</span>
            <span class="low">{{Math.round((day.temp.min-32)/1.8000)}}&deg;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"DailyForecast",
        props:["day"],
        computed:{
            betterDate(){
                let old = new Date(this.day.dt*1000).toLocaleDateString();
                let day = new Date(this.day.dt*1000).toLocaleDateString('pl-PL', { weekday: 'long' }); 
                let dayCapitalize = day.charAt(0).toUpperCase() + day.slice(1);
                old = old.substring(0,old.length-5);
                return `${old} ${dayCapitalize}`;
            }
        }
    }
</script>

<style lang="scss" scoped>
.daily-forecast{
    display:flex;
    align-items: center;
    justify-content: space-between;
    color:white;
            background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 4px 14px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 12px );
-webkit-backdrop-filter: blur( 12px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding:8px;
    div{
        flex:1;
    }
    .condition{
        display:flex;
        align-items: center;
        justify-content: center;
        img{
            width:60px;
        }
    }
    .weather{
        display:flex;
        justify-content: flex-end;
        span{
            min-width: 20px;
        }
        .high{
            font-weight: 500;
            margin-right: 12px;
        }
    }
}
</style>