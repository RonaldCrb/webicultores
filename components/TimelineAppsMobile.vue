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
  data() {
    return {
      cardItems: [
        {
          icon: 'important_devices',
          color: '#ff0375',
          image: 'http://tododeredes.mx/wp-content/uploads/Responsive1.png',
          title: 'Aplicaciones Progresivas',
          content: `Las aplicaciones web progresivas son una evolución natural de
          las aplicaciones web que difuminan la barrera entre la web y las aplicaciones,
          pudiendo realizar tareas que generalmente solo las aplicaciones nativas
          podían llevar a cabo. Algunos ejemplos son las notificaciones, el funcionamiento
          sin conexión a Internet o la posibilidad de probar una versión más ligera
          antes de bajarte una aplicación nativa de verdad.`
        },
        {
          step: 2,
          icon: 'list',
          color: '#5f2ae4',
          title: 'Sistemas de gestion de datos',
          image:
            'http://blogs.bmc.com/wp-content/uploads/2016/06/database-blue.png',
          content: `La implementación de un sistema de gestión de datos promueve una
          imagen integrada de las operaciones de una organización. Es fácil ver cómo
          los procesos en un segmento de la organización afectan a otros segmentos.
          Por lo tanto, la integración efectiva de los datos se logra mediante el
          uso de sistemas de gestión de datos.`
        },
        {
          step: 3,
          icon: 'shopping_cart',
          color: '#04bbff',
          title: 'E-COMMERCE',
          image:
            'https://cdn.semrush.com/blog/static/media/8c/d7/8cd76c5e51533cf3ee7c428999d22ed9/resize/885x-/crear-ecommerce-exito.jpg',
          content: `El comercio electrónico, también conocido como e-commerce (electronic
            commerce en inglés) o bien comercio por Internet o comercio en línea,
            consiste en la compra y venta de productos o de servicios a través de
            medios electrónicos, tales como redes sociales y otras páginas web.`
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
.fotos {
  width: 100%;
  height: auto;
}
.bg {
  background-image: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
</style>
