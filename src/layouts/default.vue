<script setup lang="ts">
const route = useRoute()


const minimize = ref(true)


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
  <div class="bg-primary transition-transform duration-700 ease-in-out w-full h-screen flex">


    <div :class="minimize ? 'w-[16%]': 'w-[5%]'" class="transition-all ease-out duration-300">
      <div  class="transition-transform  duration-700 ease-in-out h-screen flex flex-col px-2 py-10">
        <div class="flex justify-start items-center gap-5">
          <RouterLink to="/" class="rounded-xl flex items-center justify-center bg-white p-1.5">
            <Icon icon="streamline-emojis:cloud-2" class="text-5xl" />
          </RouterLink>

        </div>

        <div class="mt-10 h-full flex flex-col justify-between">
          <ul class="h-full flex flex-col gap-10">
            <li v-for="data , index in menus" :key="index" class="flex justify-start items-center gap-3">
              <RouterLink :to="{name: data.label}" :class="[data.class, minimize ? 'justify-start': 'justify-center' ]" class="p-1.5 w-full transition duration-700 flex  items-center gap-3 ease-in-out rounded-lg">
                <Icon :icon="data.icon" class="text-white text-4xl" />

                <p v-show="minimize" class="text-white transition ease-out duration-700 font-bold capitalize text-xl">
                  {{ data.label }}
                </p>
              </RouterLink>
            </li>
          </ul>



          <div class="flex justify-start">
            <button @click="minimize = !minimize"  class="hover:bg-secondary transition duration-700 ease-in-out rounded-lg p-2">
              <Icon icon="ic:round-double-arrow" :class="{'rotate-180': minimize}" class="text-white text-4xl transition duration-700 ease-in-out"  />
            </button>
          </div>
  
        </div>
      </div>
    </div>


    <div :class="minimize ? 'w-[85%]': 'w-[95%]'" class="transition-all ease-out duration-300">
      <div class="transition  duration-700 ease-in-out bg-white h-screen rounded-l-[45px] p-10">
        <RouterView v-slot="{ Component }">
          <Transition name="slide-fade" mode="out-in" class="bg-white">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
