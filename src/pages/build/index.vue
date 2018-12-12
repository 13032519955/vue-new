<template>
   <div>
      build系统页面
   </div>
</template>
<script>
import page from 'page'
export default {
  mixins: [page],
  name: 'build',
  data: function () {
    return {}
  },
  computed: {
  },
  mounted: function () {
    this.showMsg({type: 'success', message: '啦啦啦啦'})
  },
  methods: {
  },
  components: {
  }
}
</script>
<style>
</style>
