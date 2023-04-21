<script>
export default {
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<template>
  <div class="bg-gray-100 min-h-screen">
    <header class="bg-white shadow-md">
      <div class="flex justify-between items-center py-4 px-8">
        <h1 class="text-lg font-bold text-black">Archive</h1>
        <div class="flex items-center">
          <div class="relative flex-shrink-0 mx-auto">
            <input
              type="text"
              class="w-96 px-4 py-2 border border-black rounded-none bg-white"
              placeholder="Search"
            />
            <button
              class="bg-black text-white px-4 py-2 border border-black ml-2 hover:bg-gray-300 transition-colors duration-200"
            >
              SEARCH
            </button>
          </div>
          <button
            class="ml-6 text-black border-2 border-black py-2 px-4 transition-colors duration-200 hover:bg-gray-300 hover:border-black rounded-none"
          >
            ABOUT
          </button>
          <button
            class="ml-6 text-black border-2 border-black py-2 px-4 transition-colors duration-200 hover:bg-gray-300 hover:border-black rounded-none"
          >
            REGISTER
          </button>
          <button
            class="ml-6 text-black border-2 border-black py-2 px-4 transition-colors duration-200 hover:bg-gray-300 hover:border-black rounded-none"
          >
            LOGIN
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<style>
  .bg-gray-100 {
    background-color: #F8F8F8;
  }

  .bg-white {
    background-color: #FFFFFF;
  }

  .text-black {
    color: #000000;
  }

  .border-black {
    border-color: #000000;
  }

  .hover\:bg-gray-300:hover {
    background-color: #D1D5DB;
  }

  .shadow-md {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }

  .rounded-none {
    border-radius: 0px;
  }

  .rounded-l-none {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .rounded-r-none {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .rounded-t-none {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .rounded-b-none {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .min-h-screen {
    min-height: 100vh;
  }

  input[type="text"]::-webkit-input-placeholder {
    color: #000000;
  }

  input[type="text"]:-moz-placeholder {
    color: #000000;
  }

  input[type="text"]::-moz-placeholder {
    color: #000000;
  }

  input[type="text"]:-ms-input-placeholder {
    color: #000000;
  }
</style>
