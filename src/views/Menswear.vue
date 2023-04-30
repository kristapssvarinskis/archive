<script>
import Header from '../components/Header.vue'
import MenswearHero from '../components/MenswearHero.vue'
import MenswearItems from '../components/Menswearitems.vue'

export default {
  name: 'Menswear',
  components: {
    Header,
    MenswearHero,
    MenswearItems
  }
}
</script>

<template>
        <Header />
        <MenswearHero />
        <MenswearItems />
</template>

<style>
body {
    overflow: visible;
  }
</style>