<template>
  <div>
    <v-container fluid>
      <v-layout row justify-center>
        <v-flex
          v-for="card in cardItems"
          :key="card.title"
          class="bg"
          xs12
          sm6
          md3
          pa-1
          ma-4
        >
          <nuxt-link :to="card.link">
            <v-card dark>
              <img class="foto" :src="`${card.icon}`" :hint="card.content">

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
          icon: 'icons/Creativosf.png',
          title: 'Creativos',
          content: 'Arte visionaria que eleva tu estado de conciencia dfdsf',
          link: 'arte'
        },
        {
          color: '#3F51B5',
          icon: 'icons/MarketingF.png',
          title: 'Marketing',
          content: 'Mercadeo de guerrilla para verte justo como quieres',
          link: 'marketing'
        },
        {
          color: '#04bbff',
          icon: 'icons/ComunidadF.png',
          title: 'Comunidad',
          content: 'Somos Amantes de el Ultimate Frisbee y los Trickshots',
          link: 'comandoultimate'
        },
        {
          color: '#04bbff',
          icon: 'icons/AppsF.png',
          title: 'Apps',
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
  transform: scale(0.9);
  align-self: center;
  padding: 30px;
  width: 100%;
}
.foto::before {
  content: '';
  top: -2px;
  left: -2px;
  opacity: 0;
  width: 165px;
  height: 165px;
  position: absolute;
  border-radius: 50%;
  transition: 0.8s 0.2s;
  border: 3px solid #ff0375;
  box-shadow: 0 0 4px #5f2ae4;
}
.bg {
  background-image: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
</style>
