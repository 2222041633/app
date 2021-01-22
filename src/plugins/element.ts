import {
  ElButton,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElInput,
  ElTabPane,
  ElTabs,
  ElMessageBox, ElMessage, ElSelect, ElOption, ElCard, ElRow, ElCol
} from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import { App } from 'vue'
import 'element-plus/lib/theme-chalk/index.css'
import '../assets/css/global.css'
import '../assets/css/iconfont/iconfont.css'

export default (app: App) => {
  locale.use(lang)
  app.config.globalProperties.$ElMessageBox = ElMessageBox
  app.config.globalProperties.$ElMessage = ElMessage
  app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }
  app.use(ElButton)
    .use(ElMenu)
    .use(ElMenuItem)
    .use(ElMenuItemGroup)
    .use(ElInput)
    .use(ElTabPane)
    .use(ElTabs)
    .use(ElSelect)
    .use(ElCard)
    .component(ElRow.name, ElRow)
    .component(ElCol.name, ElCol)
    .component(ElOption.name, ElOption)
  // .use(ElOption)
}
