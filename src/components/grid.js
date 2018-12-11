/**
 * 表格的抽象类
 * 列表的抽象类
 */
const grid = {
  props: {
    pagination: {
      default: true,
      type: Boolean
    },
    name: {
      // 某个业务场景下的grid名称  标记唯一性命名
      default: Math.random().toString(32),
      type: String
    },
    hash: {
      default: true,
      type: Boolean
    },
    // 绑定store的name
    storeName: {
      default: '',
      type: String
    },
    params: {
      default: function () {
        return {}
      },
      type: Object
    }
  },
  data: function () {
    return {
      // 数据集合
      data: null
    }
  },
  computed: {},
  mounted: function () {
    if (this.hash) this.setNewestParams()
    this.load()
  },
  methods: {
    // 同步params
    setNewestParams: function () {
      Object.assign(this.params, this.$router.query || {})
    },
    load: async function  () {
      this.data = this.$store.getters[this.storeName + '/data']
      await this.$store.dispatch(this.storeName + '/getList', this.params)
      this.$emit('loadSuccess', this.data);
    },
    // 行点击
    rowClick: function (row, event, column) {
      this.$emit('rowClick', row)
    },
    // 分页切换
    pageChange: function (page) {
    }
  },
  watch: {
  },
  components: {}
}
export default grid
