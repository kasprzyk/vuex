import Vue from 'vue'
import VueRouter from 'vue-router'
//import EventCreate from '../views/EventCreate.vue'
import EventList from '../views/EventList.vue'
//import EventShow from '../views/EventShow.vue'
import NProgress from 'nprogress'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/event-create',
    name: 'event-create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EventCreate.vue')
  },

  {
    path: '/event/:id',
    name: 'event-show',
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EventShow.vue'),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      // before this route is loaded
      store.dispatch('event/fetchEvent', routeTo.params.id).then(event => {
        routeTo.params.event = event
        next()
      })
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})
router.beforeEach((routeTo, routeFrom, next) => {
  // Start the route progress bar.
  NProgress.start()
  next()
})
router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
