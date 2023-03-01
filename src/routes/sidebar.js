/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"
import {RiProductHuntLine} from "react-icons/ri"
import {FaHospitalUser} from "react-icons/fa"
import {BiCategoryAlt} from "react-icons/bi"
import {GoReport} from "react-icons/go"

const routes = [
  {
    path: '/app/dashboard', // the url
    icon: <AiOutlineHome/>, // the component being exported from icons/index.js
    name: 'Home', // name that appear in Sidebar
  },
  // {
  //   path: '/app/forms',
  //   icon: 'FormsIcon',
  //   name: 'Add_product',
  // },
  // {
  //   path: '/app/cards',
  //   icon: 'CardsIcon',
  //   name: 'Cards',
  // },
  // {
  //   //path: '/app/users',
  //   icon: <AiOutlineShoppingCart/>,
  //   name: 'users',
  //   routes: [
  //         // submenu
  //         {
  //           path: '/app/profile',
  //           name: 'Profiles',
  //         },
  //         {
  //           path: '/app/verification',
  //           name: 'Authentication & verification',
  //         },
  //         {
  //           path: '/app/report',
  //           name: 'report',
  //         },
  //         {
  //           path: '/app/activity',
  //           name: 'Activity',
  //         },
  //         {
  //           path: '/app/support',
  //           name: 'Support',
  //         },
  //       ],
  // },
  // {
  //   path: '/app/buttons',
  //   icon: 'ButtonsIcon',
  //   name: 'Buttons',
  // },
  // {
  //   path: '/app/modals',
  //   icon: 'ModalsIcon',
  //   name: 'Modals',
  // },
   {
    icon: <FaHospitalUser/>,
    name: 'user',
    routes: [
      // submenu
          {
            path: '/app/user/profile',
            name: 'Profiles',
          },
          {
            path: '/app/user/verification',
            name: 'Authentication & verification',
          },
          {
            path: '/app/user/report',
            name: 'report',
          },
          {
            path: '/app/user/activity',
            name: 'Activity',
          },
          {
            path: '/app/user/support',
            name: 'Support',
          },
    ],
  },
  {
    icon: <FaHospitalUser/>,
    name: 'verification',
    routes: [
      // submenu
      {
            path: '/app/verification/two-factor',
            name: 'Two-factor',
          },
          {
            path: '/app/verification/email',
            name: 'Email',
          },
          {
            path: '/app/verification/identity',
            name: 'Identity',
          },
          {
            path: '/app/verification/password',
            name: 'Password policies',
          },
          {
            path: '/app/verification/bans',
            name: 'Bans & Suspension',
          },
    ],
  },
  {
    icon: <FaHospitalUser/>,
    name: 'User Reporting',
    routes: [
      // submenu
      {
            path: '/app/reporting/reports',
            name: 'Reports',
          },
          {
            path: '/app/reporting/complaints',
            name: 'Complaints',
          },
          {
            path: '/app/reporting/behavior',
            name: 'Behavior',
          },
          {
            path: '/app/reporting/block',
            name: 'blocked users',
          },
          {
            path: '/app/reporting/feedback',
            name: 'Feedback',
          },
    ],
  },
  {
    icon: <FaHospitalUser/>,
    name: 'Content',
    routes: [
      // submenu
      {
            path: '/app/content/moderation',
            name: 'Moderation',
          },
          {
            path: '/app/content/workflow',
            name: 'Approval Workflow',
          },
          {
            path: '/app/content/hashtag',
            name: 'Hashtags',
          },
          {
            path: '/app/content/comments',
            name: 'Comments',
          },
          {
            path: '/app/content/reporting',
            name: 'Reporting',
          },
          {
            path: '/app/content/distribution',
            name: 'distribution',
          },
    ],
  },
  {
    icon: <FaHospitalUser/>,
    name: 'Analytics & reports',
    routes: [
      // submenu
      {
            path: '/app/analytics/user-enagement',
            name: 'User Engagement',
          },
          {
            path: '/app/analytics/demographics',
            name: 'Audience Demographis',
          },
          {
            path: '/app/analytics/hashtage-perfomence',
            name: 'Hashtag Perfomence',
          },
          {
            path: '/app/analytics/content-perfomence',
            name: 'Content perfomence',
          },
          {
            path: '/app/analytics/data',
            name: 'Data visualization',
          },
          {
            path: '/app/analytics/dashboard',
            name: 'Reports and Dashboard',
          },
    ],
  },
  {
    icon: <FaHospitalUser/>,
    name: 'Ad Management',
    routes: [
      // submenu
      {
            path: '/app/ad/campaign',
            name: 'Campaign Creation',
          },
          {
            path: '/app/ad/analysis',
            name: 'Performance Analysis',
          },
          {
            path: '/app/ad/tagets',
            name: 'Targeting',
          },
          {
            path: '/app/ad/optimization',
            name: 'Creative Optimization',
          },
          {
            path: '/app/ad/budget',
            name: 'Budget Management',
          },
          {
            path: '/app/ad/testing',
            name: 'A/D Testing',
          },
          {
            path: '/app/ad/reporting',
            name: 'Reporting',
          },
    ],
  },
  
]

export default routes
