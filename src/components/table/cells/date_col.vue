<template>
  <div>
    {{row[header.labelName] | formate(header.formate)}}
  </div>
</template>
<script>
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
