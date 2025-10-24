<template>
    <header class="flex items-center justify-between bg-transparent p-4">
      <h1 class="text-3xl font-bold text-[#0D0D0D]">Dashboard</h1>
  
      <div class="flex items-center gap-3">
        <div class="relative">
          <svg class="absolute left-4 top-1/2 -translate-y-1/2 text-[#727272]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input
            type="text"
            placeholder="Busca cualquier cosa..."
            class="w-80 rounded-xl bg-[#FDFDFD] pl-11 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#2A2A2A]/10 text-[#0D0D0D] placeholder:text-[#727272]"
          />
        </div>
  
        <button class="bg-[#2A2A2A] text-[#FDFDFD] px-5 py-2.5 rounded-xl hover:bg-[#0D0D0D] transition-all duration-200 text-sm font-medium">
          Crear
        </button>
  
        <button class="p-2.5 hover:bg-[#FDFDFD] rounded-xl transition-all duration-200 text-[#727272] hover:text-[#0D0D0D]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
          </svg>
        </button>
  
        <button class="p-2.5 hover:bg-[#FDFDFD] rounded-xl transition-all duration-200 text-[#727272] hover:text-[#0D0D0D]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
  
        <img
          src="../assets/images/logo-samuel-user.png"
          alt="User"
          class="w-9 h-9 rounded-full border-2 border-[#FDFDFD] shadow-sm object-cover"
        />
      </div>
    </header>
  </template>
  