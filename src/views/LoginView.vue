<script>
import { mapStores } from "pinia";
import { snackbarStore } from "../stores/snackbar";

export default {
  data() {
    return {
      username: null,
      password: null,
    };
  },

  computed: {
    ...mapStores(snackbarStore),
  },

  methods: {
    signIn() {
      if (this.username === "admin" && this.password === "1234") {
        this.$router.replace("/users");
      } else {
        this.snackbarStore.setMsg("Incorrect credential");
        this.snackbarStore.toggleSnackbar();
      }
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="login-view">
      <h3 class="uppercase text-center">sign in to your account</h3>
      <form>
        <input type="text" placeholder="Username" v-model="username" />
        <input type="password" placeholder="Password" v-model="password" />
        <label for="signedin" class="checkbox"
          ><input id="signedin" type="checkbox" /> Keep me signed in</label
        >
      </form>
      <button class="uppercase" type="submit" @click="signIn()">sign in</button>
    </div>
  </div>
</template>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  height: 100vh;
}

.login-view {
  width: 20%;
  display: block;
  margin: 0 auto;
}

input[type="text"],
input[type="password"] {
  margin-bottom: 1rem;
}

.checkbox {
  margin-bottom: 1.25rem;
}

@media only screen and (max-width: 425px) {
  .login-view {
    width: 100%;
  }
}
</style>