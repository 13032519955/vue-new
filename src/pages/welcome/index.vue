<template>
   <div>
      这是平台页面
      <el-button @click='toCrm'>前往crm管理系统</el-button>
      <el-button @click='toBuild'>前往施工管理系统</el-button>
      <table-e :headers='h' storeName='buildDemo' @operator_click='operator_click'>
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
        {type: 'operator', label: '操作', labelName: '',  adapterBtns:(row)=> {
            return [{type: 'warning', name:'确认', plain: true}]
        }}, // buttons: [{type: 'warning', name:'确认', plain: true}]},
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
      location.href = '/crm'
    },

    toBuild () {
      location.href = '/build'
    },

    operator_click(params) {
      console.log(params);
    }
  },
  components: {
    tableE
  }
}
</script>
<style>
</style>
