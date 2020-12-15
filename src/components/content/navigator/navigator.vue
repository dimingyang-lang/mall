<template>
<div id="nav-bar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  name: "navigator",
  props:{
    bac:String,
  },
  methods:{
  }
}
</script>

<style scoped>
  #nav-bar {
    width: 20rem;
    display:flex;
    height: 44px;
    line-height: 44px;
    background-color: #FFC0D6;
  }

  #nav-bar div{
    flex: 2;
  }
  #nav-bar div:nth-child(2){
    flex: 10;
  }
  .center {
    text-align: center;
  }
</style>
