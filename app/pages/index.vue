  <template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
      <div class="lg:col-span-2 grid gap-4 sm:gap-5 md:gap-6">
        <div class="flex flex-col gap-4 sm:gap-5 md:gap-6 bg-[#FDFDFD] rounded-2xl sm:rounded-3xl shadow-md p-4 sm:p-5 md:p-6">

          <KpiCard title="Ventas Totales" value="4.000" subtitle="Ventas totales del mes en base a las subscripciones" :icon="DollarSign" />
          <KpiCard title="Servicio más Vendido" value="Ecommerce Shopify" subtitle="Productos más vendidos del mes"
            :icon="TrendingUp" />
        </div>
        <div class="bg-[#FDFDFD] rounded-2xl sm:rounded-3xl shadow-md p-4 sm:p-5 md:p-6 max-h-[500px] sm:max-h-[600px] overflow-y-auto">
          <UserComponents title="Personal Activo" :users="staffMembers" />
        </div>
      </div>
      <div class="grid gap-4 sm:gap-5 md:gap-6">
        <div class="bg-[#FDFDFD] rounded-2xl sm:rounded-3xl shadow-md p-4 sm:p-5 md:p-6">
          <CalendarEvents title="Próximos Eventos" :events="upcomingEvents" />
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { DollarSign, TrendingUp } from 'lucide-vue-next'

const staffMembers = [
  {
    avatar: 'https://th.bing.com/th/id/R.286b34c5d197192938aa25f609e0181c?rik=Wt3nUIyD2ZbFrA&pid=ImgRaw&r=0',
    name: 'María García',
    role: 'Gerente de Ventas',
    status: 'active' as const
  },
  {
    avatar: 'https://cdn-icons-png.freepik.com/512/15825/15825305.png',
    name: 'Samuel Pineda',
    role: 'Desarrollador',
    status: 'active' as const
  },
  {
    avatar: 'https://th.bing.com/th/id/R.286b34c5d197192938aa25f609e0181c?rik=Wt3nUIyD2ZbFrA&pid=ImgRaw&r=0',
    name: 'Ana Rodríguez',
    role: 'Diseñadora UX',
    status: 'busy' as const
  },
  {
    avatar: 'https://cdn-icons-png.freepik.com/512/15825/15825305.png',
    name: 'Carlos López',
    role: 'Soporte Técnico',
    status: 'offline' as const
  }
]

const upcomingEvents = [
  {
    title: 'Reunión de Equipo',
    day: '28',
    month: 'OCT',
    time: '10:00 AM',
    location: 'Sala de Juntas',
    category: 'meeting' as const
  },
  {
    title: 'Entrega de Proyecto',
    day: '30',
    month: 'OCT',
    time: '5:00 PM',
    location: 'Online',
    category: 'deadline' as const
  },
  {
    title: 'Presentación Cliente',
    day: '02',
    month: 'NOV',
    time: '2:30 PM',
    location: 'Oficina Principal',
    category: 'meeting' as const
  },
  {
    title: 'Workshop de Diseño',
    day: '05',
    month: 'NOV',
    time: '9:00 AM',
    location: 'Zoom',
    category: 'event' as const
  }
]
</script>
