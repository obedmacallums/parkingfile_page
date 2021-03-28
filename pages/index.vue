<template>
  <div>

    <div class="py-3 my-3">
        <label for="phone" class="font-sans text-lg font-bold text-text-blue" >Telefono</label>
        <div class="relative flex h-12 mt-1 rounded-md">
          <div v-if="phone" class="absolute inset-y-0 left-0 flex items-center pl-10 pointer-events-none">
            <span class="font-bold text-md text-hover-blue">
              +56
            </span>
          </div>
          <input type="text" name="price" id="price" v-model.trim="$v.phone.$model" :class="{ padl_phone: phone }"
          class="w-full h-full pl-12 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100 icon_phone" placeholder="Ingrese su telefono">
         
        </div>
        <div v-if="$v.phone.$error">
    <div class="text-xs text-red-500" v-if="!$v.phone.required">El telefono es requerido</div>
    <div class="text-xs text-red-500" v-if="!$v.phone.valphone">Telefono invalido, ingresa 9 digitos</div>
    </div>
      </div> 


</div>

</template>

<script>
import 'vue-select/dist/vue-select.css';

import comunas_data from "~/assets/comunas_data.json";
import { required, minLength, email, helpers } from 'vuelidate/lib/validators'

const valphone = helpers.regex('valphone', /^\d{9}$/)

export default {
     data(){
         return {
            comunas: [],
            proyectos: ['CONDOMINIO', 'EDIFICIO', 'ESTACION DE SERVICIO', 'BODEGA'],
            name:null,
            email:null,
            phone:null,
            comuna:null,
            proyecto:null,
            comment:null,
            submitStatus:null
            }

     },
     validations: {
       name: {required, minLength: minLength(4)},
       email: {required, email},
       phone: {required, valphone},
       comuna: {required},
       proyecto:{required}



     },
     
      
   methods: {
    checkForm() {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        console.log("error")
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
        console.log("enviado")
      }
    }
    ,

    comunaslist: function(){
      var lista = []
      comunas_data.forEach(element => {
        element['comunas'].forEach(element => {
          lista.push(element.toUpperCase())});
      });
      this.comunas = lista.sort()
      },
    setName(value) {
      this.name = value
      console.log("hola")
      this.$v.name.$touch()
    }
    }
    ,

    mounted() {
      this.comunaslist();


    }
}



</script>

<style>
.icon_phone{

background: url('~assets/img/phone.svg') no-repeat scroll 5px 5px;



}
.padl_phone{
padding-left:80px;

}
</style>