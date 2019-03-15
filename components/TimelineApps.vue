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
        title: 'Web Apps',
        content: `Una web app (o aplicación web, en castellano) es una versión de
                  la página web adaptada a cualquier dispositivo móvil, independientemente
                  del sistema operativo que utilice, es decir, son aplicaciones
                  multiplataforma. Estas aplicaciones se basan en HTML, CSS o
                  JavaScript. Las Web App únicamente necesitan un navegador para
                  funcionar; por lo tanto, al no requerir de una descarga desde
                  cualquier tienda de aplicaciones (Play Store, App Store…), no
                  ocupará memoria en los dispositivos móviles (característica muy
                  importante de cara al usuario). Y a su vez, al no requerir de
                  actualizaciones, los usuarios siempre visualizarán la última
                  versión de la aplicación.`
      },
      {
        icon: 'directions_boat',
        color: '#5f2ae4',
        title: 'Native Apps',
        content: `Las aplicaciones nativas se denominan así porque se desarrollan
                  en el lenguaje nativo del propio terminal. Dependiendo de la
                  plataforma para la que queramos nuestra aplicación, desarrollaremos
                  en un lenguaje específico para la misma. Por ejemplo, para
                  desarrollar en Android se utiliza Java, en iOS Objective C, y
                  ahora también el nuevo Swift, y en Windows Phone se usa C# y
                  Visual Basic. NET.`
      },
      {
        icon: 'apps',
        color: '#04bbff',
        title: 'Hybrid Apps',
        content: `Mantienen el carácter multiplataforma en gran parte, siguen usando
                  tecnologías Web, aunque corren localmente en el dispositivo,
                  pudiendo ejecutarse también sin conexión a Internet. Al estar
                  embebidas en un navegador de una aplicación nativa tienen el
                  mismo tipo de acceso a las APIs nativas de cada sistema operativo
                  así como a los recursos propios del sistema tipo procesador,
                  GPS, camara, etc. Además mantiene el modo de distribución de
                  las apps nativas ya que pueden ofrecerse a los App Stores de
                  las diferentes marcas.`
      },
      {
        icon: 'beach_access',
        color: '#ff0375',
        title: 'Progressive Web Apps',
        content: `las aplicaciones web progresivas son una evolución natural de
                  las aplicaciones web que difuminan la barrera entre la web y
                  las aplicaciones, pudiendo realizar tareas que generalmente solo
                  las aplicaciones nativas podían llevar a cabo. Algunos ejemplos
                  son las notificaciones, el funcionamiento sin conexión a Internet
                  o la posibilidad de probar una versión más ligera antes de
                  bajarte una aplicación nativa de verdad.`
      },
      {
        icon: 'spa',
        color: '#5f2ae4',
        title: 'Single Page Apps',
        content: `Un single-page application (SPA), o aplicación de página única
                  es una aplicación web o es un sitio web que cabe en una sola
                  página con el propósito de dar una experiencia más fluida a los
                  usuarios como una aplicación de escritorio. En un SPA todos los
                  códigos de HTML, JavaScript, y CSS se carga de una vez o los
                  recursos necesarios se cargan dinámicamente como lo requiera la
                  página y se van agregando, normalmente como respuesta de las
                  acciones del usuario. La página no tiene que cargar otra vez en
                  ningún punto del proceso tampoco se transfiere a otra página`
      },
      {
        icon: 'wb_cloudy',
        color: '#04bbff',
        title: 'Firebase',
        content: `Firebase es la nueva y mejorada plataforma de desarrollo móvil
                  en la nube de Google. Se trata de una plataforma disponible para
                  diferentes plataformas (Android, iOS, web), con lo que de esta
                  forma presentan una alternativa seria a otras opciones para ahorro
                  de tiempo en el desarrollo. En muchas ocasiones nos planteamos
                  cómo poder acceder a un servicio web para poder tener nuestra
                  aplicación trabajando con datos en la nube. Por ello surgió
                  Firebase, para proveer una API para guardar y sincronizar datos
                  en la nube en tiempo real. `
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
