<template>
   <div>
      这是平台页面
      <el-button @click='toCrm'>前往crm管理系统</el-button>
      <el-button @click='toBuild'>前往施工管理系统</el-button>
      <table-e :headers='h' storeName='buildDemo'></table-e>
   </div>
</template>
<script>
import tableE from '@/components/table/table.vue'
// import { mapGetters } from 'vuex'
export default {
  name: 'welcome',
  data: function () {
    return {
      h: [
        {type: 'txt', label: '这是头', labelName: 'xx', adapter: (row) => row.xx*11}
      ]
    }
  },
  computed: {
    // ...mapGetters({
    //   buildDemo: 'buildDemo/data'
    // })
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
    tableE
  }
}
</script>
<style>
</style>
