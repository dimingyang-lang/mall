<template>
  <div class="tabbaritem" @click="toggle" :style="isactivechangestyle">
    <slot v-if="isactivechange" name="img"></slot>
    <slot v-else name="imgleave"></slot>
    <slot name="span"></slot>
  </div>
</template>
<script>
export default {
name: "tabbar-item",
  data(){
  return{
    isactive:false
  }
  },
  props:{
    path:String,
    colorset:{
      type:String,
      default:'red'
    }
  },
  methods:{
    toggle(){
      if(this.path!==this.$route.path)
      {
        this.$router.replace(this.path)
      }
    }
  },
  computed:{
    isactivechange(){
      //如果相等当前才isactive 是true
     return this.$route.path==this.path?true:false
    },
    isactivechangestyle(){
      return this.isactivechange?{color:this.colorset}:{}
    }
  }
}
</script>

<style scoped>
.tabbaritem{
  flex: 1;
  text-align: center;
}
.tabbaritem img {
  height: 20px;
  width: 20px;
  vertical-align: top;
}
</style>
