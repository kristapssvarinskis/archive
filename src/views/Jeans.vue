<script>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import Jeansitems from '../components/Jeansitems.vue'

export default {
  name: 'Coats',
  components: {
    Header,
    HeroSection,
    Jeansitems
  }
}
</script>

<template>
        <Header />
        <HeroSection />
        <Jeansitems />
</template>

<style>
body {
    overflow: visible;
  }
</style>