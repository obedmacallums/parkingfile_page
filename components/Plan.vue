<template>
<div>
<div class="py-3 text-center">
         <div class="font-sans text-4xl font-bold text-text-blue">
          <p>Planes disponibles</p>
        </div>
<br>
        
    </div>
    
<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">

  <div v-for="(item, index) in plan_data" :key="index"
  class="grid grid-cols-1 border border-gray-200 rounded-xl hover:border-2 hover:border-hover-blue">

    <div class="">
      <div class="pt-1 mx-auto icon_size" >
      <img :src="require(`~/assets/img/${item.title}.svg`)" class="w-full h-full"/>
      </div>

      <div class="p-2 mb-6 text-center">
      <div class="font-sans text-4xl font-bold text-text-blue plan_title">{{ item.title }}</div>
     <div class="font-sans text-2xl font-bold text-text-blue plan_subtitle">{{ item.subtitle }}</div>
     </div>
     <div class="feature">
       
       <div v-for="(feature, index) in item.feature_list" :key="index"
       class="flex m-3 ml-12 space-x-4">
        <img src="~assets/img/Checkmark.svg" alt="auto" class="w-6 h-6">
        <div class="font-sans text-lg">{{feature}}</div>
        
        </div>
     </div>
     
      
      
    </div>
   <div class="self-end">
  <c-button class="p-6 text-center" texto="Contrata"/>
</div> 
</div>
</div>
</div>
</template>

<script>
import plan_data from "~/assets/plan_data.json";

export default {
     data(){
         return {
             plan_data : plan_data
         }

     }     

}




     

    

</script>

<style>

.border_slim{
  border-width: 1px;

}

.icon_size{
  height: 150px;
  width: 150px;


}

</style>