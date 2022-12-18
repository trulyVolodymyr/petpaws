
export const useBreedsStore = defineStore('breedsStore', () => {
  const allBreedsSelect = ref<string[]>([])
  const limit = ref<string[]>([])

  return {
    allBreedsSelect,
    limit

  }
})
