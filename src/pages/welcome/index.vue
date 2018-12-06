<template>
   <div>
      welcome
      <button @click='huan'>huan</button>
   </div>
</template>
<script>
export default {
  name: 'welcome',
  data: function () {
    return {}
  },
  computed: {
  },
  mounted: function () {
  },
  methods: {
    huan () {
      this.$router.push({path: '/build'})
    }
  },
  components: {
  }
}
</script>
<style>
</style>
