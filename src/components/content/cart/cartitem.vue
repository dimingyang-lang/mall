<template>
    <div id="cartitem">
      <img src="~assets/img/tick.svg" class="default" :class="{tick:check}">
      <slot></slot>
    </div>
</template>

<script>
export default {
name: "cartitem",
  props:{
    check:{
      type:Boolean,
      default:false
    }
  }
}
</script>
<style scoped>
.tick{
  background-color: hotpink;
}
.default {
  border-radius: 50%;
  border: 1px solid gainsboro;
  width: 30px;
}
</style>
