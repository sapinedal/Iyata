<template>
    <div
      class="flex flex-col justify-between bg-[#FDFDFD] rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#E3E3E3]"
    >
      <div>
        <h3 class="text-sm font-medium text-[#0D0D0D]">
          {{ title }}
        </h3>
        <p
          class="text-3xl font-semibold text-[#0D0D0D] mt-1 tracking-tight"
        >
          {{ value }}
        </p>
      </div>
  
      <div class="flex items-center justify-between mt-3">
        <span class="text-xs text-[#727272]">
          {{ subtitle }}
        </span>
        <component :is="icon" class="w-5 h-5" />
      </div>
    </div>
  </template>
  
<script setup>
defineProps({
  title: String,
  value: [String, Number],
  subtitle: String,
  icon: [Object, Function]
})
</script>
  