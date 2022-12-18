import type { RouteRecordRaw } from 'vue-router'
import Gallery from '@/views/gallery/Gallery.vue'

const galleryRoutesNames = {
  gallery: 'gallery'

}

const galleryRoutes: Array<RouteRecordRaw> = [
  {
    path: '/gallery',
    name: galleryRoutesNames.gallery,
    component: Gallery
  }

]

export {
  galleryRoutesNames,
  galleryRoutes
}
