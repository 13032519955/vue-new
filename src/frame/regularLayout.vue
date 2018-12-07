<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <router-view v-loading='layoutLoading.value'></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'regular-layout',
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters({
      layoutLoading: 'layLoading/data'
    })
  },
  mounted: function () {
  },
  components: {
  }
}
</script>
<style>
</style>
