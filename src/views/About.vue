<template>
    <div>
      <AboutHeader />
      <AboutHero />
      <Footer />
    </div>
</template>
  
<script>
  import AboutHeader from '../components/AboutHeader.vue'
  import AboutHero from '../components/AboutHero.vue'
  import Footer from '../components/Footer.vue'
  
  export default {
    name: 'About',
    components: {
      AboutHeader,
      AboutHero,
      Footer
    }
  }
</script>
  
<style>
  body {
    overflow: hidden;
  }
</style>
  