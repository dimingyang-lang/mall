import clicktotop from "../clicktotop/clicktotop";
export const backtotop={
  methods:{
    backtotop(i) {
      (this.$refs.betterscroll || this.$refs.scroll).scroll.scrollTo(0,0,i)
    },
    show(i) {
      return Math.abs(this.betterscrollY)>i?{display: "block"}:""
    },
  },
  components:{
    clicktotop
  }
}
