<template>
  <div class="grid">
    <div class="city-link" v-for="(city,index) in cities" :key="index">
      <City :city="city" :edit="edit"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import City from '@/components/City.vue';


export default {

  name: 'AddCity',

  props : ['cities','edit'],
  created(){
  },
  components: {
    City
  },
}
</script>
<style lang="scss" scoped>
.grid{
  display:grid;
  padding-top: 81px;
  background: #31363d;
  width:100%;
  min-height: 100vh;
  grid-auto-rows: 250px;
  @media(min-width:400px){
    grid-template-columns: repeat(2,1fr);
  }
}
</style>
