<script>
import 'tailwindcss/tailwind.css'
import { registerUser } from '../helpers/auth'
export default {
  data(){
    return{
      form:{
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        password_confirmation: null
      }
    }
  },
  methods:{
    async submit(){
      let registerData = await registerUser(this.form)
      if (registerData.status){
        this.$router.push('/login')
      }
      //Handle error
    }  
  }
}
</script>

<template>
    <div class="flex justify-center mt-20 mb-10">
      <div class="border border-black w-96 h-full p-6">
        <div class="flex flex-col space-y-4">
          <input v-model="form.firstName" type="text" id="first-name" class="border border-black rounded-none py-2 px-4 mt-2" placeholder="First Name">
          <input v-model="form.lastName" type="text" id="last-name" class="border border-black rounded-none py-2 px-4" placeholder="Last Name">
          <input v-model="form.email" type="email" id="email" class="border border-black rounded-none py-2 px-4" placeholder="Email Address">
          <input v-model="form.password" type="password" id="password" class="border border-black rounded-none py-2 px-4" placeholder="Password">
          <input v-model="form.password_confirmation" type="password" id="repeat-password" class="border border-black rounded-none py-2 px-4" placeholder="Repeat Password">
        </div>
        <div class="flex justify-center items-center flex-col">
          <button @click="submit()" class="bg-black text-white border border-black rounded-none py-2 px-20 mt-4 hover:bg-white hover:text-black transition duration-300">REGISTER</button>
          <p class="mt-4">Already have an account? <a href="/login" class="text-black">Log In</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <style>
    .border-black {
      border-color: black;
    }
  </style>
  
  