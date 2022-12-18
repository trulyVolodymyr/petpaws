
import { homeRoutesNames } from '@/views/home/home.routes'
import { votingRoutesNames } from '@/views/voting/voting.routes'
import { breedsRoutesNames } from '@/views/breeds/breeds.routes'
import { galleryRoutesNames } from '@/views/gallery/gallery.routes'
import { likesRoutesNames } from '@/views/likes/likes.routes'
import { favoriteRoutesNames } from '@/views/favorite/favorite.routes'
import { dislikeRoutesNames } from '@/views/dislike/dislike.routes'

export const routeNames = {
  rootPage: 'rootPage',
  ...homeRoutesNames,
  ...votingRoutesNames,
  ...breedsRoutesNames,
  ...galleryRoutesNames,
  ...likesRoutesNames,
  ...favoriteRoutesNames,
  ...dislikeRoutesNames

}
