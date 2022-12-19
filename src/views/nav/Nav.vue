<template>
  <div class="mt-6 ml-[147px]">
    <img
      src="@/assets/svg/Logo.svg"
      class="mb-20 cursor-pointer"
      alt="Logo"
      @click="goHomeLink"
    >

    <h1
      class="text-[44px]  leading-[56px] text-black font-medium mb-2.5"
    >
      Hi intern!
    </h1>

    <p
      class="text-gray text-[20px] leading-[29px] font-normal mb-[60px]"
    >
      Welcome to MSI 2021 Front-end test
    </p>

    <p class="mb-[20px] text-[20px] leading-[29px] text-black">
      Lets start using The Dogs API
    </p>

    <div class="flex space-x-[16px]">
      <NavCard color="bg-purple" text="VOTING" />
      <NavCard color="bg-green" text="BREEDS" />
      <NavCard color="bg-yellow" text="GALLERY" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavCard from '@/views/nav/NavCard.vue'

const router = useRouter()
const { $routeNames } = useGlobalProperties()

function goHomeLink () {
  router.push({ name: $routeNames.home })
}
</script>
