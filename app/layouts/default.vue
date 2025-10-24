<template>
    <div class="flex min-h-screen bg-[#E3E3E3]">
      <Sidebar />
  
      <div class="flex-1 flex flex-col">
        <Header />
  
        <main class="flex-1 p-6 overflow-y-auto">
          <slot />
        </main>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Sidebar from '../components/Sidebar.vue'
  import Header from '../components/Header.vue'
  </script>
  