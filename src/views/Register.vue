<script>
  import LoginAndRegisterHeader from '../components/LoginAndRegisterHeader.vue';
  import RegisterHero from '../components/RegisterHero.vue';
  import Footer from '../components/Footer.vue';

  export default {
    name: 'Register',
    components: {
      LoginAndRegisterHeader, 
      RegisterHero,
      Footer
    }
  }
</script>

<template>
    <LoginAndRegisterHeader />
    <RegisterHero />
    <Footer />
</template>