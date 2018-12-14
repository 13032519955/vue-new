<template>
  <el-container class='full_height'>
    <el-header class='regular_header'>
      {{title}}
      <el-row class='regular_opr'>
        <el-button plain size='mini' @click='backHandler' icon='el-icon-back'>返回应用平台</el-button>
      </el-row>
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
  methods: {
    backHandler() {
      location.href = '/welcome'
    }
  },  
  components: {
    regularMenus
  }
}
</script>
<style scoped>
.regular_header {
  background-color: rgb(71, 74, 76); 
  color: white;
  line-height: 60px;
  text-align: left;
}
.containerIn {
  height: calc(100% - 60px);
}
.regular_opr {
  position: absolute;
  right: 10px;
  top: 0px;
}
</style>
