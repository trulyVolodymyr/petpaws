import type { RouteRecordRaw } from 'vue-router'
import Voting from '@/views/voting/Voting.vue'

const votingRoutesNames = {
  voting: 'voting'
}

const votingRoutes: Array<RouteRecordRaw> = [
  {
    path: '/voting',
    name: votingRoutesNames.voting,
    component: Voting
  }

]

export {
  votingRoutesNames,
  votingRoutes
}
