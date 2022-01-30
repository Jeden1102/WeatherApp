<template>
    <div>
        <header v-if="addCityActive" class="container add-city">
            <nav>
                <span>Add City</span>
                <div class="right">
                <i @click="editCity" ref="editCities" class="far fa-edit"></i>
                <i @click="reloadApp" class="fas fa-sync"></i>
                <i @click="addCity" class="fas fa-plus"></i>
                </div>

            </nav>
        </header>
        <header v-if="!addCityActive" class="container" :class="{day:isDay,night:isNight}">
            <nav>
                <router-link class="router-link" :to="{name:'AddCity'}">
                    <i class="fas fa-times-circle"></i>
                </router-link>
                <span>
                    {{ new Date().toLocaleString() }}

                </span>
                <span>
                    &deg;C
                </span>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name:"Navigation",
        props:["addCityActive","isDay","isNight"],
        methods:{
            addCity(){
                this.$emit('add-city');
            },
            reloadApp(){
                location.reload();
            },
            editCity(){
                this.$refs.editCities.classList.toggle("edit-active");
                this.$emit('edit-city');
            }
        }
    }
</script>

<style lang="scss" scoped>
.router-link{
    color:white;
}
    .add-city{
        background: #313640;
    }
    .day {
  transition: 500ms ease all;
  background-color: rgb(59, 150, 249);
}
.night {
  transition: 500ms ease all;
  background-color: rgb(20, 42, 95);
}
header{
    z-index:99;
    position:fixed;
    max-width:1024px;
    width:100%;
    box-shadow:0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.1);
    nav{
        display:flex;
        color:white;
        padding:30px 0;
        justify-content: space-between;
    }
    .edit-active{
        color:rgba(210,75,75,1);
    }
    .right{
        i{
            font-size:20px;
        }
        :nth-child(2),
        :nth-child(3){
            margin-left: 16px;
        }
    }
    span{
        font-weight: 600;
    }
}
</style>