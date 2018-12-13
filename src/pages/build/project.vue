<template>
   <div>
      <el-button @click='$refs.search.search()'>查询</el-button>
      <search-view ref='search' :options='searchOptions' :params='params'></search-view>
      <table-view store-name='buildDemo' :params='params' :headers='headers' ref='table'></table-view>
   </div>
</template>
<script>
import page from 'page'
export default {
  mixins: [page],
  name: 'project',
  data: function () {
    return {
        params: {name:''},
        headers:[
            {label:'姓名', labelName:'name'},
            {label:'城市', labelName: 'city'}
        ],
        searchOptions: [
            {label: '姓名', key:'name'},
            {label: '城市', key:'city'}
        ],
    }
  },
  computed: {
  },
  mounted: function () {
      this.$nextTick(()=> {
            this.$refs.search.setRelationTable(this.$refs.table);
        });
  },
  methods: {
  },
  components: {
  }
}
</script>
<style>
</style>
