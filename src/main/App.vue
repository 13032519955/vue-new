<template>
  <div id="app">
    <frame />
  </div>
</template>

<script>
import Frame from '@/frame/frame'
import menuMap from '@/config/menuMap'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  props: {
    appName: {
      default: '',
      type: String
    }
  },
  mounted () {
    this.appMenusSet(menuMap[this.appName] || [])
  },
  methods: {
    ...mapActions({
      appMenusSet: 'appMenus/changeData'
    })
  },
  components: {
    Frame
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}
html, body, #app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.full_height {
  height: 100%
}
/*---滚动条默认显示样式--*/
  ::-webkit-scrollbar-thumb {
   background-color: #cacaca;
   height: 50px;
   outline-offset: -2px;
   outline: 2px solid #fff;
   -webkit-border-radius: 4px;
   
   border: 2px solid #fff;
}
/*---鼠标点击滚动条显示样式--*/
::-webkit-scrollbar-thumb:hover {
   background-color: #4a5b6d;
   height: 50px;
   -webkit-border-radius: 4px;
}
/*---滚动条大小--*/
::-webkit-scrollbar {
   width: 8px;
   height: 8px;
}
/*---滚动框背景样式--*/
::-webkit-scrollbar-track-piece {
   background-color: rgba(0,0,0,0);
   -webkit-border-radius: 0;
}
</style>
