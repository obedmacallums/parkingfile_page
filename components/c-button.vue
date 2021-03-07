<template>
    <div>
        <button class="btn btn-blue">{{texto}}</button>
    </div>
</template>

<script>
export default {
     props: ['texto']

    }
    

</script>
<style>
.btn {
  @apply font-semibold font-sans py-2 px-4 rounded-xl;
}
.btn-blue {
  @apply bg-button-blue text-white;
}
.btn-blue:hover {
  @apply bg-primary-blue;
}
</style>