<template>
  <div
    v-if="breeds.length > 0"
    class="images-gird relative"
  >
    <div
      v-for="breed,index in breeds" :key="breed.id"
      class="grid-item relative transition-all duration-300 cursor-pointer"
      @click="$emit('delete', index)"
    >
      <div class="bg" />

      <img
        class="h-full w-full object-cover rounded-[20px] "
        :src="breed.image.url" alt=""
      >

      <p
        v-if="search"
        class="absolute bottom-0 bg-white w-full  text-center rounded-[10px] py-[5px]
             text-pink scale-x-95 mb-[10px] grid-item__hover"
      >
        {{ breed.name }}
      </p>
      <div
        v-if="like"
        class="absolute bottom-0 bg-white h-[40px] w-[40px] rounded-[10px]
             text-pink top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid-item__hover"
      >
        <IconSmile class="fill-pink mt-[6px] ml-[5px]" />
      </div>
      <div
        v-if="favorite"
        class="absolute bottom-0 bg-white h-[40px] w-[40px] px-[10px] py-[8px] rounded-[10px]
             text-pink top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid-item__hover"
      >
        <IconHeart class="fill-pink ml-[-4px]" />
      </div>
      <div
        v-if="dislike"
        class="absolute bottom-0 bg-white h-[40px] w-[40px] px-[10px] py-[8px] rounded-[10px]
             text-pink top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid-item__hover"
      >
        <IconDislike class="fill-pink ml-[-5px] mt-[-2px]" />
      </div>
    </div>
  </div>
  <div v-else>
    <p
      class="text-gray py-[18px] px-[20px] w-full bg-bodybg rounded-[20px]"
    >
      No item found
    </p>
  </div>
</template>

<script setup lang="ts">
import type { IBreed } from '@/breeds/breeds'

defineEmits(['delete'])

defineProps<{
  breeds: IBreed[]
  search?: boolean
  like?: boolean
  favorite?: boolean
  dislike?: boolean
}>()

</script>

<style lang="scss">
.p-width{
  width: calc(100% - 20px);
}
.bg{
  content: '';
  border-radius: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  background:rgba(255, 134, 142, 0.3);
  top: 0;
  left: 0;
  display: none;
}

.images-gird{
  display: grid;
  grid-template-columns: repeat(3, 200px);
  gap: 20px;

}

.grid-item{
  border-radius: 20px;
  &:hover{
    border-radius: 20px;
    transform: translateY(-2px);
    @apply shadow-gray-dark shadow-2xl
  }
}

.grid-item__hover{
  display: none;
}

.grid-item:hover > .bg{
  display: block;

}
.grid-item:hover > .grid-item__hover{
  display: block;

}

.grid-item:nth-of-type(10n+1){
  grid-column: span 1;
  grid-row: span 2;
  height: 300px;
}
.grid-item:nth-of-type(10n+2){
  height: 140px;
}
.grid-item:nth-of-type(10n+3){
  height: 140px;
}
.grid-item:nth-of-type(10n+4){
  grid-column: span 2;
  grid-row: span 2;
  height: 300px;
}
.grid-item:nth-of-type(10n+5){
  height: 140px;
}
.grid-item:nth-of-type(10n+6){
  height: 140px;
}
.grid-item:nth-of-type(10n+7){
  height: 140px;
}
.grid-item:nth-of-type(10n+8){
  grid-column: span 1;
  grid-row: span 2;
  height: 300px;
}
.grid-item:nth-of-type(10n+9){
  grid-column: span 2;
  grid-row: span 2;
  height: 300px;
}
.grid-item:nth-of-type(10n+10){
  height: 140px;
}

</style>
