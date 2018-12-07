<template>
   <div>
      这是平台页面
      <el-button @click='toCrm'>前往crm管理系统</el-button>
      <el-button @click='toBuild'>前往施工管理系统</el-button>
   </div>
</template>
<script>
export default {
  name: 'welcome',
  data: function () {
    return {}
  },
  computed: {
  },
  mounted: function () {
  },
  methods: {
    toCrm () {
      location.href = '/crm.html'
    },

    toBuild () {
      location.href = '/build.html'
    }
  },
  components: {
  }
}
</script>
<style>
</style>
