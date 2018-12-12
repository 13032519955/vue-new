<template>
  <el-container class='full_height'>
    <el-header class='regular_header'>
      {{title}}
    </el-header>
    <el-container class='containerIn'>
      <el-aside width="200px"  class='full_height'>
          <regular-menus></regular-menus>
      </el-aside>
      <el-main  class='full_height'>
        <router-view v-loading='layoutLoading.value'></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapGetters } from 'vuex'
import regularMenus from '@/portal/regularMenus'
export default {
  name: 'regular-layout',
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters({
      layoutLoading: 'layLoading/data'
    }),
    title() {
      return document.title
    }
  },
  mounted: function () {
  },
  components: {
    regularMenus
  }
}
</script>
<style scoped>
.regular_header {
  background-color: rgb(84, 92, 100); color: white;line-height: 60px;
}
.containerIn {
  height: calc(100% - 60px);
}
</style>
