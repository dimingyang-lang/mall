<template>
  <div class="goods">
    <div v-for="item in emitdata" class="item">
      <img v-lazy="item.image">
    </div>
  </div>
</template>

<script>
export default {
  name: "recommon",
  props:{
    emitdata:Array
  },
  mounted() {

  },
  updated() {
    this.$nextTick(()=>{
      this.$emit('imgloaded')
    })
  },
  methods:{
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
