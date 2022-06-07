import { defineStore } from "pinia";

export const modalStore = defineStore({
  id: "modal",
  state: () => ({
    show: false,
    data: {
      picture: "",
      name: "",
      email: "",
      phone: "",
      city: "",
      street: "",
      website: "",
    },
  }),
  actions: {
    toggleModal() {
      this.show = !this.show;
    },
    setData(data) {
      this.data = data;
    },
  },
});
