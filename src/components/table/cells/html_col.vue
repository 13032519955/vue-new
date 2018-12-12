<template>
  <div v-html='row[header.labelName]'>
  </div>
</template>
<script>
/**
    @param {label:'头', labelName:'参数名', type: 'html'} : Object
**/
import cell from './cell'
export default {
  mixins: [ cell ],
  name: 'html',
  data: function () {
    return {}
  },
  mounted: function () {}
}
</script>
