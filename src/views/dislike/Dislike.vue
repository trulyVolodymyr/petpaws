<template>
  <div class="mt-[30px] mr-[30px] ml-[auto]">
    <Header />
    <div class="mt-[10px] bg-white rounded-[20px] p-5 ">
      <div class="flex mb-[15px]">
        <BackButton />
        <div
          class="w-[143px] ml-[10px] h-[40px] bg-pink text-white text-[20px] leading-[30px] rounded-[10px]
        flex justify-center items-center tracking-[1.5px]"
        >
          DISLIKES
        </div>
      </div>
      <ImgGird
        :breeds="dislikedBreeds"
        dislike
        @delete="deleteContact"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/views/header/Header.vue'
import ImgGird from '@/components/ImgGird.vue'

import { useHeaderStore, useVotingStore } from '@/store'

const { dislikedBreeds } = useHeaderStore()
const { userLog, padTo2Digits } = useVotingStore()

function deleteContact (index: number) {
  const clickTime = new Date()
  const hoursAndMinutes = padTo2Digits(clickTime.getHours()) + ':' + padTo2Digits(clickTime.getMinutes())
  userLog.push(
    {
      time: hoursAndMinutes,
      type: 'Dislikes',
      imgId: dislikedBreeds[index].image.id,
      moveType: 'removed from',
      svg: 0
    }
  )

  dislikedBreeds.splice(index, 1)
  localStorage.setItem('disliked', JSON.stringify(dislikedBreeds))
}

</script>
