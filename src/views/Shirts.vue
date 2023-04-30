<script>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import Shirtsitems from '../components/Shirtsitems.vue'

export default {
  name: 'Shirts',
  components: {
    Header,
    HeroSection,
    Shirtsitems
  }
}
</script>

<template>
        <Header />
        <HeroSection />
        <Shirtsitems />
</template>

<style>
body {
    overflow: visible;
  }
</style>