import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router/routes'
import { store } from './store/store'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: "history"
});

const x = store;
router.beforeEach((to,from,next)=>{
  if(to.meta.auth){
    if(!x.getters.isAuth){
      router.replace("/login");
    }
  }
  next();
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
