<script>
import 'tailwindcss/tailwind.css'
import { logInUser } from '../helpers/auth'
export default{
  data(){
    return{
      form:{
        email: null,
        password: null
      }
    }
  },
  methods:{
    async submit(){
      let logInData = await logInUser(this.form)
      console.log(logInData)
      if (logInData.success){
        this.$router.push('/')
      } else {
        console.log('Login not succsessful!')
      }
    }  
  }
}
</script>

<template>
    <div class="flex justify-center mt-20 mb-10">
      <div class="border border-black w-96 h-full p-6">
        <div class="flex flex-col space-y-4">
          <input v-model="form.email" type="email" id="email" class="border border-black rounded-none py-2 px-4" placeholder="Email Address">
          <input v-model="form.password" type="password" id="password" class="border border-black rounded-none py-2 px-4" placeholder="Password">
        </div>
        <div class="flex justify-center items-center flex-col">
          <button @click="submit()" class="bg-black text-white border border-black rounded-none py-2 px-20 mt-4 hover:bg-white hover:text-black transition duration-300">LOGIN</button>
          <p class="mt-4">Dont have an account? <a href="/register" class="text-black">Register</a></p>
        </div>
      </div>
    </div>
</template>
  
<style>
    .border-black {
      border-color: black;
    }
</style>
  
  