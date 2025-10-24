<template>
  <aside class="w-60 p-6 flex flex-col justify-between min-h-screen">
    <div>
      <!-- Logo -->
      <div class="flex items-center gap-3 mb-10 px-2">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center">
          <img src="/suitpress logo.png" alt="Logo" class="w-16 h-auto" />
        </div>
      </div>

      <!-- Navegación -->
      <nav class="space-y-1">
        <button v-for="item in menu" :key="item.name" :class="[
          'flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer',
          item.name === 'Dashboard'
            ? 'bg-white text-[#0D0D0D] shadow-sm'
            : 'text-[#727272] hover:bg-white hover:text-[#0D0D0D]'
        ]">
          <component :is="item.icon" class="w-5 h-5" :stroke-width="item.name === 'Dashboard' ? 2.5 : 2" />
          <span class="text-sm font-medium">{{ item.name }}</span>
        </button>
      </nav>
    </div>

    <!-- Botones inferiores -->
    <div class="flex flex-col gap-2">
      <button class="p-3 hover:bg-white rounded-xl transition-all duration-200 text-[#727272] hover:text-[#0D0D0D]">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>
      <button class="p-3 hover:bg-white rounded-xl transition-all duration-200 text-[#727272] hover:text-[#0D0D0D]">
        <Moon />
      </button>
      <button class="p-3 hover:bg-white rounded-xl transition-all duration-200 text-[#727272] hover:text-[#0D0D0D]">
        <Sun />
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { AlignVerticalSpaceAround, ShoppingCart, ClipboardMinus, Settings, LayoutDashboard, User, Sun, Moon } from 'lucide-vue-next'

const menu = [
  { name: 'Dashboard', icon: LayoutDashboard },
  { name: 'Products', icon: AlignVerticalSpaceAround },
  { name: 'Customers', icon: User },
  { name: 'Shop', icon: ShoppingCart },
  { name: 'Reports', icon: ClipboardMinus },
  { name: 'Settings', icon: Settings },
]
</script>