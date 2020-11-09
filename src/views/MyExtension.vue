<template>
  <el-container class="extension-store-my-extension">
    <main-title title="menu.myExtension"/>
    <el-main>
      <el-row>
        <el-col :span="20" :offset="2">
          <el-input :placeholder="it('search.placeholder')" v-model="search">
            <template slot="prepend">Innermost-extension</template>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
import MainTitle from '@/components/MainTitle.vue'
import _ from 'lodash'
import Main from '../index'
export default {
  data() {
    return {
      search: Main.getTheme(true)['global.message.box["--message-background"]']
    }
  },
  components: {
    MainTitle
  },
  methods: {
    it(path) {
      Main.it(path)
    }
  },
  computed: {
  }
}
</script>
<style lang="scss" scoped>
  .extension-store-my-extension {
    width: 100%;
  }
</style>
