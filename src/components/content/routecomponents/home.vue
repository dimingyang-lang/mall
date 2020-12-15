<template>
  <div>
    <navbar class="navbar" bac="#FFC0CB">
      <div slot="center" class="center">
        购物街
      </div>
    </navbar>
    <feature :features="features" @emittype="emittype" ref="featureone" v-show="getresult" class="featureone"></feature>
    <betterscroll class="scroll" @positionY="getpositionY" :koko="2" :koai="true" ref="betterscroll" @pullloadmore="pullloadmore">
    <swiper :banners="banners" @imgloaded="imgloadedreact"></swiper>
    <recommond :recommend="recommend" @recommonloaded="recommonloaded"></recommond>
    <div class="recommend_bg">
      <a href="">
        <img src="~assets/img/recommend_bg.jpg">
      </a>
    </div>
    <feature :features="features" @emittype="emittype" ref="feature"></feature>
    <goodlist :emitdata="emitdata" @imgloaded="imgloaded"></goodlist>
    </betterscroll>
    <clicktotop @click.native="backtotop(300)" :style="show(2000)"></clicktotop>
  </div>
</template>

<script>
import {homeheadone,goods} from 'network/homerequest/homehead.js'
import navbar from "../navigator/navigator"
import swiper from "../../common/swiper";
import recommond from "../home/recommond";
import feature from "../ Feature/feature";
import goodlist from "../goods/goodlist";
import betterscroll from "../betterscroll/betterscroll";
import {backtotop} from '../details/minix'
export default {
  data(){
    return {
      recommend:[],
      banners:[],
      // banner:[],
      // bannerone:[],
      features:['流行','最新','最火'],
      pop:{
        pop:[],
        page:1
      },
      new:{
        new:[],
        page:1
      },
      sell:{
        sell:[],
        page:1
      },
      currenttype:'',
      type:0,
      betterscrollY:0,
      res:{
        data:{}
      },
      goodres:{
        data:{}
    },
      swiperimg:false,
      recommonimg:false,
      featuresheight:0,
      positionY:0
    }
  },
  mixins:[backtotop],
  components:{
    navbar,
    swiper,
    recommond,
    feature,
    goodlist,
    betterscroll
  },
  created() {
    this.homeheadone(),
    this.goods("sell",1)
    this.goods('new',1)
    this.goods('pop',1)
  },
  methods:{
    homeheadone(){
      homeheadone().then(res=> {
        this.res=res
        this.banners=this.res.data.banner.list;
        this.recommend=res.data.recommend.list;
      })
    },
    goods(type,page){
      goods({
        type:type,
        page:page
      }).then(res=>{
        this.goodres=res
        if (this.goodres.data) {
          this[type][type].push(...this.goodres.data.list)
          this[type].page+=1
          this.$refs.betterscroll.scroll.finishPullUp()
        }
      })
    },
    emittype(type) {
      this.type=type
      this.$refs.featureone.Index=type
      this.$refs.feature.Index=type
    },
    getpositionY(y) {
      this.betterscrollY=y
    },
    pullloadmore() {
      this.goods(this.currenttype,this[this.currenttype].page);
      console.log(666);
    },
    imgloaded(){
      this.$refs.betterscroll.scroll.refresh()
    },
    imgloadedreact(arg) {
      this.swiperimg=arg
    },
    recommonloaded(arg) {
      this.recommonimg=arg
    },
  },
  computed:{
    emitdata() {
      switch (this.type) {
        case 0:
          this.currenttype='pop'
          return this.pop.pop
          break
        case 1:
          this.currenttype='new'
          return this.new.new
          break
        case 2:
          this.currenttype='sell'
          return this.sell.sell
          break
      }
    },
    getresult(){
      if(this.recommonimg && this.swiperimg) {
        return Math.abs(this.betterscrollY)>=Math.abs(this.$refs.feature.$el.offsetTop)?true:false
      }
    },
  },
  deactivated() {
    this.positionY=this.$refs.betterscroll.scroll.y;
    console.log(this.$el)
  },
  activated() {
    this.$refs.betterscroll.scroll.refresh()
    // console.log(this.$refs.betterscroll.scroll.scrollerHeight);
    this.$refs.betterscroll.scroll.scrollTo(0,this.positionY,0)
  },
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top:0;
  width: 100%;
  z-index: 10;
}
.recommend_bg img{
  width: 100%;
  height: auto;
}
.scroll {
  height: calc(100vh - 93px);
}
.featureone {
  position: fixed;
  z-index: 3;
  top:44px;
}
.center {
  color: white;
  font-size: .9rem
}

</style>

