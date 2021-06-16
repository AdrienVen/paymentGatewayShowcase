<template>
  <div id="app">
    <Header/>
    <BrandPayment/>
  </div>
</template>

<script>
const Header = () => import("@/components/Header.vue")
const BrandPayment = () => import("@/components/BrandPayment")

export default {
  name: 'App',
  components: {
    Header,
    BrandPayment

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
</style>
