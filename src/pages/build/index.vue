<template>
   <div>
      build
      <button @click='huan'>huan</button>
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
    huan () {
      this.$router.push({path: '/crm'})
    }
  },
  components: {
  }
}
</script>
<style>
</style>
