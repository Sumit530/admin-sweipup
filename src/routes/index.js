import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Profile = lazy(() => import('../pages/user/profile'))
const Authentication = lazy(() => import('../pages/user/authentication'))
const Activity = lazy(() => import('../pages/user/acitvity'))
const Reports = lazy(() => import('../pages/user/reports'))
const Support = lazy(() => import('../pages/user/support'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Users = lazy(() => import('../pages/users'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const Tables = lazy(() => import('../pages/Tables'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))
const Seller = lazy(() => import('../pages/Saller'))
const Product = lazy(() => import('../pages/Product'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/user/profile', // the url
    component: Profile, // view rendered
      
  },
  {
    path: '/user/verification', // the url
    component: Authentication, // view rendered
    name:"users"
  },
  {
    path: '/user/report', // the url
    component: Reports, // view rendered
    name:"users"
  },
  {
    path: '/user/activity', // the url
    component: Activity, // view rendered
    name:"users"
  },
  {
    path: '/user/support', // the url
    component: Support, // view rendered
    name:"users"
  },
  {
    path: '/verification/two-factor', // the url
    component: Dashboard, // view rendered
    name:"verification"
  },
  {
    path: '/verification/email', // the url
    component: Dashboard, // view rendered
    name:"verification"
  },
  {
    path: '/verification/identity', // the url
    component: Dashboard, // view rendered
    name:"verification"
  },
  {
    path: '/verification/password', // the url
    component: Dashboard, // view rendered
    name:"verification"
  },
  {
    path: '/verification/bans', // the url
    component: Dashboard, // view rendered
    name:"verification"
  },
  {
    path: '/reporting/reports', // the url
    component: Dashboard, // view rendered
    name:"User Reporting"
  },
  {
    path: '/reporting/complaints', // the url
    component: Dashboard, // view rendered
    name:"User Reporting"
  },
  {
    path: '/reporting/behavior', // the url
    component: Dashboard, // view rendered
    name:"User Reporting"
  },
  {
    path: '/reporting/block', // the url
    component: Dashboard, // view rendered
    name:"User Reporting"
  },
  {
    path: '/reporting/feedback', // the url
    component: Dashboard, // view rendered
    name:"User Reporting"
  },
  
  {
    path: '/content/moderation', // the url
    component: Dashboard, // view rendered
    name:"Content"
  },
  {
    path: '/content/workflow', // the url
    component: Dashboard, // view rendered
    name:"Content"
  },
  
  {
    path: '/content/hashtag', // the url
    component: Dashboard, // view rendered
    name:"Content"
  },
  
  {
    path: '/content/comments', // the url
    component: Dashboard, // view rendered
    name:"Content"
  },
  
  {
    path: '/content/reporting', // the url
    component: Dashboard, // view rendered
    name:"Content"
  },
  {
    path: '/content/distribution', // the url
    component: Dashboard, // view rendered
    name:"Content"
  },
  {
    path: '/analytics/user-enagement', // the url
    component: Dashboard, // view rendered
    name:"analytics & reports"
  },
  {
    path: '/analytics/demographics', // the url
    component: Dashboard, // view rendered
    name:"analytics & reports"
  },
  {
    path: '/analytics/hashtage-perfomence', // the url
    component: Dashboard, // view rendered
    name:"analytics & reports"
  },
  {
    path: '/analytics/content-perfomence', // the url
    component: Dashboard, // view rendered
    name:"analytics & reports"
  },
  {
    path: '/analytics/data', // the url
    component: Dashboard, // view rendered
    name:"analytics & reports"
  },
  {
    path: '/analytics/dashboard', // the url
    component: Dashboard, // view rendered
    name:"analytics & reports"
  },
  {
    path: '/ad/campaign', // the url
    component: Dashboard, // view rendered
    name:"Ad Management"
  },
  {
    path: '/ad/analysis', // the url
    component: Dashboard, // view rendered
    name:"Ad Management"
  },
  {
    path: '/ad/tagets', // the url
    component: Dashboard, // view rendered
    name:"Ad Management"
  },
  {
    path: '/ad/campaign', // the url
    component: Dashboard, // view rendered
    name:"Ad Management"
  },
  {
    path: '/ad/optimization', // the url
    component: Dashboard, // view rendered
    name:"Ad Management"
  },
  {
    path: '/ad/budget', // the url
    component: Dashboard, // view rendered
    name:"Ad Management"
  },
  
  {
    path: '/ad/testing', // the url
    component: Dashboard, // view rendered
    name:"Ad Management"
  },
  
  {
    path: '/ad/reporting', // the url
    component: Dashboard, // view rendered
    name:"Ad Management"
  },
  
  // {
  //   path: '/products',
  //   component: Product,
  // },
  // {
  //   path: '/sellers',
  //   component: Seller,
  // },
  // {
  //   path: '/users',
  //   component: Users,
  // },
  // {
  //   path: '/category',
  //   component: Tables,
  // },
  // {
  //   path: '/complaint',
  //   component: Modals,
  // },
  // {
  //   path: '/tables',
  //   component: Tables,
  // },
  {
    path: '/404',
    component: Page404,
    name:"404"
  },
  // {
  //   path: '/blank',
  //   component: Blank,
  // },
]

export default routes
