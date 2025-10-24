<template>
    <div class="flex flex-col gap-3 sm:gap-4">
        <div class="flex items-center justify-between">
            <h2 class="text-base sm:text-lg font-bold text-[#0D0D0D]">{{ title }}</h2>
            <button class="text-xs text-[#727272] hover:text-[#0D0D0D] font-medium">
                Ver todos
            </button>
        </div>
        
        <div class="flex flex-col gap-2.5 sm:gap-3">
            <div 
                v-for="(event, index) in events" 
                :key="index"
                class="flex gap-2.5 sm:gap-3 p-2.5 sm:p-3 hover:bg-[#E3E3E3]/20 rounded-xl transition-all duration-200 cursor-pointer group"
            >

                <div class="flex flex-col items-center justify-center bg-[#E3E3E3] rounded-xl p-2 sm:p-3 min-w-[50px] sm:min-w-[60px]">
                    <span class="text-xs font-medium text-[#727272] uppercase">{{ event.month }}</span>
                    <span class="text-xl sm:text-2xl font-bold text-[#0D0D0D]">{{ event.day }}</span>
                </div>
                
                <div class="flex-1 flex flex-col justify-center gap-1 min-w-0">
                    <h3 class="text-xs sm:text-sm font-semibold text-[#0D0D0D] group-hover:text-[#2A2A2A] truncate">
                        {{ event.title }}
                    </h3>
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="text-xs text-[#727272]">{{ event.time }}</span>
                        <span v-if="event.location" class="text-xs text-[#727272] hidden sm:inline">• {{ event.location }}</span>
                    </div>
                    <div v-if="event.category" 
                        :class="[
                            'inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-lg w-fit mt-1',
                            getCategoryColor(event.category)
                        ]">
                        <span class="w-1.5 h-1.5 rounded-full bg-current"></span>
                        <span class="capitalize">{{ event.category }}</span>
                    </div>
                </div>
            </div>
            
            <div v-if="!events || events.length === 0" 
                class="flex flex-col items-center justify-center py-6 sm:py-8 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" 
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" 
                    class="text-[#727272] mb-2 sm:w-12 sm:h-12">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <p class="text-sm text-[#727272]">No hay eventos próximos</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Event {
    title: string
    day: string | number
    month: string
    time: string
    location?: string
    category?: 'meeting' | 'deadline' | 'event' | 'personal'
}

defineProps<{
    title: string
    events: Event[]
}>()

const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
        meeting: 'bg-blue-100 text-blue-600',
        deadline: 'bg-red-100 text-red-600',
        event: 'bg-green-100 text-green-600',
        personal: 'bg-purple-100 text-purple-600'
    }
    return colors[category] || 'bg-gray-100 text-gray-600'
}
</script>

