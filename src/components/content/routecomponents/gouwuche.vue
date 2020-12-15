<template>
  <div>
    <cartitem v-for="(item,index) in carts" class="item" :key="index"
              @click.native="changecheck(index)" :check="getcartindex(index)">
      <img :src="item">
      <span v-if="$store.state.cart[index]">数量*{{getpage(index)}}</span>
    </cartitem>
    <img src="~assets/img/tick.svg" class="default" :class="{tick:allcheck}" @click="allcheckclick">
  </div>
</template>
//点击就把index 传过来，将对应index 的check 修改成与原来不一样的值，把这个值传回去给子组件
<script>
import {getDetail} from 'network/details/detail.js'
import {mapGetters} from 'vuex'
import cartitem from "../cart/cartitem";
export default {
  name: "gouwuche",
  data() {
    return {
      carts:[],
    }
  },
  components:{
    cartitem
  },
  computed:{
    ...mapGetters(['getpage','getlength','getcartindex','getcart']),
    allcheck() {
     return this.getcart().filter(item=>item.check==false).length==0&& this.getcart().length!=0?true:false
    }
  },
  methods: {
    changecheck(index) {
      this.$store.commit('mutatecheck',index)
      // this.$store.state.cart[index].check=! this.getcartindex(index)
      // this.$store.state.cart[index].check=! this.$store.state.cart[index].check
    },
    //点击取反，同时所有上列表的item 为false;如果遍历结果有一个false
    allcheckclick() {//都true
      this.getcart().filter(item=>item.check==false).length==0?this.$store.commit('allcheckclick',false):this.$store.commit('allcheckclick',true)

    }
  },
  activated() {
    if(this.getlength!=0) {
      const arrimg=[]
      this.getcart().map((item,index) => {
        getDetail(item.iid).then(res=>{
          arrimg.push(res.result.itemInfo.topImages[0]);
        })
      });
      this.carts=arrimg
    }
  },
}
</script>

<style scoped>
.item {

}
.item img {
  width: 80px;
  height: auto;
}
.tick{
  background-color: rebeccapurple;
}
.default {
  border-radius: 50%;
  border: 1px solid gainsboro;
  width: 30px;
  position: fixed;
  bottom: 49px;
}
</style>
