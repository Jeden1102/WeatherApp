<template>
    <div class="hour">
        <span>{{newTime}}</span>
        <span>
            <img :src="`http://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png`" alt="">
        </span>
        <span>
            {{ Math.round((time.temp-32)/1.8000) }}&deg;
        </span>
    </div>
</template>

<script>
    export default {
        name:"HourlyTemp",
        props:["time"],
        computed:{
            newTime(){
                let old = new Date(this.time.dt*1000).toLocaleTimeString();
                return old.substring(0,old.length-3);
            },
        },
    }
</script>

<style lang="scss" scoped>
.hour{
    color:white;
    display:flex;
    flex-direction: column;
    text-align: center;
    min-width:45px;
    margin-right: 20px;
    background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 4px 12px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 12px );
-webkit-backdrop-filter: blur( 12px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding:8px;

}
    img{
        width:auto;
        height:42px;
        display:block;
    }
    span{
        display:block;
        align-self: center;
    }
    span:nth-child(1){
        font-weight: 300;
        margin-bottom: 12px;
    }
        span:nth-child(2){
        margin-bottom: 12px;
    }
            span:nth-child(3){
                font-weight: 500;

    }
</style>