import MenuId from './MenuId'
import MyExtension from '@/views/MyExtension.vue'
import ExtensionMarket from '@/views/ExtensionMarket.vue'
export default {
  pages: [
    {
      data: MyExtension,
      id: MenuId.MY_EXTENSION,
      default: true
    },
    {
      data: ExtensionMarket,
      id: MenuId.EXTENSION_MARKET
    }
  ]
}
