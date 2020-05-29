import Vue from 'vue'
import VueRouter from 'vue-router'
//import EventCreate from '../views/EventCreate.vue'
import EventList from '../views/EventList.vue'
//import EventShow from '../views/EventShow.vue'
import NProgress from 'nprogress'
import store from '../store/index'
import NotFound from '../views/NotFound.vue'
import NetworkIssue from '../views/NetworkIssue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
    props: true
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
      store
        .dispatch('event/fetchEvent', routeTo.params.id)
        .then(event => {
          routeTo.params.event = event
          next()
        })
        .catch(error => {
          if (error.response && error.response.status == '404') {
            next({ name: '404', params: { resource: 'event' } })
          } else {
            next({ name: 'NetworkIssue' })
          }
        })
    }
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true
  },
  {
    path: '*',
    redirect: { name: '404', params: { resource: 'page' } }
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue
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
