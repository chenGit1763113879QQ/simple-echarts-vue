import * as VueRouter from "vue-router"
import { HomePage, EchartsEditor, EchartsList } from "./pages"

export enum ROUTER {
  HOME = "/home",

  ECHARTSLIST = "/home/charts-list",

  ECHARTSEDITOR = "/home/charts-editor",
}

const routes: VueRouter.RouteRecordRaw[] = [
  { path: "/", redirect: ROUTER.HOME },
  { path: ROUTER.HOME, component: HomePage },
  { path: ROUTER.ECHARTSLIST, component: EchartsList },
  { path: ROUTER.ECHARTSEDITOR, component: EchartsEditor },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
