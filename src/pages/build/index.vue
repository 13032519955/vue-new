<template>
   <div>
      build
      <button @click='huan'>huan</button>
   </div>
</template>
<script>
export default {
  name: 'build',
  data: function () {
    return {}
  },
  computed: {
  },
  mounted: function () {
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
