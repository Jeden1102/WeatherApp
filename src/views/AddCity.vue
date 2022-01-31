<template>
<div>
  <div class="grid">
    <div class="city-link" v-for="(city,index) in cities" :key="index">
      <div v-if="index==0" class="tap">
        
        
        <p><i class="far fa-hand-point-up"></i>Tap to see weather  details</p>
      </div>
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
  position: relative;
}
.tap{
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  z-index: 50;
              background: rgba( 255, 255, 255, 0.3 );
box-shadow: 0 4px 14px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 12px );
-webkit-backdrop-filter: blur( 12px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
padding:8px;
display:grid;
place-content: center;
i{
font-size:40px;
  animation:1.5s infinite tap;
  margin:0 20px;

}
p{
  white-space: nowrap;
}
}
@keyframes tap{
  0%{
    transform: scale(1);
  }
  20%{
    transform: scale(1.3);
  }
    100%{
    transform: scale(1);
  }
}

</style>
