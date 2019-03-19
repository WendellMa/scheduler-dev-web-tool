import React from 'react'
import { Provider } from 'react-redux'
import RouterMap from './routerMap'
import configureStore from '$redux/configure-store'

import '$styles/public.scss'

const store = configureStore()

const router = (
  <Provider store={store}>
    <RouterMap />
  </Provider>
)

export default router