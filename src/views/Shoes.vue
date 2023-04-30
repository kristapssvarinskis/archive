<script>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import Shoesitems from '../components/Shoesitems.vue'

export default {
  name: 'Shoes',
  components: {
    Header,
    HeroSection,
    Shoesitems
  }
}
</script>

<template>
        <Header />
        <HeroSection />
        <Shoesitems />
</template>

<style>
body {
    overflow: visible;
  }
</style>