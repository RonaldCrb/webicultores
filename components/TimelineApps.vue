<template>
  <v-container fluid>
    <v-flex fluid xs12>
      <v-timeline align-top class="hidden-xs-only">
        <v-timeline-item
          v-for="item in items"
          :key="item.title"
          :color="item.color"
          :icon="item.icon"
          fill-dot
          large
          dark
        >
          <v-card :color="item.color">
            <v-layout row wrap>
              <v-flex xs12>
                <img class="fotos" :src="item.image">
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-title class="title">
                  <h1>{{ item.title }}</h1>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-text class="black--text bg texto">
                  <p>{{ item.content }}</p>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        icon: 'important_devices',
        color: '#ff0375',
        image: 'http://tododeredes.mx/wp-content/uploads/Responsive1.png',
        title: 'Aplicaciones Universales',
        content: `Ya sea usando o aprendiendo JavaScript en general, seguramente
        hayas escuchado el término Aplicaciones universales o Aplicaciones isomórficas
        y si estás aprendiendo JS probablemente te preguntes qué significa. Una
        aplicación universal es aquella que comparte todo (o casi todo) su código
        entre el cliente y el servidor.`
      },
      {
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
  })
}
</script>

<style scoped>
.icon {
  color: black;
}
.fotos {
  width: 100%;
  height: auto;
}
.title {
  color: white;
}
.bg {
  /* background-image: linear-gradient(to left, #001208, #001208); */
  background-color: #e0e0e0;
}
.texto {
  font-size: 1.5em;
}
</style>
