<template>
  <div class="profile">
    <navigator class="nav-bar">
      <div slot="center">商城</div>
    </navigator>
      <login />
      <money />
      <div class="line"></div>
      <profile-list />
  </div>
</template>

<script>
import navigator from "../navigator/navigator";
import Login from "../my/Login";
import Money from "../my/Money";
import profileList from "../my/profileList";
export default {
  name: "wod",
  components:{Login,Money, profileList,navigator}
}
</script>

<style scoped>

</style>
