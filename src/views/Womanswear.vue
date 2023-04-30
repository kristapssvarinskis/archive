<script>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import Womanswearitems from '../components/Womanswearitems.vue'

export default {
  name: 'Womanswear',
  components: {
    Header,
    HeroSection,
    Womanswearitems
  }
}
</script>

<template>
        <Header />
        <HeroSection />
        <Womanswearitems />
</template>

<style>
body {
    overflow: visible;
  }
</style>