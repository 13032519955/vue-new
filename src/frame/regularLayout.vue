<template>
   <div>
       常规布局
      <router-view v-loading='layoutLoading.value'></router-view>
   </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'regular-layout',
  data: function () {
    return {}
  },
  computed: {
    ...mapGetters({
      layoutLoading: 'layLoading/data'
    })
  },
  mounted: function () {
  },
  components: {
  }
}
</script>
<style>
</style>
