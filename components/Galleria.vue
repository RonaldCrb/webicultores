<template>
  <v-layout justify-center>
    <v-flex xs10 pt-5>
      <v-card>
        <v-container grid-list-sm>
          <v-layout row wrap justify-center>
            <v-flex
              v-for="(pieza, i) in coleccion"
              :key="i"
              xs4
            >
              <DialogoGaleria
                :src="`${pieza.src}`"
                :titulo="`${pieza.titulo}`"
                :color="`${pieza.color}`"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import DialogoGaleria from '@/components/DialogoGaleria.vue'
export default {
  components: {
    DialogoGaleria
  },
  computed: {
    coleccion() {
      return this.$store.state.galeria.coleccion
    }
  }
}
</script>

<style scoped>
</style>
