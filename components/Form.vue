<template>
<div>
  <div class="py-3 text-center">
         <div class="font-sans text-4xl font-bold text-text-blue">
          <p>Contáctanos</p>
        </div>

        <div class="font-sans text-xl font-bold text-blue-800">
          <p>Estamos aquí para ti</p>
        </div>
    </div>
<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">

    <div class="1">

        
    <div class="flex flex-col py-3 my-3">
    <label for="name" class="font-sans text-lg font-bold text-text-blue">Nombre y Apellido</label>
    <div class="h-12">
    <input type="text" name="name" id="name" placeholder="Ingresa tu nombre" v-model.trim="$v.name.$model" form="contactform" 
    class="w-full h-full border border-gray-300 icon_name rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100">
    <div v-if="$v.name.$error">
    <div class="error" v-if="!$v.name.required">Name is required</div>
    <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
    </div>
    </div>
    </div>
    
  


    <div class="flex flex-col py-3 my-3">
    <label for="email" class="font-sans text-lg font-bold text-text-blue">Correo Electronico</label>
    <div class="h-12">
    <input type="email" name="email" id="email" placeholder="Ingresa tu correo electronico" v-model.trim="$v.email.$model" form="contactform" 
    class="w-full h-full border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100 icon_mail">
    <div v-if="$v.email.$error">
    <div class="error" v-if="!$v.email.required">email is required</div>
    <div class="error" v-if="!$v.email.email">email invalid</div>
    </div>
    </div>
    </div>

    <div class="flex flex-col py-3 my-3">
    <label for="phone" class="font-sans text-lg font-bold text-text-blue" >Telefono</label>
    <div class="h-12">
    <input type="tel" id="phone" name="phone" placeholder="Ingresa tu telefono" v-model.trim="$v.phone.$model" form="contactform" 
    class="w-full h-full border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100 icon_phone">
    <div v-if="$v.phone.$error">
    <div class="error" v-if="!$v.phone.required">phone is required</div>
    <div class="error" v-if="!$v.phone.valphone">phone invalid, formato +56930679681</div>
    </div>
    </div>
    </div>

    <div class="flex flex-col py-3 my-3">
    <label for="comuna" class="font-sans text-lg font-bold text-text-blue">Comuna</label>
    <div class="h-12">
    <select name="comuna" id="comuna" placeholder="Ingresa el nombre de tu comuna" v-model="comuna" form="contactform" 
    class="w-full h-full border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100 icon_comuna styled-select">
    <option v-for="comuna in comunas"> {{comuna}}</option>
    
    
    </select>
    

    </div>
    </div>
    

    </div>
    
    

    <div class="flex flex-col 2">

    <div class="py-3 my-3">
    <label for="name" class="font-sans text-lg font-bold text-text-blue">Tipo de proyecto</label>
    <div class="h-12">
    <select name="proyecto" id="proyecto" v-model="proyecto" form="contactform" 
    class="w-full h-full border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100 styled-select icon_arrow">
    <option>CONDOMINIO</option>
      <option>EDIFICIO</option>
      <option>ESTACION DE SERVICIO</option>
    </select>
    </div>
    </div>
      
    <div class="flex flex-col justify-between h-full py-3 my-3">

        

            <div class="">
                <label for="comment" class="font-sans text-lg font-bold text-text-blue">Comentario</label>
        
                <div class="">
                <textarea rows="4" cols="50" name="comment" v-model="comment" id="comment" form="contactform" 
                class="w-full h-full p-2 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100"/>
                </div>
            </div>
        <div class="text-red-500 error" v-if="errors.length">
           
        <ul>
        <li v-for="error in errors">{{ error }}</li>
        </ul>
        </div>


        <div class="">

        <form @submit.prevent="checkForm" action="/something" method="post" novalidate=true id="contactform"
        class="">
        <input type="submit" value="Enviar" class="btn btn-blue">  
              
        </form>

        </div>
        
        

        </div>

        </div>

</div>


    
    
</div>


</template>

<script>

import comunas_data from "~/assets/comunas_data.json";
import { required, minLength, email, helpers } from 'vuelidate/lib/validators'

const valphone = helpers.regex('valphone', /^\+56\d{9}$/)

export default {
     data(){
         return {
            comunas: null,
            errors:[],
            name:'',
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
       phone: {required, valphone}



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

.icon_mail{

background: url('~assets/img/mail.svg') no-repeat scroll 5px 5px;
padding-left:45px;

}

.icon_name{

background: url('~assets/img/name.svg') no-repeat scroll 5px 5px;
padding-left:45px;

}

.icon_phone{

background: url('~assets/img/phone.svg') no-repeat scroll 5px 5px;
padding-left:45px;

}

.icon_comuna{

background: url('~assets/img/comuna.svg') no-repeat scroll 5px 5px, url('~assets/img/arrow.svg') no-repeat scroll 5px 5px;
padding-left:40px;
background-position-x: 1%, 98%;
background-position-y: center;


}

.styled-select {
    -moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;
}

.icon_arrow{

  background: url('~assets/img/arrow.svg') no-repeat scroll 5px 5px;
  background-position-x: 98%;
  background-position-y: center;
  padding-right:5px;
  padding-left:5px;
  
  

}







</style>