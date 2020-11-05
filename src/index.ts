import { ExtensionInterface } from 'innermost'
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
    return {

    }
  }
}

export default new InnermostExtensionStore()
