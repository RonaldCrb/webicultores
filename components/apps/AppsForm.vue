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
            </v-icon>Postea un item del timeline
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
                  @submit.prevent="createTimelineItem"
                >
                  <v-layout wrap>
                    <v-flex
                      xs12
                      sm6
                    >
                      <v-text-field
                        v-model="icon"
                        label="icon"
                        hint="Introduzca el icon (static)"
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
                      v-model="color"
                      label="color"
                      hint="Introduzca el color de fondo"
                    />
                    <v-text-field
                      v-model="image"
                      label="image"
                      hint="Introduzca el image"
                    />
                    <v-textarea
                      v-model="content"
                      label="contenido"
                      hint="Introduzca el contenido"
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
                @click.exact="createTimelineItem"
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
    icon: '',
    color: '',
    title: '',
    image: '',
    content: ''
  }),
  methods: {
    clear() {
      this.icon = ''
      this.color = ''
      this.title = ''
      this.image = ''
      this.content = ''
    },
    createTimelineItem: function() {
      const payload = {
        icon: this.icon,
        color: this.color,
        title: this.title,
        image: this.image,
        content: this.content
      }
      this.$store.dispatch('apps/createTimelineItem', payload)
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
