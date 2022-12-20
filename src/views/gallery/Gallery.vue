<template>
  <div
    class="mt-[30px] mr-[30px] ml-[auto]  max-w-[680px]"
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
          GALLERY
        </div>
        <div
          class="h-[40px] px-[30px] flex justify-center items-center rounded-[10px] bg-pink-light ml-[auto]
         cursor-pointer hover:bg-pink text-pink hover:text-white transition-all duration-300 upload-btn"
          @click="popUpVisible= true"
        >
          <IconUpload class="mr-[10px]" />
          UPLOAD
        </div>
      </div>
      <ImgGird
        class="mt-[20px]"
        :breeds="breeds.slice(0, 20)"
      />
    </div>
  </div>
  <Teleport to="body">
    <PopUp
      v-if="popUpVisible"
      @close-pop-up="togglePopUp"
      @wheel.prevent
      @touchmove.prevent
      @cscroll.prevent
    />
  </Teleport>
</template>

<script lang="ts" setup>
import Header from '@/views/header/Header.vue'
import BackButton from '@/components/BackButton.vue'
import PopUp from '@/views/popup/PopUp.vue'
import { breeds } from '@/breeds/breeds'

const popUpVisible = ref<boolean>(false)

function togglePopUp () {
  popUpVisible.value = false
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
