<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background: white;
}
#nprogress .bar {
  z-index: 9999;
  background: #409eff !important;
}
</style>
