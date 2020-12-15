<template>
  <div class="swiper" @touchstart="touchstart" @touchend="touchend">
    <div class="leftslide" @click="leftslidebutton"><img src="~assets/img/leftbutton.png"></div>
    <div class="rightslide" @click="rightslidebutton"><img src="~assets/img/rightbutton.png"></div>
    <div class="swiper-wrape" :style="[wrapelength,slidelength,B]">
      <div class="swiper-slide" v-for="item in bannerone">
        <a :href="item.link">
          <img v-lazy="item.image">
        </a>
      </div>
      <div class="swiper-slide" v-for="item in banners">
        <a :href="item.link">
          <img v-lazy="item.image"  @load="imgloaded">
        </a>
      </div>
      <div class="swiper-slide" v-for="item in banner">
        <a :href="item.link">
          <img v-lazy="item.image">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data(){return {
    count:1,
    A:"",
    B:{},
    C:{},
    D:{},
    E:{},
    startX:0,
    endX:0,
    moveX:0,
    screenWidth: document.body.clientWidth,
    istrue:true,
    cursor:false,
    banner:[],
    bannerone:[],
  }},
  props:{
    banners:Array,
    jp:Array
    // banner:Array,
    // bannerone:Array
  },
  watch:{
    banners:function () {
      this.banner=this.banners.slice(0,1)
      this.bannerone=this.banners.slice(this.banners.length-1,this.banners.length)//[0,1,2,3]
    },
    jp:function () {
      console.log(this.jp)
    }
  },
  methods:{
    imgloaded() {
      if(this.cursor!=true) {
        this.$emit('imgloaded',true)
        this.cursor=true
      }
    },
    leftslidebutton(){
      this.istrue?(this.count++,console.log(this.count)):""
    },
    rightslidebutton(){
      this.istrue?(this.count--,console.log(this.count)):""
    },
    touchstart(e){
      clearInterval(this.A)
      this.startX=e.targetTouches[0].clientX
    },
    touchend(e){
      this.endX=e.changedTouches[0].clientX
      this.moveX=this.endX - this.startX
      this.istrue?(this.isLeftOrRight()):""
      this.newInterval()
    },
    isLeftOrRight(){
      if (Math.abs(this.moveX)>this.screenWidth/3) {
        if (this.moveX>0) {
          this.count--
        }
        else this.count++
      }
    },
    newInterval(){
      this.A=setInterval(()=>{
        this.count++
      },2000)
    },
  },
  created() {
    this.newInterval()
  },
  computed:{
    wrapelength(){
      return {
        width:(this.banners.length+2)*20+'rem',
      }
    },
    slidelength(){
      if(this.count==0) {
        this.istrue=false
        this.B={
          transform: "translateX(" + (-20 * this.count) + "rem)",
          transition:"transform 0.8s"
        }
        this.E= setTimeout(()=>{
          this.istrue=true
          this.count=this.banners.length
          setTimeout(()=>{
            this.B={
              transform: "translateX(" + (-20 * this.count) + "rem)",
              transition:"none",
            }
          })
        },800)
        // this.count=4
        // this.B={
        //   transform: "translateX(" + (-20 * this.count) + "rem)",
        //   transition:"transform 0s"
        // }
        // clearTimeout(this.C)
        // this.C=setTimeout(()=>{
        //   this.count--
        //   this.B={
        //     transform: "translateX(" + (-20 * this.count) + "rem)",
        //     transition:"transform 0.8s"
        //   }
        // },10)
      }
      else if(this.count==this.banners.length+1) {//6 1
        this.istrue=false
        this.B={
          transform: "translateX(" + (-20 * this.count) + "rem)",
          transition:"transform 0.8s"
        }
        setTimeout(()=>{
          this.istrue=true
          this.count=1
          setTimeout(()=>{
            this.B={
              transform: "translateX(" + (-20 * this.count) + "rem)",
              transition:"none",
            }
          })
        },800)

        // clearTimeout(this.D)
        // this.D=setTimeout(()=>{
        //   this.count++
        //   this.B={
        //     transform: "translateX(" + (-20 * this.count) + "rem)",
        //     transition:"transform 0.8s"
        //   }
        // },100)
      }
      else {
        this.B={
          transform: "translateX(" + (-20 * this.count) + "rem)",
          transition:"transform 0.8s"
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper {
  width: 20rem;
  height: 200px;
  position: relative;
  overflow: hidden;
  margin-top: 44px;
}
.leftslide {
  position: absolute;
  left: 0;
  top: 43%;
  z-index: 1;
}
.leftslide>img,.rightslide>img{
  width: 20px;
  height: auto;
}
.rightslide {
  z-index: 1;
  position: absolute;
  right: 0;
  top: 50%;
}
.swiper-wrape {
  float: left;
}
.swiper-slide {
  float: left;
}
.swiper-slide img{
  width: 20rem;
  height: 200px;
}
</style>
