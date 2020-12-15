<template>
  <div v-show="show" class="show">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "middleshow",
  data() {
    return {
      message:'商品+1',
      show:false,
      timer:parseInt(0)
    }
  },
  watch:{
  },
  computed:{
  },
  methods:{
    changeshow(mes='商品+1'){
      this.message=mes
      if (this.timer!=0){
        clearTimeout(this.timer)
      }
        this.show=true
        this.timer=setTimeout(()=>{
        this.show=false
        this.timer=0
        },3000)
    }
  }
}
</script>

<style scoped>
.show {
  position: fixed;
  width: 90px;
  height: 25px;
  background-color: rgba(100,100,100,.5);
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 10;
  color: white;
  font-size: 14px;
  text-align: center;
  line-height: 25px;
  border-radius: 10px;
}
</style>
