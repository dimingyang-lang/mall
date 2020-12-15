<template>
 <div class="feature">
   <div class="feature-item" v-for="(item,index) in features" @click="clickcolor(index)">
     <span :class="{'feature-item-active':index===Index}">{{item}}</span>
   </div>
 </div>
</template>

<script>
export default {
  name: "feature",
  data(){
    return {
      Index:0
    }
  },
  props:{
    features:Array
  },
  methods:{
    clickcolor(index) {
      this.Index=index
      this.$emit('emittype',index)
    }
  }
}
</script>

<style scoped>
.feature {
  display: flex;
  height: 44px;
  line-height: 44px;
  top: 44px;
  background-color: white;
  width: 20rem;
  font-size: 15px;
}
.feature-item {
  flex: 1;
  text-align: center;
}
.feature-item span {
  padding: 5px;
}
.feature-item-active {
  border-bottom: #ff8198 3px solid;
}
</style>
