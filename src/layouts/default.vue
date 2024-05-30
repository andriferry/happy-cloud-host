<script setup lang="ts">
const route = useRoute()


const minimize = ref(false)
const search = ref( '' )
const dark = ref( false )
const theme = useStorage( 'theme', 'light' )
const getHtml = document.querySelector( 'html' )


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
} )


watch( dark, ( value: boolean ) => {

  if ( value ) {
    getHtml?.setAttribute('data-theme', 'dark')
  } else {
    getHtml?.setAttribute('data-theme', 'light')
  }
} )


const darkToggle = () => {
  if ( dark.value ) {
    getHtml?.setAttribute( 'data-theme', 'dark' )

    theme.value= 'dark'
  } else {
    getHtml?.setAttribute( 'data-theme', 'light' )

    theme.value= 'light'
  }
}


onMounted( () => {
  
  getHtml?.setAttribute('data-theme', theme.value)

  if ( theme.value === "light" ) {
    dark.value = false
  } else {
    dark.value = true
  }


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
                
                <p v-show="minimize" class="text-white transition ease-out duration-1000 font-bold capitalize text-xl">
                  {{ data.label }}
                </p>
              </RouterLink>
            </li>
          </ul>



          <div class="flex justify-start">
            <button class="hover:bg-secondary transition duration-700 ease-in-out rounded-lg p-2"  @click="minimize = !minimize">
              <Icon icon="ic:round-double-arrow" :class="{'rotate-180': minimize}" class="text-white text-4xl transition duration-700 ease-in-out"  />
            </button>
          </div>
  
        </div>
      </div>
    </div>


    <div :class="minimize ? 'w-[85%]': 'w-[95%]'" class="transition-all ease-out duration-300">
      <div class="transition  duration-700 ease-in-out bg-white h-screen rounded-l-[45px] p-10">

        <div class="container items-center grid grid-cols-3 mb-5 py-2 gap-3">
          <div class="col-span-1 flex items-center gap-3">
            <Icon icon="streamline-emojis:cloud-2" class="text-5xl" /> 
            <p class="text-2xl text-primary  capitalize font-bold">
              {{ route.name }}
            </p>
          </div>

          <div class="col-span-1">
            <div class="w-full">
              <label class="input input-bordered !ring-0 !outline-offset-0 !outline-none bg-slate-100 border-0 rounded-full input-sm flex items-center gap-2 !h-[2.3rem] ">
                <Icon icon="ion:search-sharp" class="w-5 h-5 opacity-50 " />
                <input v-model="search" type="text" class="!ring-0 !outline-offset-0 !outline-none" placeholder="Search" />
              </label>
            </div>
          </div>

          <div class="col-span-1 flex gap-3 justify-end items-center">
            <label class="swap swap-rotate mr-3">

              <input type="checkbox" v-model="dark" @change="darkToggle" class="theme-controller"  />

             
              <Icon icon="ph:sun-bold" class="w-6 text-slate-600 swap-off h-6" />

              <Icon icon="ph:moon-bold" class="w-6 text-slate-600 swap-on h-6"/>
             

            </label>
            <p class="text-base opacity-75 font-bold text-slate-600">
              Hi , John
            </p>

            <div class="dropdown-bottom dropdown-end dropdown">
              <button tabindex="0" class="avatar placeholder">
                <div class="bg-primary text-white rounded-full w-10 h-10">
                  <span class="text-xl">JD</span>
                </div>
              </button>
              <div tabindex="0" class="dropdown-content mt-3 transition-all duration-150 ease-out z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                <div class="card-body">
                  <h3 class="card-title text-white flex gap-3">
                    <div class="avatar placeholder">
                      <div class="bg-secondary text-white rounded-full w-10 h-10">
                        <span class="text-xl">JD</span>
                      </div>
                    </div>
                    <p class="flex flex-col justify-start">
                      <span>John Doe</span>

                      <span class="text-sm font-semibold text-white/75">Admin</span>
                    </p>
                  </h3>
                  <div class="divider divider-secondary"></div> 
                </div>
              </div>
            </div>
          </div>
        </div>

  
        <RouterView v-slot="{ Component }">
          <Transition name="slide-fade" mode="out-in" class="">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
