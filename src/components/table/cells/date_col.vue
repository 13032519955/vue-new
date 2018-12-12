<template>
  <div>
    {{row[header.labelName] | formate(header.formate)}}
  </div>
</template>
<script>
/**
    @param {label:'头', labelName:'参数名', type: 'date', formate:'yyyy-mm-dd'} : Object
**/
import cell from './cell'
export default {
  mixins: [ cell ],
  name: 'date',
  data: function () {
    return {}
  },
  mounted: function () {}
}
</script>
