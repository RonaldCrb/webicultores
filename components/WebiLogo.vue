<template>
  <img
    class="VuetifyLogo"
    alt="Vuetify Logo"
    src="~/assets/W blue.png"
  >
</template>

<style>
.VuetifyLogo {
  width: 55px;
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
