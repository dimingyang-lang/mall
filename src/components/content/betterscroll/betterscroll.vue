<template>
<div ref="wrapper" class="wrapper">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
name: "betterscroll",
  data(){
  return {
    scroll:null
  }
  },
  props:{
    koko:{
      type:Number,
      default:0
    },
    koai:{
      type:Boolean,
      default:false
    },
  },
  mounted() {

    this.scroll=new BScroll(this.$refs.wrapper,{
      bounce: {
        top: false,
        bottom: true,
        left: true,
        right: true,
      },
      probeType:this.koko,
      pullUpLoad:this.koai,
      click:true
    })
    if (this.koko === 2 || this.koko === 3) {
      this.scroll.on('scroll',(position)=>{
        this.$emit('positionY',position.y)
      })
    }
    if (this.koai) {
      this.scroll.on('pullingUp',()=>{
        console.log(666);
        this.$emit('pullloadmore')
      })
    }
  }
}
</script>

<style scoped>
</style>
