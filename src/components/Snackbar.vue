<script>
import { mapStores } from "pinia";
import { snackbarStore } from "../stores/snackbar";

export default {
  computed: {
    ...mapStores(snackbarStore),
    show() {
      return this.snackbarStore.show;
    },
    msg() {
      return this.snackbarStore.msg;
    },
  },

  watch: {
    show(val) {
      if (val) {
        console.log(val);
        setTimeout(() => {
          this.snackbarStore.toggleSnackbar();
        }, 3 * 1000);
      }
    },
  },
};
</script>

<template>
  <div v-if="show">
    <div class="snackbar" :class="{ show: show }">{{ msg }}</div>
  </div>
</template>

<style scoped>
.snackbar {
  visibility: hidden;
  min-width: 15.62rem;
  margin-left: -7.81;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 0.125rem;
  padding: 1rem;
  position: fixed;
  z-index: 1;
  left: 40.2%;
  bottom: 1.875rem;
}

.snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 1.875rem;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 1.875rem;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 1.875rem;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 1.875rem;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@media only screen and (max-width: 26.563rem) {
  .snackbar {
    left: 15%;
  }
}
</style>