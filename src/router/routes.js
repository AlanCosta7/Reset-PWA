
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'auth', component: () => import('pages/auth/Auth.vue') }
    ]
  },
  {
    path: '/app',
    component: () => import('layouts/AppLayout.vue'),
    children: [
      { path: 'profile', name: 'profile', component: () => import('pages/user/Profile.vue') },
      { path: 'institution', name: 'institution', component: () => import('pages/user/Institution.vue') },
      { path: '', name:'index', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
