import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'

import { homeRoutes } from '@/views/home/home.routes'
import { votingRoutes } from '@/views/voting/voting.routes'
import { breedsRoutes } from '@/views/breeds/breeds.routes'
import { galleryRoutes } from '@/views/gallery/gallery.routes'
import { likesRoutes } from '@/views/likes/likes.routes'
import { favoriteRoutes } from '@/views/favorite/favorite.routes'
import { dislikeRoutes } from '@/views/dislike/dislike.routes'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: routeNames.rootPage,
    redirect: { name: routeNames.home }
  },

  ...homeRoutes,
  ...votingRoutes,
  ...breedsRoutes,
  ...galleryRoutes,
  ...likesRoutes,
  ...favoriteRoutes,
  ...dislikeRoutes

]
