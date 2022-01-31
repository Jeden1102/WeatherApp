<template>
<div>
  <div class="grid">
    <div class="city-link" v-for="(city,index) in cities" :key="index">
      <City :city="city" :edit="edit"/>
    </div>
  </div>
  <div class="no-cities" v-if="cities.length == 0">
    Your cities list is empty, consider of adding your first city.
    <button @click="addCity">Add City <i class="fas fa-plus"></i></button>
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
  methods: {
              addCity(){
                this.$emit('add-city');
            },
  },
}
</script>
<style lang="scss" scoped>
.no-cities{
  left:0;
  top:0;
  position:absolute;
  min-height:100vh;
  max-width:1024px;
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:white;
button {
  margin-top: 16px;
  padding: 8px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 500ms ease all;
  &:hover {
    outline: none;
    transform: scale(0.98);
  }
  &:focus {
    outline: none;
  }
}
}
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
.city-link{
  cursor: pointer;
}

</style>
