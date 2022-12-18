import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/home/Home.vue'

const homeRoutesNames = {
  home: 'home',
  upsertContact: 'upsertContact'
}

const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: homeRoutesNames.home,
    component: Home
  }

]

export {
  homeRoutesNames,
  homeRoutes
}
