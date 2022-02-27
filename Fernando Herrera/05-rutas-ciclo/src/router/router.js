import { createRouter, createWebHashHistory } from 'vue-router'
import isAuth from './auth-guard'
// 1. Define route components.
// import ListPage from "../modules/pokemon/pages/ListPage.vue";
// // import AboutPage from "../modules/pokemon/pages/AboutPage.vue";
// import PokemonPage from "../modules/pokemon/pages/PokemonPage.vue";
// import NoPageFound from "../modules/shared/pages/components/NoPageFound.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', redirect: '/pokemon' },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('../modules/pokemon/layouts/PokemonLayout.vue'),
    children: [
      {
        path: 'home', //por defecto la ruta principal padre en este caso /pokemon
        name: 'poke-home',
        component: import('../modules/pokemon/pages/ListPage.vue'),
      },
      {
        path: 'about',
        name: 'poke-about',
        component: () => import('../modules/pokemon/pages/AboutPage.vue'),
      },
      {
        path: 'pokeid/:pokeid',
        name: 'poke-id',
        component: () => import('../modules/pokemon/pages/PokemonPage.vue'),
        props: (route) => {
          const id = Number(route.params.pokeid)
          return isNaN(id) ? { id: 1 } : { id }
        },
      },
      {
        path: '', //por defecto la ruta principal padre en este caso /pokemon
        redirect: {
          name: 'poke-home',
        },
      },
    ],
  },
  //DBZ LAYOUT
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: (to, from, next) => {
      //2da forma no en función [funcionName]
      isAuth(to, from, next)
    },
    component: () => import('../modules/dbz/layouts/DbLayout.vue'),
    children: [
      {
        path: 'characters', //por defecto la ruta principal padre en este caso /pokemon
        name: 'dbz-characters',
        component: import('../modules/dbz/pages/Characters.vue'),
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import('../modules/dbz/pages/About.vue'),
      },
      {
        path: '', //por defecto la ruta principal padre en este caso /dbzdbz  redirect: {
        redirect: {
          name: 'dbz-about',
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: () =>
      import('../modules/shared/pages/components/NoPageFound.vue'),
  },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

// ----- guard global sincronos ----
// router.beforeEach((to, from, next) => {
//   const random = Math.random() * 100
//   if (random > 50) {
//     next()
//   } else {
//     //bloqueado
//     next({ name: 'poke-home' })
//   }
// })
// ----- guard global Asincronos ----
// const canAccess = () => {
//   return new Promise((res) => {
//     const random = Math.random() * 100
//     if (random > 50) {
//       res(true)
//     } else {
//       //bloqueado
//       res(false)
//     }
//   })
// }

// router.beforeEach(async (to, from, next) => {
//   const auth = await canAccess()
//   if (auth) {
//     next()
//   }
//   next({ name: 'poke-home' })
// })

//-------- guard para rutas especificas

export default router
