<script>
  import LoginAndRegisterHeader from '../components/LoginAndRegisterHeader.vue';
  import LoginHero from '../components/LoginHero.vue';
  import Footer from '../components/Footer.vue';

  export default {
    name: 'Login',
    components: {
      LoginAndRegisterHeader, 
      LoginHero,
      Footer
    }
  }
</script>

<template>
    <LoginAndRegisterHeader />
    <LoginHero />
    <Footer />
</template>