<script>
import 'tailwindcss/tailwind.css'
</script>

<template>
    <header class="fixed top-0 left-0 w-full">
      <div class="bg-white py-4 px-8 flex items-center justify-between">
          <a href="/">
            <img src="src/assets/Logo.svg" alt="Archive" class="h-10 px-3">
          </a>
  
        <div class="flex items-center">
  
          <a href="/register" class="bg-white text-gray-900 font-bold border-black border rounded-none hover:bg-black hover:text-white transition duration-300 px-3 py-2 h-10 ml-2">REGISTER</a>
  
          <a href="/login" class="bg-white text-gray-900 font-bold border-black border rounded-none hover:bg-black hover:text-white transition duration-300 px-3 py-2 h-10 ml-2">LOGIN</a>
        </div>
      </div>
  
      <div class="h-0.5 bg-black w-full"></div>
    </header>
</template>

<style scoped>
  input:focus,
  button:focus,
  a:focus {
    outline: none;
  }

  body {
    margin-top: 64px; /* adjust to match the height of the header */
  }

  /* Center the search form */
  form {
    margin: 0 auto;
  }
  
  /* Make the search input wider */
  input[type="text"] {
    width: 160px;
  }

  /* Media query for larger screens */
  @media (min-width: 768px) {
    input[type="text"] {
      width: 384px;
    }
  }
</style>


