import Vue from 'vue'
import VueRouter from 'vue-router'
//import EventCreate from '../views/EventCreate.vue'
import EventList from '../views/EventList.vue'
//import EventShow from '../views/EventShow.vue'

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
    path: '/event-show',
    name: 'event-show',
    // route level code-splitting
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/EventShow.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
