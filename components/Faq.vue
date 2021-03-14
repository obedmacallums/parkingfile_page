<template>

<div class="grid grid-cols-1 gap-8 principal lg:grid-cols-2">

    <div v-for="(item, index) in faq_data" :key="index">

    <div class="flex items-center font-sans font-bold question text-text-blue" @click="status(index)" :ref="'id' + index">
        
        <div style="display: inline" class="">
        <img v-if="item.isHidden"  src="~/assets/img/positive.svg" />
        <img v-else  src="~/assets/img/negative.svg" />
        </div>
        <span class="ml-2" >{{item.question}}</span>
        
        
    </div>
    <div class="pl-8 ml-4 border-l-2 border-gray-500" v-bind:class="[item.isHidden ? 'hidden' : '']">
        {{item.answer}}

    </div>

    </div>

</div>
    

</template>

<style>










</style>

<script>


import faq_data from "~/assets/faq_data.json";

export default {
     data(){
         return {
             faq_data : faq_data,
             icon: "positive"
                          
         }

     },
     
     
   methods: {
    status: function (index) {
               
        this.faq_data[index]['isHidden']= !this.faq_data[index]['isHidden']
        
        
        
        this.$refs['id' + index][0].focus()
        
        var rect = this.$refs['id' + index][0].getBoundingClientRect();
        console.log(rect.top, rect.right, rect.bottom, rect.left);
        
        
        
        

        }
        

        
        
      
    }

     }


</script>