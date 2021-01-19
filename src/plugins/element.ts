import { ElButton } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import locale from 'element-plus/lib/locale'
import { App } from 'vue'
import 'element-plus/lib/theme-chalk/index.css'
import '../assets/css/global.css'
import '../assets/css/iconfont/iconfont.css'
export default (app: App) => {
  locale.use(lang)
  app.use(ElButton)
}
