<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="footerbg">
        <strong class="subheading">Conecta con nuestras redes sociales!</strong>

        <v-spacer />

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="footeraccent justify-center">
        &copy;2018 — <strong>Webicultores</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['public', 'people', 'whatshot', 'share']
  })
}
</script>

<style media="screen">
.footerbg {
  background-color: #ff0375;
}
.footeraccent {
  background-color: #04bbff;
  color: black;
}
</style>
