<template>
   <div>
      crm
      <button @click='huan'>huan</button>
   </div>
</template>
<script>
export default {
  name: 'crm',
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
