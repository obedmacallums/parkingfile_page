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
    <input type="text" name="name" id="name" placeholder="Ingresa tu nombre" v-model="name" form="contactform" 
    class="w-full h-full border border-gray-300 icon_name rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100">
    </div>
    </div>
    
  


    <div class="flex flex-col py-3 my-3">
    <label for="email" class="font-sans text-lg font-bold text-text-blue">Correo Electronico</label>
    <div class="h-12">
    <input type="email" name="email" id="email" placeholder="Ingresa tu correo electronico" v-model="email" form="contactform" 
    class="w-full h-full border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100 icon_mail">
    </div>
    </div>

    <div class="flex flex-col py-3 my-3">
    <label for="phone" class="font-sans text-lg font-bold text-text-blue" >Telefono</label>
    <div class="h-12">
    <input type="tel" id="phone" name="phone" placeholder="Ingresa tu telefono" v-model="phone" form="contactform" 
    class="w-full h-full border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100 icon_phone">
    </div>
    <p class="text-xs text-text-blue">Formato: +56123456789 </p>
    </div>

    <div class="flex flex-col py-3 my-3">
    <label for="comuna" class="font-sans text-lg font-bold text-text-blue">Comuna</label>
    <div class="h-12">
    <input type="text" name="comuna" id="comuna" placeholder="Ingresa el nombre de tu comuna" v-model="comuna" form="contactform" 
    class="w-full h-full border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-gray-100 icon_comuna">
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

export default {
     data(){
         return {
            comunas : comunas_data,
            errors:[],
            name:null,
            email:null,
            phone:null,
            comuna:null,
            proyecto:null,
            comment:null
                                       
         }

     },
     
     
   methods: {
    checkForm: function (e) {
    this.errors = [];
    if(!this.name) this.errors.push("Nombre requerido.");

    if(!this.email) {
        this.errors.push("Email requerido.");
        }else if(!this.validEmail(this.email)) {
        this.errors.push("Correo invalido.");
      }

    if(!this.phone) {
        this.errors.push("Telefono requerido.");
        }else if(!this.validPhone(this.phone)) {
        this.errors.push("Telefono invalido.");
      }

    console.log(this.name, ' ', this.email, ' ',this.phone, ' ',this.comuna, ' ',this.proyecto, ' ',this.comment)

    if(!this.errors.length) {console.log("formulario enviado")};

    }
    ,
    validEmail:function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
    }
    ,
    validPhone:function(phone) {
    var re = /^\+56\d{9}$/;
    return re.test(phone);
    }

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

background: url('~assets/img/comuna.svg') no-repeat scroll 5px 5px;
padding-left:40px;

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