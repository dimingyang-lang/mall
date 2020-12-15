<template>
  <div id="tabbarshow">
    <tabbar>
      <tabbaritem path="/home"  colorset="#FFB6C1">
      <img src="~assets/img/shangchengGo.png" alt="" slot="img">
      <img src="~assets/img/shangchengleave.png" alt="" slot="imgleave">
      <div slot="span" class="font">商城</div>
      </tabbaritem>
      <tabbaritem path="/category" colorset="rgba(238,130,238,.6)">
        <img src="~assets/img/fenleiGo.png" alt="" slot="img">
        <img src="~assets/img/fenleileave.png" alt="" slot="imgleave">
        <div slot="span" class="font">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" colorset="rgba(138,43,226,.6)">
        <img src="~assets/img/gouwucheGo.png" alt="" slot="img">
        <img src="~assets/img/gouwucheleave.png" alt="" slot="imgleave">
        <div slot="span" class="font">购物车</div>
      </tabbaritem>
      <tabbaritem path="/my" colorset="rgba(165,42,42,1)">
        <img src="~assets/img/wodeGo.png" alt="" slot="img">
        <img src="~assets/img/wodeleave.png" alt="" slot="imgleave">
        <div slot="span" class="font">我的</div>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "./tabbar";
import tabbaritem from "./tabbar-item";
export default {
  name: "tabbarshow",
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style scoped>
#tabbarshow {
  width: 20rem;
  height: 49px;
  position: fixed;
  bottom: 0px;
  background-color:white;
}
img {
  margin-top: 5px;
}
.font {
  padding-top: 5px;
  font-size: 16px;
}
</style>
