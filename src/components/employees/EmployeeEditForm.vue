<template>
  <div>
    <b-form-group @submit.prevent>
      <h4>Редактирование аккаунта</h4>
      <h4 style="margin-left: 90px;"> сотрудника </h4>

      <b-form-group>
        <b-form-input
          pill
          required
          v-model:position="employeeEdited.position"
          name="position"
          type="text"
          placeholder="Должность"
          style="margin-top: 30px"
          @blur="$v.employeeEdited.position.$touch()"
          :class="{ 'is-invalid' : $v.employeeEdited.position.$error }"
        />
        <div v-if="!$v.employeeEdited.position.$required" class="invalid-feedback">Это поле обязательно</div>
      </b-form-group>


      <b-form-group>
        <b-form-input
          pill
          required
          v-model:name.trim="employeeEdited.name"
          name="name"
          type="text"
          placeholder="Имя"
          @blur="$v.employeeEdited.name.$touch()"
          :class="{ 'is-invalid' : $v.employeeEdited.name.$error }"
        />
        <div v-if="!$v.employeeEdited.name.$required" class="invalid-feedback">Это поле обязательно</div>
      </b-form-group>

      <b-form-group>
        <b-form-input
          pill
          required
          v-model:surname.trim="employeeEdited.surname"
          name="surname"
          type="text"
          placeholder="Фамилия"
          @blur="$v.employeeEdited.surname.$touch()"
          :class="{ 'is-invalid' : $v.employeeEdited.surname.$error }"
        />
        <div v-if="!$v.employeeEdited.surname.$required" class="invalid-feedback">Это поле обязательно</div>
      </b-form-group>

      <b-form-group>
        <b-form-input
          pill
          required
          v-model:email="employeeEdited.email"
          name="email"
          type="email"
          placeholder="Email"
          @blur="$v.employeeEdited.email.$touch()"
          :class="{ 'is-invalid' : $v.employeeEdited.email.$error }"
        />
        <div v-if="!$v.employeeEdited.email.$email" class="invalid-feedback">Введите корректный email</div>
      </b-form-group>

      <b-form-group>
        <b-form-input
          pill
          required
          v-model:location="employeeEdited.location"
          name="location"
          type="text"
          placeholder="Локация"
          @blur="$v.employeeEdited.location.$touch()"
          :class="{ 'is-invalid' : $v.employeeEdited.location.$error }"
        />
        <div v-if="!$v.employeeEdited.location.$required" class="invalid-feedback">Это поле обязательно</div>
      </b-form-group>

      <b-button
        pill
        class="btn"
        type="submit"
        style="background: #FF6347; color: #E9E9E9; width: 300px"
        @click="editEmployee"
        :disabled="
        $v.employeeEdited.position.$invalid
         ||
        $v.employeeEdited.email.$invalid
         ||
        $v.employeeEdited.name.$invalid
         ||
        $v.employeeEdited.surname.$invalid
         ||
        $v.employeeEdited.location.$invalid"
      >
        Сохранить
      </b-button>

    </b-form-group>
  </div>
</template>

<script>

import {validationMixin} from 'vuelidate';
import {required, email} from 'vuelidate/lib/validators'

export default {
  name: "employee-edit-form",
  mixins: [validationMixin],
  props: {
    employee: {
      position: String,
      name: String,
      surname: String,
      email: String,
      location: String
    }
  },
  data() {
    return {

      employee: {
        position: this.employee.position,
        name: this.employee.name,
        surname: this.employee.surname,
        email: this.employee.email,
        location: this.employee.location
      },

      employeeEdited: {
        position: this.employee.position,
        name: this.employee.name,
        surname: this.employee.surname,
        email: this.employee.email,
        location: this.employee.location
      }
    }
  },
  validations: {
    employeeEdited: {
      position: {required},
      name: {required},
      surname: {required},
      email: {required, email},
      location: {required}
    }
  },
  methods: {
    editEmployee() {
      this.employee.position = this.employeeEdited.position
      this.employee.name = this.employeeEdited.name
      this.employee.surname = this.employeeEdited.surname
      this.employee.email = this.employeeEdited.email
      this.employee.location = this.employeeEdited.location
      this.$emit('edit', this.employee)
    },
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}
</style>
