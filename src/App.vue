<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
    <tabbarshow></tabbarshow>
  </div>
</template>

<script>
import tabbarshow from "components/common/tabbarshow";
export default {
  name: 'App',
  components:{
    tabbarshow
  },
}
</script>

<style lang="less">
#app {
  width: 20rem;
  margin: 0 auto 0;
  overflow: hidden;
}
@import "assets/css/base.css";
@import "assets/css/screen.less"  ;
</style>
