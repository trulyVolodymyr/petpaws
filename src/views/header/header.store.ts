import type { IBreed } from '@/breeds/breeds'

export const useHeaderStore = defineStore('headerStore', () => {
  const likedBreeds = <IBreed[]>[]
  const favoriteBreeds = <IBreed[]>[]
  const dislikedBreeds = <IBreed[]>[]

  const inputSearch = ref<string>('')

  const localLiked = ref<IBreed[]>(JSON.parse(localStorage.liked))
  localLiked.value.forEach(el => likedBreeds.push(el))

  const localFavorite = ref<IBreed[]>(JSON.parse(localStorage.favorite))
  localFavorite.value.forEach(el => favoriteBreeds.push(el))

  const localDisliked = ref<IBreed[]>(JSON.parse(localStorage.disliked))
  localDisliked.value.forEach(el => dislikedBreeds.push(el))

  return {
    likedBreeds, favoriteBreeds, dislikedBreeds, inputSearch
  }
})
