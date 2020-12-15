<template>
    <div class="recommend">
      <div v-for="item in recommend" class="recommend-item">
        <a :href="item.link">
          <img v-lazy="item.image" @load="recommonloaded">
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  name: "recommond",
  data(){
    return {
      cursor:false
    }
  },
  props:{
    recommend:Array
  },
  methods:{
    recommonloaded() {
      if(this.cursor!=true) {
        this.$emit("recommonloaded",true)
        this.cursor=true
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  padding: 10px 0 20px;
  border-bottom: #eee 7px solid;
  overflow: hidden;
}
.recommend-item {
  float: left;
  text-align: center;
  font-size: 14px;
}
.recommend-item img {
  width: 5rem;
  height: auto;
}
</style>
