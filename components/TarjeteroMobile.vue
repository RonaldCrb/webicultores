<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex
        v-for="card in cardItems"
        :key="card.title"
        class="bg"
        xs12
        sm3
        pa-1
        ma-4
      >
        <v-card pt-2>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-icon size="160" :color="card.color" class="centroimg">
                  {{ card.icon }}
                </v-icon>
              </v-flex>
            </v-layout>
          </v-container>

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
  data() {
    return {
      cardItems: [
        {
          color: '#ff0375',
          icon: 'verified_user',
          title: 'Arte!',
          content: 'Arte visionaria que eleva tu estado de conciencia'
        },
        {
          color: '#5f2ae4',
          icon: 'monetization_on',
          title: 'Marketing!',
          content: 'Mercadeo de guerrilla para verte justo como quieres '
        },
        {
          color: '#04bbff',
          icon: 'offline_bolt',
          title: 'Ultimate!',
          content: 'Somos Amantes de el Ultimate Frisbee y los Trickshots'
        },
        {
          color: '#04bbff',
          icon: 'how_to_reg',
          title: 'Apps!',
          content: 'Apps que agradan a tus sentidos y manejan tu data'
        }
      ]
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
.bg {
  background-image: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
</style>
