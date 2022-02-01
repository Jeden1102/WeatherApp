<template>
    <div>
        <header v-if="addCityActive" class="container add-city">
            <nav>
                <router-link class="link" :to="{name:AddCity}">Weather App</router-link> 
                <div class="right">
                <i @click="editCity" ref="editCities" class="far fa-edit"></i>
                <i @click="reloadApp" class="fas fa-sync"></i>
                <i @click="addCity" class="fas fa-plus"></i>
                </div>

            </nav>
        </header>
        <header v-if="!addCityActive" class="container" :class="{day:isDay,night:isNight}">
            <nav>
                <router-link class="link" :to="{name:'AddCity'}">
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
.link{
    color:white;
    text-decoration: none;
}
    .add-city{
        background: #313640;
    }

header{
    z-index:99;
    position:fixed;
    max-width:1024px;
    width:100%;
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
            cursor: pointer;
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