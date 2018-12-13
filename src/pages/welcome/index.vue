<template>
   <div>
      综合应用平台
      <el-row>
          <el-button v-for='(one, i) in apps' :key='i' @click='btnClick(one)'>{{one.appName}}</el-button>
      </el-row>
   </div>
</template>
<script>
export default {
  name: 'welcome',
  data: function () {
    return {
      apps: [
        {appName:'客户管理系统', url:'/crm'},
        {appName:'施工管理系统', url:'/build'}
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
<style>
</style>
