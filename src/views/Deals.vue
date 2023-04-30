<script>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import Dealsitems from '../components/Dealsitems.vue'

export default {
  name: 'Deals',
  components: {
    Header,
    HeroSection,
    Dealsitems
  }
}
</script>

<template>
        <Header />
        <HeroSection />
        <Dealsitems />
</template>

<style>
body {
    overflow: visible;
  }
</style>