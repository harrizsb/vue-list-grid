<script>
export default {
  methods: {
    logout() {
      this.$router.replace("/login");
    },
  },
};
</script>

<template>
  <div class="sidebar">
    <h4>logoipsum</h4>

    <ul>
      <li v-for="item in 3" :key="item" class="uppercase text-center">
        menu element
      </li>
    </ul>

    <p class="bottom-sidebar" @click="logout()">Admin</p>
  </div>
</template>

<style scoped>
.sidebar {
  min-width: 12.5rem;
  min-height: 100vh;
  position: relative;
  background-color: #fbfbfb;
  padding: 1rem;
  box-sizing: border-box;
}

ul {
  padding-inline-start: 0rem;
}

ul li {
  list-style: none;
  border-top: 0.125rem solid #333;
  border-bottom: 0.125rem solid #333;
  margin-bottom: 1.25rem;
  padding: 0.625rem 0;
  width: 100%;
  font-weight: bold;
}

.bottom-sidebar {
  position: absolute;
  bottom: 0;
  cursor: pointer;
}

@media only screen and (max-width: 425px) {
  .sidebar {
    min-width: 6.25rem;
    padding: 0.25rem;
  }

  ul li {
    font-size: 0.75rem;
  }
}
</style>