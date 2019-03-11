<template>
  <v-container fluid>
    <v-flex
      fluid
      xs12
    >
      <v-timeline
        align-top
        class="hidden-xs-only"
      >
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
            <v-card-title class="title">
              <h1>{{ item.title }}</h1>
            </v-card-title>
            <v-card-text class="black--text bg">
              <p>{{ item.content }}</p>
            </v-card-text>
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
        icon: 'all_inclusive',
        color: '#ff0375',
        title: 'Email Marketing',
        content: `El email marketing (emailing o e-mailing) es una excelente
        herramienta de comunicación de la que dispone la marca para comunicarse
        con el cliente. Es un arma muy poderosa que, bien utilizada, puede dar
        muy buenos resultados, sobre todo de conversión. Es una oportunidad
        perfecta para ofrecer al usuario contenido de calidad y de valor. Un plus
        personalizable con el objetivo de convertir los leads en posibles
        clientes. El email marketing utiliza el correo electrónico y se envía a
        un grupo de contactos, es personalizable y nada invasivo.`
      },
      {
        icon: 'directions_boat',
        color: '#5f2ae4',
        title: 'Search Engine Optimization (SEO)',
        content: `El SEO (Search Engine Optimization) no es otra cosa que optimizar
        un sitio web para mejorar su posición en los resultados obtenidos por los
        motores de búsqueda. Es decir, intentar que tu web salga la primera cuando
        los usuarios busquen en Google`
      },
      {
        icon: 'apps',
        color: '#04bbff',
        title: 'Redes Sociales',
        content: `Las innovaciones del marketing en redes sociales están fundamentadas
        en que esta actividad no se limita a lanzar un anuncio, sino cómo, cuándo y
        sobre todo: a quién va dedicado. Es decir que el marketing en redes sociales,
        es todo un proceso complejo. Debido a ello, las empresas gastan millones de
        dólares cada año investigando todo el tráfico que hay en las redes sociales,
        para que de esta manera, realicen mejores campañas publicitarias.`
      }
    ]
  })
}
</script>

<style scoped>
.icon {
  color: black;
}

.title {
  color: white;
}
.bg {
  /* background-image: linear-gradient(to left, #001208, #001208); */
  background-color: #e0e0e0;
}
</style>
