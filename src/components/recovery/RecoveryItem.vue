<template>
  <b-card pill bg-variant="light" class="form" align="center" style="border-radius: 25px">
    <b-form-group>

      <b-form-group>
        <p style="font-size: 24px; margin-top: 50px">Восстановление пароля</p>
      </b-form-group>

      <b-form-group>
        <p style="
        font-size: 16px;
         color: gray;
         margin-left: 20px;
         margin-right: 20px"
        >
          Введите ваш e-mail, и мы отправим вам новый пароль.
        </p>
      </b-form-group>

      <b-form-group style="width: 296px; margin-left: 32px">
        <b-form-input
          id="email"
          placeholder="Email"
          @blur="$v.email.$touch()"
          :class="{ 'is-invalid' : $v.email.$error }"
        />
        <div v-if="!$v.email.$email" class="invalid-feedback">Введите корректный email</div>
      </b-form-group>

      <b-form-group>
        <b-button pill class="btn">Отправить</b-button>
      </b-form-group>

      <b-form-group style="margin-top: 130px">
        <button
          style="color: steelblue;border: none;background-color: inherit;"
          v-on:click="$emit('changeForm', 'login')"
        >
          Вернуться ко входу
        </button>
      </b-form-group>

    </b-form-group>
  </b-card>
</template>

<script>
import {validationMixin} from 'vuelidate';
import {required, email} from 'vuelidate/lib/validators'

export default {
  name: "recovery-item",
  mixins: [validationMixin],
  data() {
    return {
      email: ""
    }
  },
  validations: {
    email: {required, email}
  },
  methods: {
    // TODO: function with axios request for password
  }
}
</script>

<style>
.btn {
  background-color: #FF6347;
}

.form {
  user-select: none;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsl(218deg 50% 91%);
  height: 500px;
  width: 400px;
}
</style>
