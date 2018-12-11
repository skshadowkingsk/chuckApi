import Home from '../pages/Home.vue';
import Favorites from '../pages/Favorites.vue';
import Chart from '../pages/Chart.vue';

export const routes = [
  { path: '', component: Home },
  { path: '/favorites', component: Favorites },
  { path: '/chart', component: Chart }

]