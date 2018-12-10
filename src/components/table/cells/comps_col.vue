<script>
import cell from './cell'
export default {
  mixins: [ cell ],
  props: {
    slotRender: {
      default: function () {
        return function () {}
      },
      type: Function
    }
  },
  name: 'comps',
  data: function () {
    return {}
  },
  render: function (h) {
    return h(
      'div',
      this.slotRender({
        tplName: this.header.tplName,
        row: this.row
      })
    )
  },
  mounted: function () {}
}
</script>
