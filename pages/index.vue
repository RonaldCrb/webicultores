<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card-title class="head">
        Bienvenidos a
      </v-card-title>

      <div>
        <img width="1200px" src="~/assets/bg-web.jpg">
      </div>

      <Info />
      <Newslider />
    </v-flex>
  </v-layout>
</template>

<script>
import Info from '@/components/Info'
export default {
  components: {
    Info
  }
}
</script>

<style >
.head··font-size: · '40px';
</style>
