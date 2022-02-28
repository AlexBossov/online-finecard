<template>
  <b-form-group @submit.prevent="createLocation">
    <h4>Добавление локации </h4>

    <b-form-group>
      <b-form-input
        pill
        required
        v-model:name.trim="location.name"
        name="name"
        type="text"
        placeholder="Название"
        style="margin-top: 30px"
        @blur="$v.location.name.$touch()"
        :class="{ 'is-invalid' : $v.location.name.$error }"
      />
      <div v-if="!$v.location.name.$required" class="invalid-feedback">Это поле обязательно</div>
    </b-form-group>

    <b-form-group>
      <b-form-input
        pill
        required
        v-model:surname.trim="location.address"
        name="address"
        type="text"
        placeholder="Адрес"
        @blur="$v.location.address.$touch()"
        :class="{ 'is-invalid' : $v.location.address.$error }"
      />
      <div v-if="!$v.location.address.$required" class="invalid-feedback">Это поле обязательно</div>
    </b-form-group>

    <b-form-group>
      <b-button
        pill
        class="btn"
        type="submit"
        style="background: #FF6347; color: #E9E9E9; width: 250px;"
        @click="createLocation"
        :disabled=" $v.location.name.$invalid || $v.location.address.$invalid"
      >
        Добавить локацию
      </b-button>
    </b-form-group>
  </b-form-group>
</template>

<script>

import  { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators'

export default {
  name: "location-create-form",
  mixins: [validationMixin],
  data() {
    return {
      location: {
        name: "",
        address: ""
      }
    }
  },
  validations: {
    location : {
      name: { required },
      address: { required }
    }
  },
  methods: {
    createLocation() {
      this.$emit('create', this.location)
    }
  }
}
</script>

<style scoped>
b-form-group {
  display: flex;
  flex-direction: column;
}
b-input {
  margin-top: 5px;
  padding-top: 5px;
}
b-form-input {
  border-radius: 5px;
}
</style>
