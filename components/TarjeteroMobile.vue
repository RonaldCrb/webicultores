<template>
  <v-container fluid>
    <v-layout row justify-center>
      <h1 class="titulo">
        Te Ofrecemos
      </h1>
    </v-layout>
    <v-layout row wrap>
      <v-flex
        v-for="card in cardItems"
        :key="card.title"
        class="bg"
        xs12
        pa-1
        ma-4
      >
        <v-card router :to="card.link">
          <v-flex xs12>
            <img class="foto" :src="`${card.icon}`" :hint="card.content">
          </v-flex>
          <v-card-title>
            <v-container>
              <v-layout row wrap>
                <v-flex>
                  <h1 class="centro titulo2">
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
          icon: 'icons/CreativosF.png',
          title: 'Arte!',
          content: 'Arte visionaria que eleva tu estado de conciencia',
          link: 'arte'
        },
        {
          color: '#3F51B5',
          icon: 'icons/MarketingF.png',
          title: 'Marketing!',
          content: 'Mercadeo de guerrilla para verte justo como quieres',
          link: 'marketing'
        },
        {
          color: '#04bbff',
          icon: 'icons/AppsF.png',
          title: 'Apps!',
          content: 'Apps que agradan a tus sentidos y manejan tu data',
          link: 'apps'
        },
        {
          color: '#04bbff',
          icon: 'icons/ComunidadF.png',
          title: 'Comunidad!',
          content: 'Somos Amantes de el Ultimate Frisbee y los Trickshots',
          link: 'comunidad'
        }
      ]
    }
  }
}
</script>

<style scoped>
.foto {
  transform: scale(0.7);
  transition: 0.4s;
  align-self: center;
  padding: 30px;
  width: 100%;
}
.foto:hover {
  transform: scale(0.9);
}
.centro {
  text-align: center;
}
.titulo {
  text-align: center;
  font-size: 2em;
  text-shadow: 4px 4px #5f2ae4;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Helvetica' fantasy;
  font-weight: bolder;
  margin-bottom: 40px;
  color: white;
  transition: 0.6s;
}
.titulo2 {
  text-align: center;
  font-size: 2em;
  text-shadow: 2px 2px #ff0375;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Helvetica' fantasy;
  font-weight: bolder;
  color: white;
}
.titulo:hover {
  letter-spacing: 8px;
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
