<template>
    <div class="flex min-h-screen bg-[#E3E3E3]">
      <Sidebar />
  
      <div class="flex-1 flex flex-col w-full lg:w-auto">
        <Header />
  
        <main class="flex-1 p-3 sm:p-4 md:p-6 overflow-y-auto">
          <slot />
        </main>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Sidebar from '../components/Sidebar.vue'
  import Header from '../components/Header.vue'
  </script>
  