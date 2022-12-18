<template>
  <el-button
    class="min-w-[138px] px-[30px] rounded-[10px] text-[12px] leading-[16px] border-none
    bg-white hover:bg-pink-light active:bg-pink focus:bg-pink-light
    text-pink hover:text-pink active:text-white focus:text-pink"
  >
    <div>
      <div class="mr-2">
        <slot name="icon" />
      </div>
      <slot class="font-medium" />
    </div>
  </el-button>
</template>
