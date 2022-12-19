<template>
  <div
    class="mt-[30px] mr-[30px] ml-[auto]"
  >
    <Header />
    <div class="mt-[10px] bg-white rounded-[20px] p-5 ">
      <div class="flex mb-[15px]">
        <BackButton />
        <div
          class="w-[143px] ml-[10px] h-[40px] bg-pink text-white text-[20px] leading-[30px] rounded-[10px]
        flex justify-center items-center tracking-[1.5px]"
        >
          VOTING
        </div>
      </div>

      <div class="flex justify-center mt-[20px] h-[360px]">
        <img class="rounded-[20px]" :src="currentImage" alt="">
      </div>

      <div class="flex  border-[4px] border-white justify-center mt-[-50px]">
        <div class="flex bg-white space-x-[4px] p-[4px] rounded-[20px]">
          <div
            class="bg-green rounded-l-[20px] reaction"
            @click="addBreedToCategory('like')"
          >
            <IconSmile />
          </div>
          <div
            class="bg-pink  reaction"
            @click="addBreedToCategory('fav')"
          >
            <IconHeart />
          </div>
          <div
            class="bg-yellow rounded-r-[20px] reaction"
            @click="addBreedToCategory('dis')"
          >
            <IconDislike />
          </div>
        </div>
      </div>
      <div>
        <div
          v-for="log in userLog"
          :key="log.imgId"
          class="flex bg-bodybg p-[15px] rounded-[10px] items-center mb-[10px]"
        >
          <p
            class="px-[10px] py-[3px] bg-white rounded-[5px] mr-[20px]"
          >
            {{ log.time }}
          </p>
          <p
            class="text-gray"
          >
            Image ID: <span class="text-black font-bold">{{ log.imgId }}</span>  {{ log.moveType }} {{ log.type }}
          </p>

          <IconSmile v-if="log.svg === 1" class="fill-green ml-[auto]" />
          <IconHeart v-if="log.svg === 2" class="fill-pink ml-[auto]" />
          <IconDislike v-if="log.svg === 3" class="fill-yellow ml-[auto]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/views/header/Header.vue'
import BackButton from '@/components/BackButton.vue'
import { breeds, type IBreed } from '@/breeds/breeds'
import { useHeaderStore, useVotingStore } from '@/store'

const { likedBreeds, favoriteBreeds, dislikedBreeds } = useHeaderStore()

const headerStore = useVotingStore()
const { counter } = storeToRefs(headerStore)
const { userLog, padTo2Digits } = useVotingStore()

const currentImage = computed(() => {
  return breeds[counter.value].image.url
})

function addBreedToCategory (actionType: string) {
  addUserActionsToLog(actionType)
  if (actionType === 'like') {
    if (likedBreeds.includes(breeds[counter.value]) || JSON.parse(localStorage.liked)
      .some((el: IBreed) => el.id === breeds[counter.value].id)) {
      counter.value++
    } else {
      likedBreeds.push(breeds[counter.value])
      localStorage.setItem('liked', JSON.stringify(likedBreeds))
      counter.value++
    }
  }
  if (actionType === 'fav') {
    if (favoriteBreeds.includes(breeds[counter.value]) || JSON.parse(localStorage.favorite)
      .some((el: IBreed) => el.id === breeds[counter.value].id)) {
      counter.value++
    } else {
      favoriteBreeds.push(breeds[counter.value])
      localStorage.setItem('favorite', JSON.stringify(favoriteBreeds))
      counter.value++
    }
  }
  if (actionType === 'dis') {
    if (dislikedBreeds.includes(breeds[counter.value]) || JSON.parse(localStorage.disliked)
      .some((el: IBreed) => el.id === breeds[counter.value].id)) {
      counter.value++
    } else {
      dislikedBreeds.push(breeds[counter.value])
      localStorage.setItem('disliked', JSON.stringify(dislikedBreeds))
      counter.value++
    }
  }
}

function addUserActionsToLog (actionType: string) {
  const clickTime = new Date()
  const hoursAndMinutes = padTo2Digits(clickTime.getHours()) + ':' + padTo2Digits(clickTime.getMinutes())

  if (actionType === 'like') {
    return actionsHelper(hoursAndMinutes, 'Likes', breeds[counter.value].image.id, 'added to', 1)
  }
  if (actionType === 'fav') {
    return actionsHelper(hoursAndMinutes, 'Favourites', breeds[counter.value].image.id, 'added to', 2)
  }
  if (actionType === 'dis') {
    return actionsHelper(hoursAndMinutes, 'Dislikes', breeds[counter.value].image.id, 'added to', 3)
  }
}

function actionsHelper (actionTime: string, actionType: string, actionImgId: string, actionMoveType: string,
  actionSvg: number) {
  return userLog.push({
    time: actionTime,
    type: actionType,
    imgId: actionImgId,
    moveType: actionMoveType,
    svg: actionSvg
  })
}
onUnmounted(() => {
  localStorage.setItem('log', JSON.stringify(userLog))
})
</script>

<style lang="scss">
.reaction{
  &:nth-of-type(1):hover{
   background-color: rgba(151, 234, 185, 0.4);
  }
  &:nth-of-type(1):hover> svg{
    fill:#97EAB9
  }
  &:nth-of-type(2):hover{
    background-color: rgba(255, 134, 142, 0.4);
  }
  &:nth-of-type(2):hover> svg{
    fill:#FF868E
  }
  &:nth-of-type(3):hover{
    background-color: rgba(255, 210, 128, 0.4);
  }
  &:nth-of-type(3):hover> svg{
    fill:#FFD280
  }
  @apply w-[80px] h-[80px] flex justify-center items-center cursor-pointer
  transition duration-300
}
</style>
