<template>
  <div>
    {{row[header.labelName] | cent(header.precision || 2)}}
  </div>
</template>
<script>
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
