<template>
  <div class="mt-[30px] mr-[30px] ml-[auto] mb-[20px]">
    <Header />
    <div class="mt-[10px] bg-white rounded-[20px] p-5 ">
      <div class="flex mb-[15px]">
        <BackButton />
        <div
          class="w-[143px] ml-[10px] h-[40px] bg-pink-light text-pink text-[20px] leading-[30px] rounded-[10px]
        flex justify-center items-center tracking-[1.5px]"
        >
          BREED
        </div>
        <div
          class="px-[15px] h-10 bg-pink text-white rounded-[10px] ml-[10px] flex justify-center items-center
          text-[20px] leading-[30px]"
        >
          {{ breed?.id }}
        </div>
      </div>
      <div
        class="mt-5 "
      >
        <div
          class="w-full flex justify-center"
        >
          <img
            class="h-[360px] rounded-[20px]"
            :src="breed?.image.url"
            :alt="breed?.name"
          >
        </div>
        <div class="w-full flex justify-center">
          <h2
            class="text-black text-[36px] leading-[52px] text-center mt-[25px] bg-white relative px-[40px]"
          >
            {{ breed?.name }}
          </h2>
        </div>
        <div class="w-full border-[2px] border-pink-light rounded-[20px] mt-[-28px] px-[40px] pb-[40px]">
          <div
            class="w-full flex justify-center mt-7"
          >
            <h4
              v-if="breed?.bred_for"
              class="text-gray text-[20px] leading-[30px] max-w-[500px] text-center"
            >
              {{ breed?.bred_for }}
            </h4>
            <h4
              v-else
              class="text-gray text-[20px] leading-[30px] max-w-[500px] text-center"
            >
              No information about breed purpose
            </h4>
          </div>
          <div
            class="flex mt-5"
          >
            <div
              class="max-w-[270px] mr-[20px]"
            >
              <p
                class="text-black"
              >
                Temperament:
              </p>
              <p
                v-if="breed?.temperament"
                class="text-gray"
              >
                {{ breed?.temperament }}
              </p>
              <p v-else class="text-gray">
                No information about breed temperament
              </p>
            </div>
            <div>
              <div class="flex">
                <p class="text-gray">
                  <span class="text-black">Height: </span>
                  {{ breed?.height.metric }} cm at the withers
                </p>
              </div>
              <div class="flex mt-[10px]">
                <p class="text-gray ">
                  <span class="text-black">Weight: </span>
                  {{ breed?.weight.metric }} kgs
                </p>
              </div>
              <div class="flex mt-[10px]">
                <p class="text-gray">
                  <span class="text-black">Life span: </span>
                  {{ breed?.life_span }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { breeds } from '@/breeds/breeds'
import Header from '@/views/header/Header.vue'
const route = useRoute()

const breedRoute = computed(() => {
  return route.params.id
})

const breed = computed(() => {
  return breeds.find(breed => breed.id === +breedRoute.value)
})

</script>
