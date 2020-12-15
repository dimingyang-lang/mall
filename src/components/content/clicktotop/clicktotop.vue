<template>
 <div class="clicktotop">
   <img src="~assets/img/top.png">
 </div>
</template>

<script>
export default {
  name: "clicktotop"
}
</script>

<style scoped>
  .clicktotop {
    display: none;
    position: fixed;
    right: 0;
    bottom: 4rem;
    z-index: 9
  }
  .clicktotop img {
    width: 4rem;
    height: 4rem;
  }
</style>
