<template>
  <div>
    <v-container fluid>
      <v-layout row justify-center>
        <h1 class="titulo">
          Te Ofrecemos
        </h1>
      </v-layout>

      <v-layout row justify-center>
        <v-flex
          v-for="card in cardItems"
          :key="card.title"
          class="bg"
          sm6
          md3
          pa-1
          ma-1
          fill-height
        >
          <nuxt-link :to="card.link">
            <v-card flat dark>
              <v-img class="foto" :src="`${card.icon}`" :hint="card.content" />
              <v-card-title primary-title>
                <v-container>
                  <v-layout row>
                    <v-flex>
                      <h1 class="centro">
                        {{ card.title }}
                      </h1>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-title>
              <v-card-text class="centro">
                <h3 class="centro contenido">
                  {{ card.content }}
                </h3>
              </v-card-text>
            </v-card>
          </nuxt-link>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    cardItems() {
      return this.$store.state.inicio.cardItems
    }
  }
}
</script>
<style scoped>
.centro {
  margin-top: -20px;
  text-align: center;
}
.contenido {
  font-size: 1.5em;
}
.centroimg {
  align-self: center;
  height: 100%;
  width: 100%;
}
.foto {
  transform: rotate(0deg) scale(0.7);
  transition: 0.4s;
  align-self: center;
  padding: 30px;
  width: 100%;
}
.foto:hover {
  transform: rotate(360deg) scale(0.9);
}
.bg {
  background-image: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
.titulo {
  text-align: center;
  font-size: 3em;
  text-shadow: 4px 4px #5f2ae4;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Helvetica' fantasy;
  font-weight: bolder;
  margin-bottom: 40px;
  color: white;
  transition: 0.6s;
}
.titulo:hover {
  letter-spacing: 12px;
}
</style>
