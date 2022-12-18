import type { RouteRecordRaw } from 'vue-router'
import Dislike from '@/views/dislike/Dislike.vue'

const dislikeRoutesNames = {
  dislike: 'dislike'
}

const dislikeRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dislike',
    name: dislikeRoutesNames.dislike,
    component: Dislike
  }

]

export {
  dislikeRoutesNames,
  dislikeRoutes
}
