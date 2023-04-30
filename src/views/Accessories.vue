<script>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import Accessoriesitems from '../components/Accessoriesitems.vue'

export default {
  name: 'Coats',
  components: {
    Header,
    HeroSection,
    Accessoriesitems
  }
}
</script>

<template>
        <Header />
        <HeroSection />
        <Accessoriesitems />
</template>

<style>
body {
    overflow: visible;
  }
</style>