<script>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import Coatsitems from '../components/Coatsitems.vue'

export default {
  name: 'Coats',
  components: {
    Header,
    HeroSection,
    Coatsitems
  }
}
</script>

<template>
        <Header />
        <HeroSection />
        <Coatsitems />
</template>

<style>
body {
    overflow: visible;
  }
</style>