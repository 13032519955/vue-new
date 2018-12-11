<template>
  <div>
    {{row[header.labelName] | cent(header.precision || 2)}}
  </div>
</template>
<script>
/**
    @param {label:'头', labelName:'参数名', type: 'price', precision: 2} : Object // precision 精度
**/
import cell from './cell'
export default {
  mixins: [ cell ],
  name: 'price',
  data: function () {
    return {}
  },
  mounted: function () {}
}
</script>
