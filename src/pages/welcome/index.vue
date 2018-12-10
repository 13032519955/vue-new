<template>
   <div>
      这是平台页面
      <el-button @click='toCrm'>前往crm管理系统</el-button>
      <el-button @click='toBuild'>前往施工管理系统</el-button>
      <table-e :headers='h' storeName='buildDemo'>
          <template slot-scope='props'>
              <div v-if="props.tplName == 'aa'">
                  aaa
              </div>
          </template>
      </table-e>
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
        {type: 'price', label: '这是头', labelName: 'xx', precision: 3},
        {type: 'comps', label: '这是11头', labelName: 'xxx', tplName: 'aa'}
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
