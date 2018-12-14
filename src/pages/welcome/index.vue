<template>
   <el-container>
    <el-header class='welcome_header'>综合应用平台</el-header>
    <el-main>
      <el-row>
            <el-button v-for='(one, i) in apps' :key='i' @click='btnClick(one)' class='welcome_item' plain>{{one.appName}}</el-button>
        </el-row>
    </el-main>
  </el-container>
</template>
<script>
import config from '@/config/config'
export default {
  name: 'welcome',
  data: function () {
    return {
      apps: [
        {appName:'客户管理系统', url:'crm', icon:''},
        {appName:'施工管理系统', url:'build', icon: ''},
        {appName:'地采管理系统', url:'/', icon: ''},
        {appName:'服务商管理系统', url:'/', icon: ''},
        {appName:'会员管理系统', url:'/', icon: ''},
        {appName:'BI统计', url:'/', icon: ''},
        {appName:'TMS系统', url:'/', icon: ''},
        {appName:'下单系统', url:'/', icon: ''}
      ]
    }
  },
  computed: {
  },
  mounted: function () {
  },
  methods: {
    btnClick(one) {
      location.href = config.publicPath + one.url + '/index.html#/'
    }
  },
  components: {
  }
}
</script>
<style scoped>
.welcome_header {
  line-height: 60px;
  background: #262427;
  color: white;
}
.welcome_item {
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
}
</style>
