<template>
  <div>
    <v-container fluid>
      <v-layout row wrap justify-center>
        <v-flex
          v-for="card in cardItems"
          :key="card.title"
          class="bg"
          xs12
          sm6
          md3
          pa-1
        >
          <nuxt-link :to="card.link">
            <v-card dark>
              <v-responsive contain>
                <v-icon class="centroimg pa-1" :color="card.color" size="200">
                  {{ card.icon }}
                </v-icon>
              </v-responsive>
              <v-card-title primary-title>
                <v-container>
                  <v-layout row wrap>
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
  data() {
    return {
      cardItems: [
        {
          color: '#ff0375',
          icon: 'bubble_chart',
          title: 'Arte!',
          content: 'Arte visionaria que eleva tu estado de conciencia',
          link: 'arte'
        },
        {
          color: '#5f2ae4',
          icon: 'monetization_on',
          title: 'Marketing!',
          content: 'Mercadeo de guerrilla para verte justo como quieres',
          link: 'marketing'
        },
        {
          color: '#04bbff',
          icon: 'offline_bolt',
          title: 'Ultimate!',
          content: 'Somos Amantes de el Ultimate Frisbee y los Trickshots',
          link: 'comandoultimate'
        },
        {
          color: '#04bbff',
          icon: 'stars',
          title: 'Apps!',
          content: 'Apps que agradan a tus sentidos y manejan tu data',
          link: 'apps'
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
