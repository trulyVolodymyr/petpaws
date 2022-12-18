import type { RouteRecordRaw } from 'vue-router'
import Likes from '@/views/likes/Likes.vue'

const likesRoutesNames = {
  likes: 'likes'
}

const likesRoutes: Array<RouteRecordRaw> = [
  {
    path: '/likes',
    name: likesRoutesNames.likes,
    component: Likes
  }

]

export {
  likesRoutesNames,
  likesRoutes
}
