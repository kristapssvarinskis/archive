<script setup>
import 'tailwindcss/tailwind.css'
</script>

<template>
    <div class="flex justify-center mt-20 mb-10">
      <div class="border border-black w-96 h-full p-6">
        <div class="flex flex-col space-y-4">
          <input type="text" id="first-name" class="border border-black rounded-none py-2 px-4 mt-2" placeholder="First Name">
          <input type="text" id="last-name" class="border border-black rounded-none py-2 px-4" placeholder="Last Name">
          <input type="email" id="email" class="border border-black rounded-none py-2 px-4" placeholder="Email Address">
          <input type="password" id="password" class="border border-black rounded-none py-2 px-4" placeholder="Password">
          <input type="password" id="repeat-password" class="border border-black rounded-none py-2 px-4" placeholder="Repeat Password">
        </div>
        <div class="flex justify-center items-center flex-col">
          <button class="bg-black text-white border border-black rounded-none py-2 px-20 mt-4 hover:bg-white hover:text-black transition duration-300">REGISTER</button>
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
  
  