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
          color="#2E7D32"
          icon="assignment"
          fill-dot
        >
          <v-card color="#2E7D32">
            <v-card-title class="title">
              Deposita!
            </v-card-title>
            <v-card-text class="black--text bg">
              <p>Deposita en esta cuenta en los siguientes bancos</p>
              <AccountDialog />
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          color="#2E7D32"
          icon="send"
          fill-dot
        >
          <v-card color="#2E7D32">
            <v-card-title class="title">
              Crea tu Remesa!
            </v-card-title>
            <v-card-text class="black--text bg">
              <p>Llena el formulario electronico con los datos de tu deposito y los datos de la persona que recibe la remesa en Venezuela.</p>
              <OrderForm />
            </v-card-text>
          </v-card>
        </v-timeline-item>

        <v-timeline-item
          color="#2E7D32"
          icon="people"
          fill-dot
        >
          <v-card color="#2E7D32">
            <v-card-title class="title">
              Registrate!
            </v-card-title>
            <v-card-text class="black--text  bg">
              <p>Suscribete a nuestra aplicacion y mantente informado sobre nuestras ofertas y servicios a traves de nuestra pagina y nuestras redes sociales</p>
              <SocialReg />
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
  </v-container>
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
  }
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
