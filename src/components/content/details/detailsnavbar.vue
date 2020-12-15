<template>
  <navigator>
    <span slot="left" class="left" @click="clickback"><</span>
    <div slot="center" class="center">
      <span v-for="(item,index) in list" class="item" @click="colorchange(index)" :class="{fontcolor:index==clicksetcolor}">{{item}}</span>
    </div>
  </navigator>
</template>

<script>
import navigator from "../navigator/navigator";
export default {
  name: "detailsnavbar",
  data() {
    return {
      list:['商品','参数','评论','推荐'],
      index:0
    }
  },
  methods:{
    colorchange(i) {
      this.index=i
      this.$emit("toposition",i)
    },
    clickback() {
      this.$router.back()
    }
  },
  computed:{
    clicksetcolor() {
      return this.index
    }
  },
  components:{
    navigator
  }
}
</script>

<style scoped>
.left {
  position: relative;
  left: 10px;
  font-size: 30px;
}
.center {
  display: flex;
  justify-content: center;
  font-size: .9rem;
  color: white;
}
.item {
  flex: 1;
  font-size: 16px;
}
.fontcolor {
  color: #ff8198;
}
</style>
