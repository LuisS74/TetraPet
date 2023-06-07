<template>
  <NavBar></NavBar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-image: url('./assets/img/dogs.jpg');
  width: 100%;
    height: 650px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
}
body::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(2px); /* Ajusta el valor del desenfoque según tus preferencias */
  z-index: -1;
}
</style>
