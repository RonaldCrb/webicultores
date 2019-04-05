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
                Tarjetero de amigos
              </h1>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-form
                  ref="form"
                  v-model="valid"
                  @submit.prevent="createAmigo"
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
                    <v-text-field
                      v-model="link"
                      label="Link"
                      hint="Introduzca el URL de la pagina oficial de nuestro amigo incluyendo http://paginadelamigo.com"
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
                @click.exact="createAmigo"
                @click.native="dialog = false"
              >
                <v-icon left>
                  send
                </v-icon>Crear Amigo
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
    link: '',
    src: '',
    preview: ''
  }),
  methods: {
    clear() {
      this.src = ''
      this.title = ''
      this.link = ''
    },
    createAmigo: function() {
      const payload = {
        src: this.src,
        title: this.title,
        link: this.link
      }
      this.$store.dispatch('amigos/createAmigo', payload)
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
