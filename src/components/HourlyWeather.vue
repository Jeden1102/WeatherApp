<template>
    <div class="hourly-weather" >
        <div class="container" @scroll="showScrollIcon = false">
            <div class="hourly-temp" v-for="(time,index) in filteredList" :key="index">
                <HourlyTemp :time="time"/>
            </div>
            <img v-if="showScrollIcon" class="scroll" src="../../public/scroll.png" alt="">
        </div>
    </div>
</template>

<script>
import HourlyTemp from "../components/HourlyTemp.vue";
    export default {
    name:"HourlyWeather",
    props:["forecast"],
    data() {
        return {
            showScrollIcon:true,
        }
    },
    components:{
        HourlyTemp,
    },
    created() {
        console.log(this.forecast);
    },
    computed:{
        filteredList(){
            return this.forecast.hourly.slice(0,33);
        }
    }
    }
</script>

<style lang="scss" scoped>
.scroll{
    position:absolute;
    left:40%;
    top:20%;
    width:90px;
    background: rgba( 255, 255, 255, 0.3 );
    box-shadow: 0 4px 12px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12px );
    -webkit-backdrop-filter: blur( 12px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding:8px;
    animation:2s infinite up;
    -webkit-animation-fill-mode: forwards;
}
@keyframes up{
    0%{
        transform: translateX(0);
    }
    50%{
        transform: translateX(-20px);
    }
    100%{
        transform: translateX(0);
    }
}
.hourly-weather{
    padding:30px 0;
    border-bottom:1px solid rgba(255,255,255,.7);
    .container{
        display:flex;
        position: relative;
        max-width: 100vw;
        overflow-x:scroll;
        padding:0;
        margin:0 20px;
        @media(max-width:686px){
        &::-webkit-scrollbar{
            display:none;
        }
        }

    }
}
::-webkit-scrollbar {
  width: 30px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 4px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>