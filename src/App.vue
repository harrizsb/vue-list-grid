<script>
import { RouterView } from "vue-router";
import Snackbar from "@/components/Snackbar.vue";

export default {
  components: {
    RouterView,
    Snackbar,
  },
};
</script>

<template>
  <router-view></router-view>

  <Snackbar></Snackbar>
</template>

<style>
@import "@/assets/base.css";
</style>
