import type { RouteRecordRaw } from 'vue-router'
import Search from '@/views/search/search.vue'

const searchRoutesNames = {
  search: 'search'

}

const searchRoutes: Array<RouteRecordRaw> = [
  {
    path: '/search',
    name: searchRoutesNames.search,
    component: Search
  }

]

export {
  searchRoutesNames,
  searchRoutes
}
