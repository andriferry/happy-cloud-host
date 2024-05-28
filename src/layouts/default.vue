<script setup lang="ts">
const route = useRoute()


const menus = computed( () => {
  return [
    {
      label: 'websites',
      icon: 'mdi:globe',
      class: route.name === 'websites' ? 'bg-secondary': ''
    },
    {
      label: 'vps',
      icon: route.name === 'vps' ? 'material-symbols:cloud-outline' : 'material-symbols:cloud',
      class: route.name === 'vps' ? 'bg-secondary': ''
    },
    {
      label: 'stats',
      icon: route.name === 'stats' ? 'ion:pie-chart-outline' : 'ion:pie-chart-sharp',
      class: route.name === 'stats' ? 'bg-secondary': ''
    },
    {
      label: 'users',
      icon: route.name === 'users' ? 'teenyicons:users-outline' : 'teenyicons:users-solid',
      class: route.name === 'users' ? 'bg-secondary': ''
    },
    {
      label: 'settings',
      icon: route.name === 'settings' ? 'clarity:settings-line' : 'clarity:settings-solid',
      class: route.name === 'settings' ? 'bg-secondary': ''
    },
  ]
})




</script>

<template>
  <div class="bg-primary w-full h-screen flex">
    <div class="w-[5%] h-screen flex flex-col px-2 py-10">
      <RouterLink to="/" class="rounded-xl flex items-center justify-center bg-white p-1.5">
        <Icon icon="streamline-emojis:cloud-2" class="text-5xl" />
      </RouterLink>

      <div class="mt-10 flex justify-center">
        <ul class="h-screen flex flex-col gap-10">
          <li v-for="data , index in menus" :key="index" class="flex justify-center">
            <RouterLink :to="{name: data.label}" :class="data.class" class="p-1.5 transition duration-700 ease-in-out rounded-lg">
              <Icon :icon="data.icon" class="text-white text-4xl" />
            </RouterLink>
          </li>
        </ul>
      
      </div>
    </div>

    <div class="w-[95%] bg-white h-screen rounded-l-[45px] p-10">
      <RouterView v-slot="{ Component }">
        <Transition name="slide-fade" mode="out-in" class="bg-white">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>


<style scoped>

.slide-fade-up-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-up-enter-from,
.slide-fade-up-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
