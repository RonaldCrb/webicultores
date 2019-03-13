<template>
  <img
    class="VuetifyLogo"
    alt="Vuetify Logo"
    src="~/assets/W.png"
  >
</template>
<style>
.VuetifyLogo {
  padding-bottom: 10px;
  width: 50px;
  margin-left: 15px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
