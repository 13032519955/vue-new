const cell = {
  props: {
    header: {
      default: function () {return {}},
      type: Object
    },
    row: {
      default: function () {return {}},
      type: Object
    }
  },
  data: function() {
    return {};
  },
  computed: {},
  mounted: function () {},
  methods: {
    adapter: function (h, data) {
      if (!data) return ''
      let v = data[h.labelName]
      if (h.adapter && h.adapter.constructor === Function) {
        v = h.adapter(data)
      }
      return v
    }
  },
  watch: {},
  components: {}
}
export default cell
  