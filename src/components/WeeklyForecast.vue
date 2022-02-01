<template>
    <div class="weekly-forecast">
        <div class="container">
            <div class="daily" v-for="(day,index) in filteredList" :key="index">
                <DailyForecast v-on:show-details-modal="showDetailsModal(day)" :day="day"/>
            </div>
        </div>
    </div>
</template>

<script>
import DailyForecast from '@/components/DailyForecast.vue';


    export default {
        name:"WeeklyForecast",
        props:["forecast"],
            components: {
            DailyForecast
        },
        created() {
            console.log(this.forecast);
        },
        computed:{
            filteredList(){
                return this.forecast.daily.slice(1,8);
            }
        },
        methods: {
            showDetailsModal(day){
                this.$emit('show-details-modal',day);
            }
        },
    }
</script>

<style lang="scss" scoped>
.weekly-forecast{
    padding:30px 0;
    border-bottom:1px solid rgba(255,255,255,.7);
    .daily{
        margin-bottom: 12px;
    }
    .daily:last-child{
        margin-bottom: 0;
    }
}
</style>