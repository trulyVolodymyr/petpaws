<template>
  <div class="flex focus:border-pink">
    <el-input
      v-model="inputSearch"
      class="w-[470px] header-input"
      type="text"
      placeholder="Search for breeds by name"
    >
      <template #suffix>
        <el-icon
          class="el-input__icon cursor-pointer"
          @click="searchInputResult"
        >
          <div class="w-[40px] h-[40px] bg-pink-light ml-[-25px] flex justify-center items-center rounded-[10px]">
            <IconSearch class="fill-pink" />
          </div>
        </el-icon>
      </template>
    </el-input>

    <button
      class="button"
      @click="choosePage('likes')"
    >
      <IconSmile class="fill-pink" />
    </button>
    <button
      class="button"
      @click="choosePage('favorite')"
    >
      <IconHeart class="fill-pink" />
    </button>
    <button
      class="button"
      @click="choosePage('dislike')"
    >
      <IconDislike class="fill-pink" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useHeaderStore } from '@/store'
import { breeds } from '@/breeds/breeds'

const { $routeNames } = useGlobalProperties()

const headerStore = useHeaderStore()
const { inputSearch } = storeToRefs(headerStore)

const router = useRouter()

function searchInputResult () {
  const searchedBreed = breeds.filter(el => el.name.toLowerCase().includes(inputSearch.value.toLowerCase()))

  if (searchedBreed.length > 0) {
    const id = searchedBreed[0].id

    router.push({ name: $routeNames.breedsId, params: { id } })
    inputSearch.value = ''
  } else {
    alert(`Breed ${inputSearch.value} not found. Please enter correct breed name!`)
    inputSearch.value = ''
  }
}

function choosePage (pathName: string) {
  if (pathName === 'likes') {
    router.push({ name: $routeNames.likes })
  }
  if (pathName === 'favorite') {
    router.push({ name: $routeNames.favorite })
  }
  if (pathName === 'dislike') {
    router.push({ name: $routeNames.dislike })
  }
}
</script>

<style lang="scss">
.header-input > .el-input__wrapper{
  box-shadow: 0 0 0 2px #ffffff;

  &:hover{
  box-shadow: 0 0 0 2px #FBE0DC;
  }

 @apply rounded-[20px] pl-[20px] text-[20px] leading-[30px]
}

.header-input > .el-input__wrapper.is-focus{
box-shadow: 0 0 0 2px #FF868E;
}

.button{
  @apply w-[60px] h-[60px] rounded-[20px] bg-white flex justify-center items-center ml-[10px] cursor-pointer
  border-[2px] border-transparent hover:border-pink-light focus:bg-pink transition-all duration-300
}
.button:focus>svg{
  fill: #FFF;
}
</style>
