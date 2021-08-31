<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <counter title="Salieron"/> -->
  <!-- <Counter :start="10" /> -->

  <Indecision />


</template>

<script>
// import Counter from '../src/components/Counter.vue'
import Indecision from '../src/components/Indecision.vue';

export default {
  name: 'App',
  components: {
    Indecision
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
  margin-top: 60px;
}
</style>
