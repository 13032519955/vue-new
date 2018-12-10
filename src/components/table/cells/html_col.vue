<template>
  <div v-html='row[header.labelName]'>
  </div>
</template>
<script>
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
