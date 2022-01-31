<template>
    <div class="modal" ref="modal" @click="closeModal">
        <div class="modal-wrap" ref="modalWrap">
            <label for="city-name">Enter Location:</label>
            <input type="text" name="city-name" placeholder="Warszawa/Warsaw" v-model="city">
            <button @click="addCity">Add</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import db from "../firebase/firebaseinit";
    export default {
     name:"modal",
    props:["cities"],
     data(){
         return{
             city:"",
            apiKey : "ffce0cb1622ed4c6cc1ba7238e3dd846",
         }
     },
     methods: {
         closeModal(e){
             if(e.target === this.$refs.modal)
                this.$emit('close-modal');

         },
         async addCity(){
           console.log(this.cities);
             if(this.city === ""){
               alert("Input field cannot be empty");
                 return false
             }
             let test = this.cities.filter(el=>el.city == this.city);
             if(test.length != 0){
               alert(`We are sorry...${this.city} already exists in your app.`);
               return false;
             }
             try{
             const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=${this.apiKey}&lang=pl`);
             const data = await res.data;
             db.collection('cities').doc().set({
                 city:this.city,
                 currentWeather:data
             }).then(()=>{
                this.$emit('close-modal');
             })
             }catch(err){
               alert(`We are sory...${this.city}, does not exist in our record. Please try again.`)
             }

             
         },

     },
    }
</script>

<style lang="scss" scoped>
.modal {
  z-index: 101;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    color: #fff;
  }
  .modal-wrap {
    max-width: 500px;
    border-radius: 8px;
    width: 80%;
    padding: 20px;
    background-color: #31363d;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    input {
      color: #fff;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #fff;
      padding: 6px 4px;
      margin: 10px 0 20px;
      width: 100%;
      &:focus {
        outline: none;
      }
    }
    button {
      background-color: #222325;
      color: #fff;
      padding: 6px 20px;
      border-radius: 8px;
      border: none;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }
  }
}
</style>