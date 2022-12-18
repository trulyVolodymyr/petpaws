<template>
  <div class="w-full h-full popup absolute top-[0]">
    <div
      class="h-[700px] w-[720px] bg-bodybg ml-auto p-5 m-[30px] rounded-[20px]"
    >
      <div
        class="bg-white  rounded-[10px] ml-[auto] w-[40px] h-[40px] flex justify-center items-center cursor-pointer
        hover:bg-pink popup-btn transition-all duration-300"
        @click="$emit('closePopUp')"
      >
        <IconCross class="h-[17px] w-[17px]" />
      </div>
      <h2
        class="text-black text-[36px] leading-[52px] text-center mt-[40px]"
      >
        Upload a .jpg or .png Dog Image
      </h2>
      <p
        class="text-center mt-[10px] text-[20px] leading-[30px] text-gray"
      >
        Any uploads must comply with the
        <span class="text-pink">upload guidelines</span>
        or face deletion.
      </p>
      <div
        class="bg-white w-[640px] h-[320px] rounded-[20px] mt-[40px] relative flex justify-center items-center
      cursor-pointer border-[2px] border-pink-light border-dashed"
      >
        <IconSave class="absolute" />
        <p class="relative text-gray text-[20px] leading-[30px]">
          <span class="text-black">Drag here </span> your file or
          <span class="text-black">Click here</span>  to upload
        </p>
      </div>
      <p
        class="mt-[20px] text-center text-[20px] leading-[30px] text-gray"
      >
        No file selected
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['closePopUp'])
</script>
