<template>
  <b-form-group @submit.prevent="createEmployee">
    <h4>Добавление аккаунта сотрудника </h4>

    <b-form-group>
      <b-form-input
        pill
        required
        v-model:position.trim="employee.position"
        name="position"
        type="text"
        placeholder="Должность"
        style="margin-top: 30px"
        @blur="$v.employee.position.$touch()"
        :class="{ 'is-invalid' : $v.employee.position.$error }"
      />
      <div v-if="!$v.employee.position.$required" class="invalid-feedback">Это поле обязательно</div>
    </b-form-group>
    <b-form-group>
      <b-form-input
        pill
        required
        v-model:name.trim="employee.name"
        name="name"
        type="text"
        placeholder="Имя"
        @blur="$v.employee.name.$touch()"
        :class="{ 'is-invalid' : $v.employee.name.$error }"
      />
      <div v-if="!$v.employee.name.$required" class="invalid-feedback">Это поле обязательно</div>
    </b-form-group>

    <b-form-group>
      <b-form-input
        pill
        required
        v-model:surname.trim="employee.surname"
        name="surname"
        type="text"
        placeholder="Фамилия"
        @blur="$v.employee.surname.$touch()"
        :class="{ 'is-invalid' : $v.employee.surname.$error }"
      />
      <div v-if="!$v.employee.surname.$required" class="invalid-feedback">Это поле обязательно</div>
    </b-form-group>

    <b-form-group>
      <b-form-input
        pill
        required
        v-model:email="employee.email"
        name="email"
        type="email"
        placeholder="Email"
        @blur="$v.employee.email.$touch()"
        :class="{ 'is-invalid' : $v.employee.email.$error }"
      />
      <div v-if="!$v.employee.email.$email" class="invalid-feedback">Введите корректный email</div>
    </b-form-group>

    <b-form-group>
      <b-form-input
        pill
        required
        v-model:location="employee.location"
        name="location"
        type="text"
        placeholder="Локация"
        @blur="$v.employee.location.$touch()"
        :class="{ 'is-invalid' : $v.employee.location.$error }"
      />
      <div v-if="!$v.employee.location.$required" class="invalid-feedback">Это поле обязательно</div>
    </b-form-group>

    <b-form-group>
      <b-button
        pill
        class="btn"
        type="submit"
        style="background: #FF6347; color: #E9E9E9; margin-top: 20px; width: 400px"
        @click="createEmployee"
        :disabled="
        $v.employee.position.$invalid
         ||
        $v.employee.email.$invalid
         ||
        $v.employee.name.$invalid
         ||
        $v.employee.surname.$invalid
         ||
        $v.employee.location.$invalid"
      >
        Добавить сотрудника
      </b-button>
    </b-form-group>
  </b-form-group>
</template>

<script>
import {validationMixin} from 'vuelidate';
import {required, email} from 'vuelidate/lib/validators'

export default ({
  name: "employee-create-form",
  mixins: [validationMixin],
  data() {
    return {
      employee: {
        id: '',
        position: '',
        name: '',
        surname: '',
        email: '',
        location: ''
      },
      counter: 4
    }
  },
  validations: {
    employee: {
      position: {required},
      name: {required},
      surname: {required},
      email: {required, email},
      location: {required}
    }
  },
  methods: {
    createEmployee() {
      this.$emit('create', this.employee)
      this.employee = {
        id: '',
        position: '',
        name: '',
        surname: '',
        email: '',
        location: ''
      }
    }
  }
})
</script>

<style>
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
