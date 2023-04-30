<template>
    <div class="hero mt-40">
      <div class="text-lg font-bold mx-40">On Archive</div>
      <div class="flex justify-center mt-6">
        <a href="#" class="mr-4">
          <div class="w-32 h-32 bg-gray-400 flex items-center justify-center">
            <img src="https://i.pinimg.com/736x/6e/a1/b4/6ea1b451928c9a915d9868b1179b5f72.jpg" alt="" class="w-30" />
          </div>
          <div class="text-center mt-2 font-bold">Deals</div>
        </a>
        <a href="#" class="mr-4">
          <div class="w-32 h-32 bg-gray-400 flex items-center justify-center">
            <img src="https://pbs.twimg.com/media/FIR-0T0XsAQmYd4.jpg" alt="" class="w-30" />
          </div>
          <div class="text-center mt-2 font-bold">Shirts</div>
        </a>
        <a href="#" class="mr-4">
          <div class="w-32 h-32 bg-gray-400 flex items-center justify-center">
            <img src="https://balenciagastock.com/wp-content/uploads/2022/10/LOW-CROTCH-JEANS-IN-BLUE.jpg" alt="" class="w-30" />
          </div>
          <div class="text-center mt-2 font-bold">Jeans</div>
        </a>
        <a href="#" class="mr-4">
          <div class="w-32 h-32 bg-gray-400 flex items-center justify-center">
            <img src="https://i.etsystatic.com/38360999/r/il/5ce0ff/4395808293/il_fullxfull.4395808293_jzil.jpg" alt="" class="w-30" />
          </div>
          <div class="text-center mt-2 font-bold">Shoes</div>
        </a>
        <a href="#">
          <div class="w-32 h-32 bg-gray-400 flex items-center justify-center">
            <img src="https://canellofabrics.gr/wp-content/uploads/2021/10/Grenfell-Trench-Coat-Beige-150x150.jpg" alt="" class="w-30" />
          </div>
          <div class="text-center mt-2 font-bold">Coats</div>
        </a>
      </div>
    </div>
    <div class="flex justify-center mt-6 flex-grow-1 z-10">
      <div class="w-2/3">
        <div class="relative bg-gray-400 rounded-md overflow-hidden" style="height: 280px;">
          <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2016%2F09%2Frick-owens-new-york-store-1.jpg?q=75&w=800&cbr=1&fit=max" alt="" class="w-full h-full object-cover" />
          <div class="absolute top-0 left-0 bg-black bg-opacity-10 text-white p-4" style="width: calc(100% - 0rem); height: calc(100% - 0rem);">
            <div class="text-xl font-bold mb-2" style="text-shadow: 1px 1px black;">Shop Archive</div>
            <div class="text-lg mb-4" style="text-shadow: 1px 1px black;">Archive is the best online market place to buy and sell clothes, shoes and accessories all in one place. Archive is the place to start your fashion journey!</div>
            <div class="border-2 border-white inline-block px-4 py-2 font-bold uppercase hover:bg-white hover:text-black transition duration-300" style="text-shadow: 1px 1px black;">Shop Now</div>
          </div>
        </div>
      </div>
    </div>     
  </template>
    
    <script scoped>
    export default {
      name: "HeroSection",
    };
    </script>
    
    <style scoped>
    .square {
      width: 160px;
      height: 160px;
      background-color: #fff;
    }
    
    .square__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .square:hover {
      transform: translateY(-1rem);
      box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.15);
    }
    
    .hero-section {
      text-align: center;
      z-index: -1;
    }
    
    @media (min-width: 768px) {
      .square {
        width: 200px;
        height: 200px;
      }
    }
    </style>
    