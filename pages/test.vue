<template>


  <div class="container mx-auto">
    <div class="header_top">
    <Navbar class="mx-10" />
    <div class="grid grid-cols-1 mx-10 lg:grid-cols-2">
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
          <button class="btn btn-blue">Empieza</button>
          <button class="btn btn-blue">Conoce mas</button>
        </div>
      </div>

      <div>
        <Car_Animation />
      </div>
    </div>
    </div>


    
  </div>
</template>
<style>
.btn {
  @apply font-semibold py-2 px-4 rounded-xl;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}

.header_top {
  @apply bg-blue-800 mb-4


}
</style>
