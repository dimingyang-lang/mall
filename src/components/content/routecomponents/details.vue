<template>
   <div id="details">
     <detailsnavbar class="navbar" @toposition="toposition" ref="navbar"></detailsnavbar>
     <betterscroll class="content" ref="scroll" :koko="3" @positionY="positionY">
       <detailsswiper :banners="banners"></detailsswiper>
       <details-base-info :goods="goods"></details-base-info>
       <details-shop-info :shop="shop"></details-shop-info>
       <details-good-info :detail-info="detailInfo" @imageLoad="imgloaded"></details-good-info>
       <detail-param-info :param-info="itemParams" ref="param"></detail-param-info>
       <detail-comment-info :comment-info="commentInfo" ref="comment"/>
       <goodlist :emitdata="recommendList" @imgloaded="imgloaded" ref="goodlist"></goodlist>
     </betterscroll>
     <clicktotop @click.native="backtotop(300)" :style="show(2000)"></clicktotop>
     <bottombar></bottombar>
<!--     <middleshow ref="middleshow"></middleshow>-->
   </div>
</template>

<script>
import detailsnavbar from "../details/detailsnavbar";
import  {getDetail,getRecommend,Goods,Shop} from 'network/details/detail';
import detailsswiper from "../../common/detailsswiper";
import detailsBaseInfo from "../details/detailsBaseInfo";
import detailsShopInfo from "../details/DetailShopInfo";
import betterscroll from "../betterscroll/betterscroll";
import detailsGoodInfo from "../details/detailsGoodInfo";
import detailParamInfo from "../details/detailParamInfo";
import detailCommentInfo from "../details/detailCommentInfo";
import goodlist from "../goods/goodlist";
import bottombar from "../details/bottombar";
import { backtotop } from '../details/minix'
import middleshow from "../details/middleshow";
import recommon from "../details/recommon";
export default {
  name: "detail",
  data() {
    return {
      banners:[],
      goods:{},
      shop:{},
      detailInfo:{},
      itemParams:{},
      iid:null,
      commentInfo: {},
      recommendList: [],
      Y:{
        shopping:0,
        canshu:0,
        comment:0,
        goodlist:0
      },
      num:0,
      betterscrollY:0,
      showorhidden:false
    }
  },
  mixins:[backtotop],
  components:{
    detailsnavbar,
    detailsswiper,
    detailsBaseInfo,
    detailsShopInfo,
    betterscroll,
    detailsGoodInfo,
    detailParamInfo,
    detailCommentInfo,
    goodlist,
    bottombar,
  },
  created() {
    this.iid = this.$route.query.iid;
    getDetail(this.iid).then(res => {
      const data = res.result
      this.banners = res.result.itemInfo.topImages
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.itemParams = data.itemParams
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0] || {};
      }
    })
    getRecommend().then(res=> {
      if(res.data.list) {
        this.recommendList=res.data.list
      }
    })
  },
  computed:{
  },
  methods: {
    imgloaded(){
      this.$refs.scroll.scroll.refresh()
      this.Y.canshu=this.$refs.param.$el.offsetTop;
      this.Y.comment=this.$refs.comment.$el.offsetTop;
      this.Y.goodlist=this.$refs.goodlist.$el.offsetTop;
    },
    toposition(i){
      switch (i) {
        case 0:
        this.$refs.scroll.scroll.scrollTo(0,0)
              break
        case 1:
        this.$refs.scroll.scroll.scrollTo(0,-this.Y.canshu,200)
              break
        case 2:
        this.$refs.scroll.scroll.scrollTo(0,-this.Y.comment,200)
              break
        case 3:
         this.$refs.scroll.scroll.scrollTo(0,-this.Y.goodlist,200)
              break
      }
    },
//0- canshu -comment-goodlist
    //0
    positionY(y) {
      this.betterscrollY=y
      if(y>=-this.Y.canshu) {
        this.$refs.navbar.index=0
      }
     else if(y>=-this.Y.comment) {
        this.$refs.navbar.index=1
      }
      else if(y>=-this.Y.goodlist) {
        this.$refs.navbar.index=2
      }
      else
        this.$refs.navbar.index=3
    },
  }
}
</script>

<style scoped>
#details {
  position: relative;
  z-index: 10;
  background-color: white;
}
.navbar {
  position: relative;
  z-index: 12;
  background-color:white;
}
.content {
  height: calc(100vh - 44px - 49px);
  overflow: hidden;
}
</style>
