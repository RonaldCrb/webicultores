<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex
        v-for="card in timelineItemsApps"
        :key="card.title"
        class="bg"
        xs12
        sm3
        pa-1
        ma-4
      >
        <v-card :color="card.color">
          <v-flex xs12>
            <img :src="card.image" class="fotos">
          </v-flex>
          <v-card-title>
            <v-container>
              <v-layout row wrap>
                <v-flex>
                  <h1 class="centro titulo">
                    {{ card.title }}
                  </h1>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-title>

          <v-card-text>
            <v-flex fluid xs12>
              <p class="centro contenido">
                {{ card.content }}
              </p>
            </v-flex>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    timelineItemsApps() {
      return this.$store.state.apps.timelineItemsApps
    }
  }
}
</script>

<style scoped>
.centro {
  text-align: center;
}
.titulo {
  font-size: 2em;
}
.contenido {
  font-size: 1.5em;
}
.centroimg {
  align-self: center;
  height: 100%;
  width: 100%;
}
.fotos {
  width: 100%;
  height: auto;
}
.bg {
  background-image: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
</style>
