<template>
  <v-container class="text-xs-center">
    <v-layout
      row
      align-center
      justify-center
    >
      <v-flex xs12>
        <v-dialog
          v-model="dialog"
          persistent
          max-width="800px"
        >
          <v-btn
            slot="activator"
            large
            ripple
            round
            class="bg"
          >
            <v-icon left>
              send
            </v-icon>Postea una Noticia
          </v-btn>
          <v-card>
            <v-card-title>
              <img src="~/assets/LogoColors.png" height="135px">
              <h1 class="text-xs-center">
                Tarjetero de Comunidad
              </h1>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-form
                  ref="form"
                  v-model="valid"
                  @submit.prevent="createPost"
                >
                  <v-layout wrap>
                    <v-flex
                      xs12
                      sm6
                    >
                      <v-text-field
                        v-model="src"
                        label="URL imagen"
                        hint="Introduzca el URL de la imagen (static)"
                      />
                    </v-flex>
                    <v-flex
                      xs12
                      sm6
                    >
                      <v-text-field
                        v-model="title"
                        label="Titulo"
                        hint="Introduzca el titulo de su publicacion"
                      />
                    </v-flex>
                    <v-textarea
                      v-model="content"
                      label="Contenido"
                      hint="Introduzca el contenido de la publicacion respetando espacios y puntuacion"
                    />
                  </v-layout>
                </v-form>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                class="bg"
                flat
                ripple
                @click.native="dialog = false"
              >
                <v-icon left>
                  highlight_off
                </v-icon>Cancelar
              </v-btn>
              <v-btn
                :disabled="!valid"
                class="bg"
                @click.exact="createPost"
                @click.native="dialog = false"
              >
                <v-icon left>
                  send
                </v-icon>Envia YA
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    valid: false,
    title: '',
    content: '',
    src: ''
  }),
  methods: {
    clear() {
      this.title = ''
      this.content = ''
      this.src = ''
    },
    createPost: function() {
      const payload = {
        title: this.title,
        content: this.content,
        src: this.src
      }
      this.$store.dispatch('comunidad/createPost', payload)
      this.clear()
    }
  }
}
</script>

<style scoped>
.bg {
  background-image: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
</style>
