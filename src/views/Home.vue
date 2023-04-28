<script>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HeroSection,
    Footer
  }
}
</script>

<template>
    <Header />
    <HeroSection />
    <Footer />
</template>

<style>
body {
  overflow: hidden;
}
</style>