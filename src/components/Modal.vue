<script>
import { mapStores } from "pinia";
import { modalStore } from "../stores/modal";

export default {
  methods: {
    dismiss() {
      this.modalStore.toggleModal();
    },
  },

  computed: {
    ...mapStores(modalStore),
    showModal() {
      return this.modalStore.show;
    },
    modalData() {
      return this.modalStore.data;
    },
  },

  watch: {
    showModal(currentVal) {
      if (currentVal) {
        const modal = this.$refs.modal;
        const toggleModal = this.modalStore.toggleModal;
        window.onclick = function (event) {
          if (event.target == modal) {
            toggleModal();
          }
        };
      }
    },
  },
};
</script>

<template>
  <div
    ref="modal"
    class="modal"
    :style="[showModal ? { display: 'block' } : { display: 'none' }]"
  >
    <div class="modal-content">
      <span class="close" @click="dismiss()">&times;</span>
      <div class="modal-content-inner">
        <img :src="modalData.picture" />
        <div class="modal-content-inner-data">
          <p>{{ modalData.name }}</p>
          <p>{{ modalData.email }}</p>
          <p>{{ modalData.phone }}</p>
          <p>{{ modalData.street }}, {{ modalData.city }}</p>
          <p>{{ modalData.website }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
}

.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  border: 1px solid #888;
  border-radius: 0.313rem;
  width: 50%; /* Could be more or less, depending on screen size */
}

.modal-content-inner {
  display: grid;
  grid-template-columns: 20vw 25vw;
  direction: ltr;
}

.modal-content-inner-data {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.25rem;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 1.75rem;
  font-weight: bold;
  padding-right: 1.563rem;
  padding-top: 0.938rem;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 26.563) {
  .modal-content {
    width: 65%;
  }
}
</style>