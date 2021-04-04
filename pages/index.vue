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
  <div class="px-1 mx-1 mt-2 lg:px-0 lg:mx-0 middle">
    <div class="grid grid-cols-1 lg:gap-20 lg:mx-16 lg:grid-cols-2">
      <div class="w-auto my-8 lg:my-24">
        <img src="~assets/img/auto2.jpg" alt="auto">
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

    <div class="grid grid-cols-1 lg:gap-20 lg:mx-16 lg:grid-cols-2">
      <div class="lg:my-24">
      <div class="font-sans text-4xl font-bold text-text-blue">
          <p>ParkingFile Dashboard</p>
        </div>

        <div class="font-sans text-xl font-bold text-blue-800">
          <p>Mas opciones</p>
        </div>
        <div class="my-6 font-sans text-lg text-black">
          <p>
           Información ordenada a tu disposición,  funciones configurables para innumerables casos de uso comercial. Reportes y notificaciones con registro fotográfico. Notificaciones a través de diversas plataformas. Multiples opciones de búsqueda. 
      </p>
        </div>
        </div>

      <div class="w-auto my-8 lg:my-24">
        <video muted autoplay loop>
        <source src="~assets/video/dashboard.mp4" type="video/mp4">
        </video>

        
      </div>
      
      
      
      <br>
    </div>
    
    
    <div class="grid grid-cols-1 lg:gap-x-20 lg:mx-16 lg:grid-cols-2">
      
      <div class="lg:my-14">
      <div class="font-sans text-4xl font-bold text-text-blue">
          <p>Administra, controla y mejora la seguridad </p>
        </div>

        
        <div class="my-6 font-sans text-lg text-black">
          <p>
           En condominios, proporciona al personal administrativo una interfaz gráfica con información de residentes y visitantes, 
           permitiendo controlar los tiempos de estadía. Ayuda a mejorar la seguridad; llevando registro de los vehículos que ingresan, 
           recibiendo notificaciones cuando se detecta una patente de interés.
           </p>
        </div>
        </div>
        <div class="grid content-center grid-cols-3 gap-x-4 justify-items-center lg:justify-items-end">

    <div class="flex flex-col items-center w-32 h-40 mt-2 border border-gray-200 rounded-xl hover:border-hover-blue">
    <div class="w-24 h-24 mt-2"><img src="~assets/img/edificios.svg" alt="auto" class="w-full h-full"></div>
    <p class="font-sans font-semibold text-center text-md text-text-blue">Edificios</p>
    </div>
    <div class="flex flex-col items-center w-32 h-40 mt-2 border border-gray-200 rounded-xl hover:border-hover-blue">
    <div class="w-24 h-24 mt-2"><img src="~assets/img/condominios.svg" alt="auto" class="w-full h-full"></div>
    <p class="font-sans font-semibold text-center text-md text-text-blue">Condominios</p>
    </div>
    <div class="flex flex-col items-center w-32 h-40 mt-2 border border-gray-200 rounded-xl hover:border-hover-blue">
    <div class="w-24 h-24 mt-2"><img src="~assets/img/empresas.svg" alt="auto" class="w-full h-full"></div>
    <p class="font-sans font-semibold text-center text-md text-text-blue">Empresas</p>
    </div>
    <div class="flex flex-col items-center w-32 h-40 mt-2 border border-gray-200 rounded-xl hover:border-hover-blue">
    <div class="w-24 h-24 mt-2"><img src="~assets/img/estacionamientos.svg" alt="auto" class="w-full h-full"></div>
    <p class="font-sans font-semibold text-center text-md text-text-blue">Estacionamientos</p>
    </div>
    <div class="flex flex-col items-center w-32 h-40 mt-2 border border-gray-200 rounded-xl hover:border-hover-blue">
    <div class="w-24 h-24 mt-2"><img src="~assets/img/estaciones.svg" alt="auto" class="w-full h-full"></div>
    <p class="font-sans font-semibold text-center text-md text-text-blue">Estaciones de Servicio</p>
    </div>
    <div class="flex flex-col items-center w-32 h-40 mt-2 border border-gray-200 rounded-xl hover:border-hover-blue">
    <div class="w-24 h-24 mt-2"><img src="~assets/img/bodegas.svg" alt="auto" class="w-full h-full"></div>
    <p class="font-sans font-semibold text-center text-md text-text-blue">Bodegas</p>
    </div>
    
 </div>

 </div>

    <br>
    <br>
    
    <br>

    <Plan class="lg:gap-8 lg:mx-16"/>
    <br>
    <br>
    <br>
    <Faq class="lg:gap-8 lg:mx-16"/>
    <br>
    <br>
    <br>
    <Form class="lg:gap-8 lg:mx-16"/>
    </div>
    <br>
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
