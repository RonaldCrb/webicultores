<template>
  <div>
    <v-container fluid>
      <v-layout column>
        <v-flex v-for="card in tarjetasComunidad" :key="card.title" xs12 py-1>
          <v-card class="tarjetas">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <img class="fotos" :src="card.src">
              </v-flex>
              <v-flex xs12 sm6>
                <v-card-title primary-title>
                  <p class="titulo">
                    {{ card.title }}
                  </p>
                </v-card-title>
                <v-card-text class="ma-1">
                  <p class="contenido">
                    {{ card.content }}
                  </p>
                </v-card-text>
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
}
.tarjetas {
}
.american {
  color: blue;
}
.contenido {
  font-size: 1.6em;
  padding: 10px;
}
.titulo {
  padding: 40px;
  font-size: 4em;
}
</style>
