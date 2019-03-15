<template>
  <v-stepper v-model="e1" class="hidden-sm-and-up" mb-5 pt-5>
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1" color="green">
        Deposita!
      </v-stepper-step>

      <v-divider />

      <v-stepper-step :complete="e1 > 2" step="2" color="green">
        Crea tu Remesa!
      </v-stepper-step>

      <v-divider />

      <v-stepper-step step="3" color="green">
        Registrate!
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card color="#E0E0E0" content-class="justify-center">
          <v-card-title class="title">
            Deposita!
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>Deposita en esta cuenta en los siguientes bancos</p>
            <AccountDialog />
          </v-card-text>
        </v-card>
        <v-btn class="radio" color="#43A047" @click="e1 = 2">
          Siguiente
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card color="#E0E0E0" content-class="justify-center">
          <v-card-title class="title">
            Crea tu Remesa!
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              Llena el formulario electronico con los datos de tu deposito y los
              datos de la persona que recibe la remesa en Venezuela.
            </p>
            <OrderForm />
          </v-card-text>
        </v-card>

        <v-btn class="radio" color="#43A047" @click="e1 = 3">
          Siguiente
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card color="#E0E0E0" content-class="justify-center">
          <v-card-title class="title">
            Registrate!
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              Suscribete a nuestra aplicacion y mantente informado sobre
              nuestras ofertas y servicios a traves de nuestra pagina y nuestras
              redes sociales
            </p>
            <SocialReg />
          </v-card-text>
        </v-card>

        <v-btn class="radio" color="#43A047" @click="e1 = 1">
          Siguiente
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import AccountDialog from '@/components/shared/AccountDialog.vue'
import OrderForm from '@/components/order/OrderForm.vue'
import SocialReg from '@/components/shared/SocialReg.vue'

export default {
  components: {
    AccountDialog,
    OrderForm,
    SocialReg
  },
  data() {
    return {
      e1: 0
    }
  }
}
</script>

<style scoped>
.radio {
  color: black;
  width: 10px;
  border-radius: 20px;
}

.radio2 {
  color: black;
  width: 10px;
  border-radius: 20px;
}
</style>
