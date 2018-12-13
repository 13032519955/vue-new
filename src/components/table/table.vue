<template>
  <div v-loading="data.loading" v-if='!!data'>
    <div>
      <div class="table-e">
        <el-table
          :max-height='maxHeight'
          :key="name"
          :current-row-key="currentRowKey"
          :border="border"
          :highlight-current-row="highlight"
          :data="data.list"
          :stripe="stripe"
          :show-header="showHeader"
          @sort-change="sortChange"
          @select="selectItem"
          @cell-click="cellClick"
          @select-all="selectAll"
          @selection-change="selectionChange">
          <!--选择-->
          <el-table-column v-if="select" type="selection" :selectable="selectFun" width="55"></el-table-column>
          <!--序号-->
          <el-table-column v-if="index" type="index" width="55"></el-table-column>
          <!--自定义项-->
          <el-table-column
            v-for="(one, index) in headers"
            :key="index"
            :render-header="one.renderHeader || renderHeader"
            :fixed="one.fixed"
            :label="one.label"
            :prop="one.labelName"
            :align='one.align'
            :type="one.type"
            :sortable="one.sortable"
            :width="one.width"
            :min-width="one.minWidth">
            <template slot-scope="scope">
                <txt-col v-if='one.type === "txt"' :header='one' :row='scope.row'></txt-col>
                <price-col v-else-if='one.type === "price"' :header='one' :row='scope.row'></price-col>
                <date-col v-else-if='one.type === "date"' :header='one' :row='scope.row'></date-col>
                <comps-col v-else-if='one.type === "comps"' :header='one' :row='scope.row' :slotRender="$scopedSlots.default"></comps-col>
                <operator-col v-else-if='one.type === "operator"' :header='one' :row='scope.row'></operator-col>
                <html-col v-else-if='one.type === "html"' :header='one' :row='scope.row'></html-col>
                <txt-col v-else :header='one' :row='scope.row'></txt-col>
            </template>
          </el-table-column>
          <div slot="empty">
            没有数据
          </div>
          <div slot="append">
            <slot name="append"></slot>
          </div>
        </el-table>
      </div>
      <slot></slot>
    </div>
    <div class="table-pagination" style='margin-top: 20px;' v-if="pagination && !!data">
      <el-pagination
       @current-change="pageChange" 
       :current-page = "params.page*1" 
       :page-size="params.size*1" 
       layout="total,  prev, pager, next, jumper" 
       :total="total">
      </el-pagination>
    </div>
  </div>
</template>
<script>
/**
*   @param {headers: Array}
*   @event {
        // header的type为operator的时候， button点击事件
        operator_click: {row, button}
        // 选择动作
        selectChange： {row, selection}
        // 数据加载成功
        loadSuccess: data
    }
**/
import baseTable from './baseTable'
import grid from '../grid'
import compsCol from './cells/comps_col'
import dateCol from './cells/date_col'
import htmlCol from './cells/html_col'
import operatorCol from './cells/operator_col'
import priceCol from './cells/price_col'
import txtCol from './cells/txt_col'
import event_table from './event'
export default {
  mixins: [grid, baseTable],
  name: 'table-e',
  data: function () {
    return {
      total: 100
    }
  },
  methods: {
    pageChange(page) {
      this.params.page = page;
      this.load();
      if(this.hash) this.$router.replace({path: this.$router.path, query: this.params});
    }
  },
  computed: {},
  mounted: function () {
    event_table.$on('operator_click', (params) => { this.$emit('operator_click', params) })
  },
  components: {
    compsCol,
    dateCol,
    htmlCol,
    operatorCol,
    priceCol,
    txtCol
  }
}
</script>
