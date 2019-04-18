<template>
  <div>
    <v-container fluid>
      <v-layout row justify-center wrap>
        <v-flex xs12>
          <h1 class="py-1 centro titulo">
            SERVICIO DE INTEGRACION DE MARKETING DIGITAL
          </h1>
        </v-flex>
        <v-flex
          class="bg"
          xs12
          sm8
          pa-1
          fill-height
        >
          <v-card dark>
            <v-card-title>
              <v-flex>
                <p class="webicultura">
                 Llevamos paso a paso la integración de tu emprendimiento 
                 o proyecto a lo profundo del marketing digital, el arte y 
                 la creacion de contenido y las aplicaciones web y mobiles
                </p>
              </v-flex>
            </v-card-title>
            <v-card-text class="centro">
              <v-flex xs12 sm8 offset-sm2>
                <h3 class="centro titulo2">
                  Como lo hacemos?
                </h3>
                <ul>
                  <li class="mision">
                    Identificamos los puntos de contacto entre tus productos y tus clientes
                  </li>
                  <li class="mision">
                    Entendemos las oportunidades para influenciar a tus consumidores
                  </li>
                  <li class="mision">
                    Ofrecemos a nuestros clientes la mejor experiencia en sus proyectos
                  </li>
                </ul>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.centro {
  text-align: center;
}
.webicultura {
  text-align: center;
  font-size: 1.4em;
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
.titulo {
  font-size: 2em;
  text-shadow: 4px 4px #5f2ae4;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Helvetica' fantasy;
  font-weight: bolder;
  /* background-color: black; */
}
.titulo2 {
  font-size: 2em;
  text-shadow: 2px 2px #5f2ae4;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.mision {
  font-size: 1.4em;
}
.como {
  font-size: 2em;
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
  box-shadow: 0 0 2px #5f2ae4;
}
.bg {
  background-image: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
</style>
