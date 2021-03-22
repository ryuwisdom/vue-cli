<template>
  <v-app>
    <v-content>
      <User/>
    </v-content>
  </v-app>
</template>

<script>
import User from "./components/User"
// import SlotComponent from "./Slot.vue"

export default {
  name: "App",
  components: {
    User
  }
}
</script>

<style>
html {
  padding: 30px;
}
</style>
