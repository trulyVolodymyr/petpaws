import type { RouteRecordRaw } from 'vue-router'
import Favorite from '@/views/favorite/Favorite.vue'

const favoriteRoutesNames = {
  favorite: 'favorite'
}

const favoriteRoutes: Array<RouteRecordRaw> = [
  {
    path: '/favorite',
    name: favoriteRoutesNames.favorite,
    component: Favorite
  }

]

export {
  favoriteRoutesNames,
  favoriteRoutes
}
