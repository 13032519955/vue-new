/**
 * 表格的抽象类
 * 列表的抽象类
 */
const grid = {
  props: {
    dataStatic: {
      default: null
    },
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
    // 同步参数
    if (this.hash) this.setNewestParams()
    // 加载数据
    if (this.storeName) this.load()
    // 处理静态grid
    if (this.dataStatic) this.data = this.dataStatic
  },
  methods: {
    // 同步params
    setNewestParams: function () {
      Object.assign(this.params, this.$route.query || {})
    },
    load: async function  (params) {
      this.data = this.$store.getters[this.storeName + '/data']
      await this.$store.dispatch(this.storeName + '/getList', Object.assign(this.params, params))
      // 注： 饿了么的分页器 异步读取total之后 current-page不生效 
      this.total = this.data.count*1;
      this.$emit('loadSuccess', this.data);
    },
    // 行点击
    rowClick: function (row, event, column) {
      this.$emit('rowClick', row)
    }
  },
  watch: {
  },
  components: {}
}
export default grid
