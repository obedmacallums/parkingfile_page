<template>


  <div class="container mx-auto">
    <div class="pt-10 pb-10 header_top">
    <Navbar class="lg:mx-16" />
    <div class="grid grid-cols-1 lg:mx-16 lg:grid-cols-2">
      <div class="p-3">
        <div class="font-sans text-4xl text-white font-semi-bold">
          <p>Reconocimiento automático de patentes</p>
        </div>
        <div class="my-6 font-sans text-lg text-white">
          <p>
            Implementa reconocimiento de patentes y vehículos con nuestro
            software, diseñado para proporcionar información invaluable a tus
            operaciones.
          </p>
        </div>
        <div class="flex items-center space-x-4">
          <c-button texto="Empieza"/>
          <c-button texto="Conoce mas"/>
          
        </div>
      </div>

      <div>
        <Car_Animation />
      </div>
    </div>
    </div>

    <div class="grid grid-cols-1 lg:gap-20 middle lg:mx-16 lg:grid-cols-2">
      <div class="w-auto my-8 lg:my-24">
        <img src="~assets/img/auto2.png" alt="auto">
      </div>
      <div class="lg:my-24">
      <div class="font-sans text-4xl font-bold text-text-blue">
          <p>ParkingFile </p>
        </div>

        <div class="font-sans text-xl font-bold text-blue-800">
          <p>Software de reconocimiento vehicular</p>
        </div>
        <div class="my-6 font-sans text-lg text-black">
          <p>
           Utilizando inteligencia artificial y aprendizaje automático se crea un registro detallado de los vehículos, 
           mostrando en tiempo real:  numero de patente, marca, color y dirección de viaje.</p>
        </div>
        </div>

    </div>
    <br>

    <div class="bg-blue-800 footer">
      <Footer/>

    </div>


    
  </div>
</template>
<style>

/* .footer{

 background:  url('~assets/img/footer_circles.svg'), linear-gradient(to top, #011F4B, #2a4365);

}

*/

.header_top {

 background:  url('~assets/img/top_circles.svg'), linear-gradient(to bottom, #011F4B, #3182ce);


}

.middle {

@apply bg-middle-circles

}


.footer {
  @apply bg-footer-blue


}



</style>
