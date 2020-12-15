<template>
  <div class="goods">
    <div v-for="item in emitdata" class="item">
        <img v-lazy="item.image||item.show.img" @click="godetails(item)">
    </div>
  </div>
</template>
<script>
export default {
  name: "goodlist",
  props:{
    emitdata:Array
  },
  updated() {
    this.$nextTick(()=>{
      this.$emit('imgloaded')
    })
  },
  methods:{
    godetails(item) {
      if(item.iid) {
        this.$router.push(
          {
            path:'/detail',
            query:{
              iid:item.iid
            }
          }
        )
      }
      else {
      }
    }
  }

}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  padding-left: 0.1rem;
  padding-right: 0.1rem;
}
.item img{
  width: 9.8rem;
  height: 280px;
}
</style>
