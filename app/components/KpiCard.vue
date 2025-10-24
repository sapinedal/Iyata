  <template>
    <div
      class="flex flex-col justify-between bg-[#FDFDFD] rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#E3E3E3]"
    >
      <div>
        <h3 class="text-xs sm:text-sm font-medium text-[#0D0D0D]">
          {{ title }}
        </h3>
        <p
          class="text-2xl sm:text-3xl font-semibold text-[#0D0D0D] mt-1 tracking-tight"
        >
          {{ value }}
        </p>
      </div>
  
      <div class="flex items-center justify-between mt-3 gap-2">
        <span class="text-xs text-[#727272] flex-1">
          {{ subtitle }}
        </span>
        <component :is="icon" class="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
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
  