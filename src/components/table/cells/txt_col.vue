<template>
  <div>
    {{adapter(header, row)}}
  </div>
</template>
<script>
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
