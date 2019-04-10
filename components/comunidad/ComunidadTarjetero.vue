<template>
  <div>
    <v-container fluid>
      <v-layout column align-center justify-center>
        <v-flex v-for="(card, i) in tarjetasComunidad" :key="i" xs12 py-4>
          <v-card class="tarjetas">
            <v-layout row wrap>
              <v-flex xs12>
                <img class="fotos" :src="card.src">
              </v-flex>
              <v-flex xs12>
                <v-card-title primary-title>
                  <p class="titulo">
                    {{ card.title }}
                  </p>
                </v-card-title>
                <v-card-actions>
                  <DialogoTarjetero
                    :src="card.src"
                    :title="card.title"
                    :content="card.content"
                  />
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import DialogoTarjetero from '@/components/comunidad/DialogoTarjetero.vue'
export default {
  components: {
    DialogoTarjetero
  },
  computed: {
    tarjetasComunidad() {
      return this.$store.state.comunidad.tarjetasComunidad
    }
  }
}
</script>

<style scoped>
.fotos {
  width: 100%;
  height: auto;
  max-height: 800px;
}
.tarjetas {
  max-width: 1000px;
  justify-content: center;
}
.american {
  color: blue;
}
.contenido {
  font-size: 1.6em;
  padding: 10px;
}
.titulo {
  padding: 20px;
  font-size: 2em;
  text-align: center;
}
</style>
