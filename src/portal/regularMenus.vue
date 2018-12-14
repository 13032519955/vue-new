<template>
      <el-menu
      :default-active='$route.path'
      class='full_height el-menu-vertical-demo'
      @open="handleOpen"
      @close="handleClose" 
      background-color="#0c0f1b"
      text-color="#a8ab31"
      active-text-color="white">
      <el-menu-item v-for='(menu, i) in data.data' @click='menuClick(menu)' :key='i' :index="menu.url">
        <span slot="title">{{menu.name}}</span>
      </el-menu-item>
    </el-menu>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: "regular-menus",
  data: function() {
    return {};
  },
  computed: {
    ...mapGetters({
      data: 'appMenus/data'
    })
  },
  mounted: function() {
    console.log(this.$route);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuClick(menu) {
      this.$router.push({path: menu.url});
    }
  },
  components: {}
};
</script>
<style>
.el-menu-vertical-demo {
    width: 99%;
    display: inline-block;
    text-align: left;
}
</style>
