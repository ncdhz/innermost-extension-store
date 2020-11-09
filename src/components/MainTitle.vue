<template>
  <el-header class="extension-store-title" style="height:45px" :style="storeTitleColor">
    <span>{{getTitle}}</span>
    <div class="extension-store-title-divider el-divider el-divider--horizontal" :style="dividerColor"/>
  </el-header>
</template>
<script>
import _ from 'lodash'
import Main from '../index'
export default {
  props: {
    title: String
  },
  computed: {
    getTitle() {
      return Main.it(this.title)
    },
    storeTitleColor() {
      return _.get(Main.getTheme(true), 'main.setting.title')
    },
    dividerColor() {
      return _.get(Main.getTheme(true), 'main.setting.divider')
    }
  }
}
</script>
<style lang="scss" scoped>
  .extension-store-title {
    font-size: 17px;
    line-height: 30px;
  }
  .extension-store-title-divider {
    padding: 0px;
    margin: 0px;
    margin-top: 10px;
    height: 2px;
  }
</style>
