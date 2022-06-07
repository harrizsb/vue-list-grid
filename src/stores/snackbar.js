import { defineStore } from "pinia";

export const snackbarStore = defineStore({
  id: "snackbar",
  state: () => ({
    show: false,
    msg: `Something went wrong`,
  }),
  actions: {
    toggleSnackbar() {
      this.show = !this.show;
    },
    setMsg(msg) {
      this.msg = msg;
    },
  },
});
