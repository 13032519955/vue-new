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
export default {
  name: 'welcome',
  data: function () {
    return {
      apps: [
        {appName:'客户管理系统', url:'/crm', icon:''},
        {appName:'施工管理系统', url:'/build', icon: ''}
      ]
    }
  },
  computed: {
  },
  mounted: function () {
  },
  methods: {
    btnClick(one) {
      location.href = one.url
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
}
</style>
