const table = {
  props: {
    // 表格头
    headers: {
      default: function () {
        return []
      },
      type: Array,
      required: true
    },
    // 流体高度
    maxHeight: {
      default: '-1',
      type: String
    },
    // 表格边框
    border: {
      default: true,
      type: Boolean
    },
    // 是否高亮
    highlight: {
      default: true,
      type: Boolean
    },
    // 斑马纹
    stripe: {
      default: true,
      type: Boolean
    },
    // 是否显示表头
    showHeader: {
      default: true,
      type: Boolean
    },
    // 是否开启复选框
    select: {
      // 复选开启
      default: false,
      type: Boolean
    },
    // 是否开启序号
    index: {
      // 复选开启
      default: false,
      type: Boolean
    },
    // 复选框状态函数
    selectFun: {
      default: function () {
        return true
      },
      type: Function
    },
    // 当前选中行
    currentRowKey: {
      type: String || Number,
      default: null
    }
  },
  data: function () {
    return {}
  },
  computed: {},
  mounted: function () {},
  methods: {
    // 单项被选择
    selectItem (selection, row) {
      this.$emit('selectChange', {row, selection})
    },
    // 全选
    selectAll (selection) {
      this.$emit('selectChange', {selection})
    },
    // 复选变化
    selectionChange (selection) {
      this.$emit('selectChange', {selection})
    },
    // 排序发生变化
    sortChange (column, prop, order) {
    },
    // 单元格点击
    cellClick (row, column, cell, event) {},
    // 表格头默认形式
    renderHeader (h, { column, $index }) {
      return <span>{column.label}</span>
    }
  },
  watch: {},
  components: {}
}

export default table
