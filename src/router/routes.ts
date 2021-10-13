import { RouteConfig } from 'vue-router'
import homeRoute from './_home'
import userRoute from './_user'
import { formatRoutesByEnhanceMeta } from './helper'

const routes: Array<RouteConfig> = formatRoutesByEnhanceMeta([
  homeRoute,
  userRoute
])

export default routes
