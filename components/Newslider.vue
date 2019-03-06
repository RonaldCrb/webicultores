<template>
  <div class="slider">
    <div class="contenido">
      <p class="slider__title">
        Web
      </p>
    </div>
    <div class="contenido">
      <p class="slider__title">
        Diseño
      </p>
    </div>
    <div class="contenido">
      <p class="slider__title">
        Cultores
      </p>
    </div>
    <!-- <div class="contenido"><p class="slider__title">Orion</p></div> -->
  </div>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

.slider {
  display: flex;
  background: ;
  height: 750px;
}

.contenido {
  flex: 1;
  font-weight: bold;
  font-size: 20px;
  display: flex;
  transition: flex-grow 0.8s;
}

.contenido:hover {
  flex-grow: 20;
}

.contenido:hover .slider__title {
  margin-top: 700px;
  color: white;
}

.contenido:nth-child(1) {
  background-image: image('~/assets/bg-web.jpg');
  background-size: cover;
  animation: slider 8s infinite alternate;
}

@keyframes slider {
  from {
    background-position: left center;
  }
  to {
    background-position: right center;
  }
}

.contenido:nth-child(2) {
  background-image: url(../assets/bg-web.jpg);
  background-size: cover;
  animation: slider 8s infinite alternate;
}

.contenido:nth-child(3) {
  background-image: url(/../img/webi.jpg);
  background-size: cover;
  animation: slider 8s infinite alternate;
}

.contenido:nth-child(4) {
  background-image: url(/../img/prueba.svg);
  background-size: cover;
  animation: slider 8s infinite alternate;
}

.slider__title {
  color: transparent;
  margin: auto;
  position: absolute;
  margin-top: 80px;
  margin-left: 40px;
  font-size: 24px;
  transition: transform 1s 1s;
  transition: margin-top 1s;
}
</style>
