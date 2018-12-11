<template>
  <div>
    {{adapter(header, row)}}
  </div>
</template>
<script>
/**
    @param {label:'头', labelName:'参数名', type: 'txt', adapter: (row) => { return ''}} : Object
**/
import cell from './cell'
export default {
  mixins: [ cell ],
  name: 'txt',
  data: function () {
    return {}
  },
  mounted: function () {}
}
</script>
