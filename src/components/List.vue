<script>
import { mapStores } from "pinia";
import { modalStore } from "../stores/modal";
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },

  computed: {
    ...mapStores(modalStore),
  },

  data() {
    return {
      list: [],
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      const req = fetch("https://mock.follow.it/profiles.json");

      req.then((val) => {
        val.json().then((res) => {
          this.list = res;
        });
      });
    },

    triggerModal(data) {
      this.modalStore.setData({
        picture: data.image,
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.address.city,
        street: data.address.street,
        website: data.website,
      });
      this.modalStore.toggleModal();
    },
  },
};
</script>


<template>
  <div class="list">
    <Modal />
    <h2 class="uppercase">users</h2>
    <div class="list-grid">
      <div class="list-grid-item" v-for="data in list" :key="data.id">
        <img :src="data.image" />
        <div class="list-grid-item-detail" @click="triggerModal(data)">
          <span class="list-grid-item-detail-icon">&#9993;</span>

          <p class="name">{{ data.name }}</p>
          <p class="city">{{ data.address.city }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  margin: 1.563px 0.625px;
}

h2 {
  text-align: right;
  text-decoration: underline;
}

.list-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-columns: 12.5rem;
  gap: 3.125rem;
}

.list-grid-item {
  position: relative;
}

.list-grid-item-detail {
  width: 0;
  height: 0;
  visibility: hidden;
}

.list-grid-item:hover .list-grid-item-detail {
  width: 100%;
  height: 100%;
  visibility: visible;
  cursor: pointer;
}

.list-grid-item-detail {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #33333380;
  border-radius: 0.313rem;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.list-grid-item-detail-icon {
  position: absolute;
  top: 0;
  right: 2.5rem;
  font-size: 4.375rem;
}

.name {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.city {
  font-size: 1.35rem;
}

img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  border-radius: 0.313px;
}

@media only screen and (max-width: 26.563rem) {
  .list-grid {
    gap: 0.625rem;
  }

  .list-grid-item-detail-icon {
    position: absolute;
    top: 0;
    right: 0.3rem;
    font-size: 1.5rem;
  }

  .name {
    font-weight: bold;
    font-size: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .city {
    font-size: 0.45rem;
  }
}
</style>