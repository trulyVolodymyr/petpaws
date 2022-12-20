<template>
  <div
    class="mt-[30px] mr-[30px] ml-[auto] max-w-[680px]"
  >
    <Header />

    <div class="mt-[10px] bg-white rounded-[20px] p-5">
      <div
        class="flex"
      >
        <BackButton />
        <div
          class="w-[143px] h-[40px] bg-pink text-white text-[20px] leading-[30px] rounded-[10px]
        flex justify-center items-center tracking-[1.5px] ml-[10px]"
        >
          SEARCH
        </div>
      </div>
      <p class="text-[20px] mt-[20px] text-gray">
        Search results for:
        <span class="text-black">{{ inputWord[0] }}</span>
      </p>
      <ImgGird
        class="mt-[20px]"
        :breeds="searchedBreeds"
        search
        @delete="openBreed"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/views/header/Header.vue'
import BackButton from '@/components/BackButton.vue'

import { useHeaderStore } from '@/store'
const { inputWord, searchedBreeds } = useHeaderStore()
const router = useRouter()

function openBreed (index: number) {
  const id = searchedBreeds[index].id
  router.push({ path: `breeds/${id}` })
}
</script>

<style lang="scss">
.popup{
  background-color: rgba(29,29,29,0.6);
}
.upload-btn{
  & svg {
    transition: all 0.3s;
  }
  &:hover svg{
    fill: white;
  }
}
.popup-btn{
  &:hover svg{
    fill: white;
  }
}
</style>
