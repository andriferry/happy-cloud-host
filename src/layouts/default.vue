<script setup lang="ts"></script>

<template>
  <div class="bg-primary w-full h-screen flex">
    <div class="w-[5%] h-screen flex flex-col px-2 py-10">
      <div class="rounded-xl flex items-center justify-center bg-white  p-1.5">
        <Icon icon="streamline-emojis:cloud-2" class="text-5xl" />
      </div> 
    </div>


    <div class="w-[95%] bg-white h-screen rounded-l-[45px] p-10">
      <RouterView />
    </div>
  </div>
</template>
