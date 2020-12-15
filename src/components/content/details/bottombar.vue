<template>
  <div id="bottombar">
    <div class="item">客服</div>
    <div class="item" @click="$router.push('/cart')">购物车</div>
    <div class="item" @click="love">收藏</div>
    <div class="item-special">
      <div class="addcart" @click="addcart">加入购物车</div>
      <div class="buy">结算</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottombar",
  methods:{
    addcart() {
      this.$toast.changeshow()
      this.$store.commit('addcart',this.$route.query.iid)
      console.log(this.$route.query.iid);
    },
    love() {
      this.$toast.changeshow('已收藏')
    }
  }
}
</script>

<style scoped>
  #bottombar {
    position: fixed;
    height: 49px;
    bottom: 0;
    left: 0 ;
    right: 0;
    display: flex;
    vertical-align: center;
    font-size: 14px;
    background-color: #f6f6f6;
    line-height: 49px;
  }
  .item {
    flex: 1;
    text-align: center;
  }
  .item-special {
    flex: 4;
    display: flex;
  }
  .addcart {
    margin-top: 6.5px;
    flex: 1;
    text-align: center;
    background-color: #ff8198;
    border-radius: 25px 0 0 25px;
    height: 36px;
    line-height: 36px;
  }
  .buy {
    margin-top: 6.5px;
    flex: 1;
    text-align: center;
    background-color: #ff8198;
    border-radius: 0 25px 25px 0;
    height: 36px;
    vertical-align: center;
    line-height: 36px;
  }
</style>
