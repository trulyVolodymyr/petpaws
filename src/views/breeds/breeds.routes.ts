import type { RouteRecordRaw } from 'vue-router'
import Breeds from '@/views/breeds/Breeds.vue'
import Breed from '@/views/breed/Breed.vue'

const breedsRoutesNames = {
  breeds: 'breeds',
  breedsId: 'breedsId'
}

const breedsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/breeds/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/breeds',
    name: breedsRoutesNames.breeds,
    component: Breeds
  },
  {
    path: '/breeds/:id',
    name: breedsRoutesNames.breedsId,
    component: Breed
  }

]

export {
  breedsRoutesNames,
  breedsRoutes
}
