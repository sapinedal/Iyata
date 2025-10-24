<template>
    <div class="flex flex-col gap-3 sm:gap-4">

        <h2 class="text-base sm:text-lg font-bold text-[#0D0D0D]">{{ title }}</h2>
        
        <div class="flex flex-col gap-2 sm:gap-3">
            <div 
                v-for="(user, index) in users" 
                :key="index"
                class="flex items-center justify-between p-2.5 sm:p-3 hover:bg-[#E3E3E3]/30 rounded-xl transition-all duration-200 cursor-pointer"
            >
                <div class="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <img 
                        :src="user.avatar" 
                        :alt="user.name" 
                        class="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-white shadow-sm shrink-0" 
                    />
                    <div class="flex flex-col min-w-0 flex-1">
                        <span class="text-xs sm:text-sm font-semibold text-[#0D0D0D] truncate">{{ user.name }}</span>
                        <span class="text-xs text-[#727272] truncate">{{ user.role }}</span>
                    </div>
                </div>
                

                <div 
                    v-if="user.status"
                    :class="[
                        'w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0 ml-2',
                        user.status === 'active' ? 'bg-green-500' : 
                        user.status === 'busy' ? 'bg-yellow-500' : 
                        'bg-gray-400'
                    ]"
                ></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface User {
    avatar: string
    name: string
    role: string
    status?: 'active' | 'busy' | 'offline'
}

defineProps<{
    title: string
    users: User[]
}>()
</script>