import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import createStore from '@/store'
import { computed } from 'vue'
const store = createStore
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('@/views/AboutUs.vue'),
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/Faq.vue'),
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/views/Tearms.vue'),
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/views/Privacy.vue'),
  },

  {
    path: '/services',

    name: 'services',
    component: () => import('@/views/applications/index.vue'),
    children: [
      {
        path: 'visa',
        meta: {
          auth: true,
        },
        component: () => import('@/views/applications/visa/Visa.vue'),
      },
      {
        path: 'passport',
        meta: {
          auth: true,
        },

        component: () => import('@/views/applications/passport/Passport.vue'),
      },
      {
        path: 'school',
        meta: {
          auth: true,
        },
        component: () => import('@/views/applications/school/School.vue'),
      },
      {
        path: 'football-matches',
        meta: {
          auth: true,
        },
        component: () =>
          import('@/views/applications/football-matches/index.vue'),
        children: [
          {
            path: ':id',
            component: () =>
              import('@/views/applications/football-matches/Application.vue'),

            props: true,
            meta: {
              auth: true,
            },
          },
        ],
      },
    ],
  },
  {
    path: '/client-area',
    name: 'client-area',
    meta: {
      auth: true,
    },
    props: true,
    component: () => import('@/views/client_area/index.vue'),
    children: [
      {
        path: 'profile',

        component: () => import('@/views/client_area/Profile.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'visa/:id?',
        props: true,
        component: () => import('@/views/client_area/visa/ShowAll.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'passport/:id?',

        component: () => import('@/views/client_area/passport/ShowAll.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'school/:id?',
        props: true,
        component: () => import('@/views/client_area/school/ShowAll.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'match-tikets',

        component: () => import('@/views/client_area/match/ShowAll.vue'),
        meta: {
          auth: true,
        },
        children: [
          {
            path: 'show/:id',
            props: true,
            component: () => import('@/views/client_area/match/Show.vue'),
          },
        ],
      },
      {
        path: 'tickets',

        component: () => import('@/views/client_area/Tickets.vue'),
        meta: {
          auth: true,
        },
      },
      {
        path: 'new-ticket',

        component: () => import('@/views/client_area/NewTicket.vue'),
        meta: {
          auth: true,
        },
      },
    ],
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('@/views/ContactUs.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/ResetPassword.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('@/views/Signup.vue'),
    meta: {
      guest: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

const isLoggedIn = computed(() => store.getters.isLoggedIn)

router.beforeEach((to, from, next) => {
  sessionStorage.setItem('from_route', from.fullPath)
  if (to.meta.auth && !isLoggedIn.value) {
    next('/login')
    sessionStorage.setItem('from_route', to.fullPath)
  } else if (to.meta.guest && isLoggedIn.value) {
    next('/')
  } else {
    next()
  }
})

export default router
