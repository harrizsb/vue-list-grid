<script>
import Sidebar from "@/components/Sidebar.vue";
import List from "@/components/List.vue";

export default {
  components: {
    Sidebar,
    List,
  },
};
</script>

<template>
  <div class="users">
    <Sidebar></Sidebar>
    <List></List>
  </div>
</template>

<style scoped>
.users {
  display: flex;
  align-items: flex-start;
  align-content: center;
}
</style>