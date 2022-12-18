<template>
  <div
    class="mt-[30px] mr-[30px] ml-[auto]"
  >
    <Header />

    <div class="mt-[10px] bg-white rounded-[20px] p-5">
      <div
        class="flex mb-[20px]"
      >
        <BackButton />
        <div
          class="w-[143px] ml-[10px] h-[40px] bg-pink text-white text-[20px] leading-[30px] rounded-[10px]
        flex justify-center items-center tracking-[1.5px]"
        >
          BREEDS
        </div>
        <TheSelect
          class="ml-[10px]"
          width="226px"
          :options="breedsNames"
          placeholder="All breeds"
          multiple
          search
        />
        <TheSelect
          class="ml-[10px]"
          width="101px"
          :options="limitsArr"
          placeholder="Limit:"
          limit
        />
        <div
          class="btn"
          @click="sortByName= true "
        >
          <IconSortUp />
        </div>
        <div
          class="btn"
          @click="sortByName= false"
        >
          <IconSortDown />
        </div>
      </div>

      <ImgGird
        :breeds="filteredBreeds"
        search
        @delete="openBreed"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/views/header/Header.vue'
import BackButton from '@/components/BackButton.vue'

import { breeds } from '@/breeds/breeds'
import { useBreedsStore } from '@/store'

const router = useRouter()

const { allBreedsSelect, limit } = useBreedsStore()

const limitsArr = ref<string[]>(['Limit: 5', 'Limit: 10', 'Limit: 15', 'Limit: 20'])

const sortByName = ref(true)

const filteredBreeds = computed(() => {
  if (allBreedsSelect.length > 0) {
    return breeds.filter(el => allBreedsSelect.some(e => e === el.name))
  }
  if (limit.join('') === 'Limit: 5') {
    if (!sortByName.value) {
      return breeds.slice(0, 5).sort((a, b) => b.name.localeCompare(a.name))
    }
    return breeds.slice(0, 5)
  }
  if (limit.join('') === 'Limit: 10') {
    if (!sortByName.value) {
      return breeds.slice(0, 10).sort((a, b) => b.name.localeCompare(a.name))
    }
    return breeds.slice(0, 10)
  }
  if (limit.join('') === 'Limit: 15') {
    if (!sortByName.value) {
      return breeds.slice(0, 15).sort((a, b) => b.name.localeCompare(a.name))
    }
    return breeds.slice(0, 15)
  }
  if (limit.join('') === 'Limit: 20') {
    if (!sortByName.value) {
      return breeds.slice(0, 20).sort((a, b) => b.name.localeCompare(a.name))
    }
    return breeds.slice(0, 20)
  }
  if (sortByName.value) {
    return [...breeds.sort((a, b) => a.name.localeCompare(b.name))]
  }
  if (!sortByName.value) {
    return breeds.sort((a, b) => b.name.localeCompare(a.name))
  } else {
    return breeds
  }
})

const breedsNames = computed(() => {
  return breeds.map(el => el.name)
})

function openBreed (index: number) {
  const id = breeds[index].id
  router.push({ path: `breeds/${id}` })
}

</script>

<style lang="scss">
.btn{
  &:hover svg{
    fill: #FF868E;
  }
  @apply h-[40px] w-[40px] bg-bodybg rounded-[10px] flex justify-center items-center ml-[10px]
    cursor-pointer transition-all duration-300 border-[2px] border-bodybg hover:border-pink-light
}
</style>
