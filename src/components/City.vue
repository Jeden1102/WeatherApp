<template>
    <div class="city" @click="goToWeather">
        <i v-if="edit" @click="removeCity" class="far fa-trash-alt edit" ref="edit"></i>
        <span  class="city-name">{{city.city}}</span>
        <div class="weather">
            <span>{{Math.round((this.city.currentWeather.main.temp-32)/1.8000)}}&deg;</span>
            <img :src="`http://openweathermap.org/img/wn/${city.currentWeather.weather[0].icon}@2x.png`" alt="">
        </div>
        <div class="video">
            <video autoplay muted loop :src="require(`../../public/videos/${city.currentWeather.weather[0].icon}.mp4`)"></video>
            <div class="bg-overlay">
            </div>
        </div>
    </div>
</template>

<script>
import db from '../firebase/firebaseinit';
    export default {
        name:"city",
        props:["city","edit"],
        created(){
            console.log(this.city)
        },
        data(){
            return{
                id:null,
            }
        },
        methods: {
            removeCity(){
                db.collection('cities').where('city','==',`${this.city.city}`).get().then(docs=>{
                    docs.forEach(doc=>{
                        this.id = doc.id;
                    })
                }).then(()=>{
                    db.collection("cities").doc(this.id).delete();
                this.$notify({
                  group: 'foo',
                  title: 'Info',
                  type:'success',
                  duration:5000,
                  text: 'City has been deleted succesfully'
                });
                })
            },
            goToWeather(e){
                if(e.target === this.$refs.edit){
                    //
                }else{
                    this.$router.push({name:"Weather",params:{city:this.city.city}})
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.city-name{
    position: relative;
}
.city-name::after{
    width:0%;
    height:1px;
    background: white;
    content:"";
    position:absolute;
    left:0;
    bottom:-5px;
    transition: .3s;
}
.city:hover .city-name::after{
    width:50%;

}
.city{
    display:Flex;
    position: relative;
    flex-direction: column;
    padding:20px;
    flex-basis: 50%;
    min-height: 250px;
    color:#fff;
    box-shadow:1 1px 2px 0 rgba(0,0,0,.05);
          .edit {
    border-radius: 0px 15px 0 0;
    border: 10px solid rgb(77, 77, 77);
    background-color: rgb(77, 77, 77);
    z-index: 1;
    font-size: 20px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    cursor: pointer;
    }
    span{
     z-index: 1;
     text-transform: capitalize;
     display: block;
     font-size: 25px;
     font-weight: 600;
    }
    .weather{
        display:flex;
        z-index:1;
        justify-content: flex-end;
        align-items: flex-end;
        flex:1;
        span{
            font-size:35px;
            margin-right:8px;
        }
        img{
            height:40px;
            width:auto;
        }
    }
    .video{
        overflow: hidden;
        position: absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        video{
            height:100%;
            @media(min-width:900px){
                height:auto;
                width:100%;
            }
        }
    }
    .bg-overlay{
        position: absolute;
        height: 100%;
        width:100%;
        top:0;
        background: rgba(0,0,0,.2);
    }
}
</style>