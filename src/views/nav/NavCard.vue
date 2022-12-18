<template>
  <div>
    <div
      class="w-[138px] h-[198px] border-[4px] border-opacity rounded-[20px] flex justify-center items-center mb-2.5"
      :class="color"
    >
      <img v-if="text ==='VOTING'" src="@/assets/images/vote-table.png" alt="">
      <img v-if="text ==='BREEDS'" src="@/assets/images/pet-breeds.png" alt="">
      <img v-if="text ==='GALLERY'" src="@/assets/images/images-search.png" alt="">
    </div>
    <TheButton @click="choosePage">
      {{ text }}
    </TheButton>
  </div>
</template>

<script lang="ts" setup>
import TheButton from '@/components/TheButton.vue'
const { $routeNames } = useGlobalProperties()
const router = useRouter()

const props = defineProps<{
  color: string

  text: string
}>()

function choosePage () {
  if (props.text === 'VOTING') {
    router.push({ name: $routeNames.voting })
  }
  if (props.text === 'BREEDS') {
    router.push({ name: $routeNames.breeds })
  }
  if (props.text === 'GALLERY') {
    router.push({ name: $routeNames.gallery })
  }
}
</script>
