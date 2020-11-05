import MenuId from './MenuId'
export default {
  title: {
    i18n: true,
    name: 'menu.title'
  },
  items: [
    {
      clazz: 'el-icon-s-custom',
      name: 'menu.myExtension',
      i18n: true,
      id: MenuId.MY_EXTENSION
    },
    {
      clazz: 'el-icon-s-grid',
      name: 'menu.extensionMarket',
      i18n: true,
      id: MenuId.EXTENSION_MARKET
    }
  ],
  isClass: true
}
