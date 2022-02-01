<template>
    <div class="modal">
        <h3><i class="fas fa-calendar-day mar"></i>{{ betterDate }}</h3>
        <button @click="closeDetailsModal"><i class="far fa-window-close"></i></button>
        <div class="flex">
            <div class="box">
                <i class="far fa-clock"></i>
                <span class="light">8:00</span>
                <span class="strong">{{Math.round((singleDayDetails.temp.morn-32)/1.8000)}}&deg;/{{Math.round((singleDayDetails.feels_like.morn-32)/1.8000)}}&deg;</span>
            </div>
            <div class="box">
                <i class="far fa-clock"></i>
                <span class="light">12:00</span>
                <span class="strong">{{Math.round((singleDayDetails.temp.day-32)/1.8000)}}&deg;/{{Math.round((singleDayDetails.feels_like.day-32)/1.8000)}}&deg;</span>
            </div>
            <div class="box">
                <i class="far fa-clock"></i>
                <span class="light">18:00</span>
                <span class="strong">{{Math.round((singleDayDetails.temp.eve-32)/1.8000)}}&deg;/{{Math.round((singleDayDetails.feels_like.eve-32)/1.8000)}}&deg;</span>
            </div>
            <div class="box">
                <i class="far fa-clock"></i>
                <span class="light">2:00</span>
                <span class="strong">{{Math.round((singleDayDetails.temp.night-32)/1.8000)}}&deg;/{{Math.round((singleDayDetails.feels_like.night-32)/1.8000)}}&deg;</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"ModalDetails",
        props:["singleDayDetails"],
        methods: {
            closeDetailsModal(){
                this.$emit("close-details-modal")
            }
        },
        computed:{
            betterDate(){
                let old = new Date(this.singleDayDetails.dt*1000).toLocaleDateString();
                let day = new Date(this.singleDayDetails.dt*1000).toLocaleDateString('pl-PL', { weekday: 'long' }); 
                let dayCapitalize = day.charAt(0).toUpperCase() + day.slice(1);
                old = old.substring(0,old.length-5);
                return `${old} ${dayCapitalize}`;
            }
        }
    }
</script>

<style lang="scss" scoped>
.mar{
    margin-right:4px;
}
.flex{
    margin-top:10px;
    display:flex;
    gap:12px;
    justify-content: center;
    align-items: center;
}
.light{
    font-weight: 300;
}
.strong{
    font-weight: 600;
    font-size:17px;
}
.box{
    background: rgba( 255, 255, 255, 0.5 );
    box-shadow: 0 4px 14px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12px );
    -webkit-backdrop-filter: blur( 12px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    display:flex;
    flex-direction: column;
    padding:8px;
    gap:4px;
        justify-content: center;
    align-items: center;
    i{
        font-size:28px;
    }
}
.modal{
    min-width:90vw;
}
h3{
    position:relative;
    text-align:center;
}
button{
    position:absolute;
    right:-10px;
    top:-20px;
        margin:0 4px;
    padding:4px;
    border-radius: 3px;
    border:none;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    gap:4px;
    background: rgba( 255, 255, 255, 0.5 );
    box-shadow: 0 4px 14px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 12px );
    -webkit-backdrop-filter: blur( 12px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
}
</style>