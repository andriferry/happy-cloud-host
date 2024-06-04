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


const userMenu = computed( () => {
  return [
    {
      label: "Profile",
      icon: "mdi:user-outline",
      route: '/'
    },
    {
      label: "Settings",
      icon: "clarity:settings-line",
      route: '/settings'
    },
    {
      label: "Billing Plans",
      icon: "hugeicons:invoice",
      route: '/settings'
    },
    {
      label: "Help",
      icon: "material-symbols:help-outline",
      route: '/settings'
    },
    {
      label: "Pricing",
      icon: "carbon:pricing-traditional",
      route: '/settings'
    }
  ]
})

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
  <div class="bg-primary w-full transition-all  duration-700 ease-in-out h-screen flex">

    <div :class="minimize ? 'w-[16%]': 'w-[5%]'" class="transition-all hidden md:block ease-out duration-300">
      <div  class="transition-all  duration-700 ease-in-out h-screen flex flex-col px-2 py-10">
        <div class="flex justify-start items-center gap-5">
          <RouterLink to="/" class="rounded-xl flex items-center justify-center transition-all  duration-700 bg-white dark:bg-primaryDark p-1.5">
            <Icon icon="streamline-emojis:cloud-2" class="text-5xl" />
          </RouterLink>
        </div>

        <div class="mt-10 h-full flex flex-col justify-between">
          <ul class="h-full flex flex-col gap-10">
            <li v-for="data , index in menus" :key="index" class="flex justify-start items-center gap-3">
              <RouterLink :to="{name: data.label}" :class="[data.class, minimize ? 'justify-start': 'justify-center' ]" class="p-1.5 w-full transition duration-700 flex  items-center gap-3 ease-in-out rounded-lg">
                <Icon :icon="data.icon" class="text-white dark:text-softDark text-4xl" />
                
                <p v-show="minimize" class="text-white dark:text-softDark transition-all ease-out duration-1000 font-bold capitalize text-xl">
                  {{ data.label }}
                </p>
              </RouterLink>
            </li>
          </ul>



          <div class="flex justify-start">
            <button class="hover:bg-secondary transition duration-700 ease-in-out rounded-lg p-2"  @click="minimize = !minimize">
              <Icon
icon="ic:round-double-arrow" :class="{'rotate-180': minimize}" 
              class="text-white dark:text-softDark text-4xl transition duration-700 ease-in-out"  />
            </button>
          </div>
  
        </div>
      </div>
    </div>


    <div :class="minimize ? 'w-[85%]': ' w-full sm:w-[95%]'" class="transition-all ease-out duration-300">
      <div class="transition  duration-700 ease-in-out bg-neutral h-screen sm:rounded-l-[45px] p-5 sm:p-10">

      <!-- Navbar -->
        <div class="container drawer items-center grid grid-cols-3 mb-5 py-2 gap-3">
          <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
          <div class="col-span-2 drawer-content md:col-span-1 flex items-center gap-3">
            <Icon icon="streamline-emojis:cloud-2" class="text-5xl hidden md:block" /> 
            <label for="my-drawer-3" aria-label="open sidebar" class="block cursor-pointer md:hidden">
              <Icon icon="heroicons-outline:menu-alt-2" class="text-3xl text-primaryDark dark:text-softDark" /> 
            </label>
            <p class="text-2xl text-primaryDark dark:text-softDark  capitalize font-bold">
              {{ route.name }}
            </p>

            <button class="block md:hidden">
              <Icon icon="ion:search-sharp" class="text-xl text-primaryDark dark:text-softDark " />
            </button>
          </div>

          <div class="col-span-1 hidden md:block">
            <div class="w-full">
              <label class="input input-bordered transition-all  duration-700 !ring-0 !outline-offset-0 !outline-none bg-slate-100 dark:bg-slate-700  border-0 rounded-full input-sm flex items-center gap-2 !h-[2.3rem] ">
                <Icon icon="ion:search-sharp" class="w-5 h-5 opacity-50 " />
                <input v-model="search" type="text" class="!ring-0 !outline-offset-0 !outline-none" placeholder="Search" />
              </label>
            </div>
          </div>

          <div class="col-span-1 flex gap-3 justify-end items-center">
            <label class="swap swap-rotate mr-3">

              <input v-model="dark" type="checkbox" class="theme-controller" @change="darkToggle"  />

             
              <Icon icon="ph:sun-bold" class="w-6 text-primaryDark dark:text-softDark swap-off h-6" />

              <Icon icon="ph:moon-bold" class="w-6 text-primaryDark dark:text-softDark swap-on h-6"/>
             

            </label>
            <p class="text-base opacity-75 hidden md:block font-bold text-primaryDark dark:text-softDark ">
              Hi , John
            </p>

            <div class="dropdown-bottom dropdown-end dropdown">
              <button tabindex="0" class="avatar placeholder">
                <div class="bg-primary text-white dark:text-softDark rounded-full w-10 h-10">
                  <span class="text-xl">JD</span>
                </div>
              </button>
              <div tabindex="0" class="dropdown-content mt-3 transition-all duration-150 ease-out z-[1] card card-compact w-64 p-2 shadow bg-primary text-primaryLight-content">
                <div class="card-body">
                  <h3 class="card-title text-white dark:text-softDark flex gap-3">
                    <div class="avatar placeholder">
                      <div class="bg-secondary text-white dark:text-softDark rounded-full w-10 h-10">
                        <span class="text-xl">JD</span>
                      </div>
                    </div>
                    <p class="flex flex-col justify-start">
                      <span>John Doe</span>

                      <span class="text-sm font-semibold text-white/75  dark:text-softDark">Admin</span>
                    </p>
                  </h3>
                  <div class="divider divider-secondary my-2" /> 

                  <div class="text-white dark:text-softDark">
                    <ul>
                      <li v-for="data, index in userMenu.slice(0,3)" :key="index" class="hover:bg-secondary p-2 transition-all ease-out duration-700 rounded-lg">
                        <RouterLink :to="data.route" class="flex items-center gap-3">
                          <Icon :icon="data.icon" class="text-white dark:text-softDark text-2xl" />
                          <p class="text-base font-semibold">
                            {{ data.label }}
                          </p>
                        </RouterLink>
                      </li>
                    </ul>

                    <div class="divider divider-secondary my-2" /> 
                    <ul>
                      <li v-for="data, index in userMenu.slice(3)" :key="index" class="hover:bg-secondary p-2 transition-all ease-out duration-700 rounded-lg">
                        <RouterLink :to="data.route" class="flex items-center gap-3">
                          <Icon :icon="data.icon" class="text-white dark:text-softDark text-2xl" />
                          <p class="text-base font-semibold">
                            {{ data.label }}
                          </p>
                        </RouterLink>
                      </li>


                      <li class="w-full  mt-3">
                        <button class="btn  flex gap-3 items-center btn-block btn-sm">
                          <span>Logout</span>
                          <Icon icon="ic:baseline-logout" class=" dark:text-softDark text-xl" />
                        </button>
                      </li>

                    </ul>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <div class="drawer-side">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
            <ul class="menu p-4 w-80 min-h-full bg-base-200">
              <!-- Sidebar content here -->
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>
        </div>
      <!-- Navbar -->

  
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
