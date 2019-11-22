
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue')
      },
      { path: 'issue', component: () => import('pages/Issue.vue') },
      { path: 'payment', component: () => import('pages/Payment.vue') },
      { path: 'energy', component: () => import('pages/Energy.vue') },
      { path: 'document', component: () => import('pages/Document.vue') },
      { path: 'contact', component: () => import('pages/Contact.vue') },
      {
        path: 'event/:id',
        component: () => import('pages/Event.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
