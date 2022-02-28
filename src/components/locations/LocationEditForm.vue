<template>
  <div>
    <form @submit.prevent>
      <h4>Редактирование локации</h4>

      <b-input
        required
        v-model:name="location.name"
        name="name"
        type="text"
        placeholder="Название"
      >
      </b-input>

      <b-input
        required
        v-model:name="location.address"
        name="address"
        type="text"
        placeholder="Адрес"
      />

      <b-button
        class="btn"
        type="submit"
        @click="editLocation"
      >
        Сохранить
      </b-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "location-edit-form",
  props: {
    location: {
      id: Number,
      name: String,
      address: String
    }
  },
  data() {
    return {
      location: {
        id: this.location.id,
        name: this.location.name,
        address: this.location.address
      }
    }
  },
  methods: {
    editLocation() {
      this.$emit('edit', this.employee)
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
