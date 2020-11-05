import { ExtensionInterface } from 'innermost'
import { I18N } from '@/utils'
import { Menu, Body } from '@/renderer'
class InnermostExtensionStore implements ExtensionInterface {
  // 商店图标
  innermostIcon() {
    return {
      clazz: 'el-icon-s-shop',
      isClass: true
    }
  }
  // 商店主体部分
  innermostBody() {
    return Body
  }
  // 商店菜单
  innermostMenu() {
    return Menu
  }

  innermostOptions() {
    return {
      i18n: [
        I18N.EN,
        I18N.ZH_CN
      ]
    }
  }
}

export default new InnermostExtensionStore()
