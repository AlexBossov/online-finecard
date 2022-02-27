<template>
  <div>
    <b-card pill bg-variant="light" class="form" align="center" style="border-radius: 25px">
      <b-form-group>

        <b-form-group>
          <p style="font-size: 24px; margin-top: 30px">Регстрация</p>
        </b-form-group>

        <b-form-group style="width: 296px; margin-left: 32px">
          <b-form-input
            id="email"
            placeholder="Email"
            v-model="email"
            @blur="$v.email.$touch()"
            :class="{ 'is-invalid' : $v.email.$error }"
          />
          <div v-if="!$v.email.$email" class="invalid-feedback">Введите корректный email</div>
        </b-form-group>

        <b-form-group style="width: 296px; margin-left: 32px">
          <b-form-input
            id="email"
            placeholder="Номер телефона"
            v-model="phoneNumber"
            @blur="$v.phoneNumber.$touch()"
            :class="{ 'is-invalid' : $v.phoneNumber.$error }"
          />
          <div v-if="!$v.phoneNumber.$required" class="invalid-feedback">Номер телефона обязателен</div>
          <div v-if="!$v.phoneNumber.$minLength" class="invalid-feedback">Введите корректный номер</div>
        </b-form-group>

        <b-form-group style="width: 296px; margin-left: 32px">
          <b-form-input
            id="password"
            placeholder="Пароль"
            v-model="password"
            @blur="$v.password.$touch()"
            :class="{ 'is-invalid' : $v.password.$error }"
          />
          <div v-if="!$v.password.$minLength" class="invalid-feedback">Пароль должен быть больше 4 символов</div>
          <div v-if="!$v.password.$required" class="invalid-feedback">Пароль обязателен</div>
        </b-form-group>

        <b-form-group>
          <b-button
            pill
            class="btn"
            @click="register"
            v-on:click="$emit('changeForm', 'login')"
          >
            Далее
          </b-button>
        </b-form-group>

        <b-form-group>
          <p style="font-size: 10px; color: gray">
            Нажимая на кнопку, вы соглашаетесь с политикой сбора и обработки персональных данных
          </p>
        </b-form-group>

        <b-form-group style="margin: 20px 0">
          <p style="color: gray;">Уже зарегестрированы?</p>
        </b-form-group>

        <b-form-group style="margin: 0 0; padding: 0 0">
          <button
            class="btn_text"
            style="color: #FF6347"
            v-on:click="$emit('changeForm', 'login')"
          >
            Войти
          </button>
        </b-form-group>

      </b-form-group>
    </b-card>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, minLength, numeric } from 'vuelidate/lib/validators'
import axios from "axios";

export default {
  name: "register-item",
  mixins: [validationMixin],
  data() {
    return {
      email: "",
      phoneNumber: "",
      password: ""
    }
  },
  validations: {
    email: { required, email },
    phoneNumber: {required, minLength: minLength(11), numeric},
    password: { required, minLength: minLength(5) }
  },
  methods: {
    async register() {
      await axios.post('http://my-finecard.online/api/Authenticate/register', {
        email: this.email,
        password: this.password
      }, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
      }).catch(_ => {
        alert("Xz")
      });
    }
  }
}
</script>

<style>
.btn {
  background-color:	#FF6347;
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
.btn_text {
  border: none;
  background-color: inherit;
  padding: 0 0;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
}
</style>
