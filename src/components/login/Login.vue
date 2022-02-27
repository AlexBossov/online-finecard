<template>
  <div>
    <slot>
      <b-card pill bg-variant="light" class="form" align="center" style="border-radius: 25px">
        <b-form-group>

          <b-form-group>
            <p style="font-size: 24px; margin-top: 50px">Вход в аккаунт</p>
          </b-form-group>

          <b-form-group>
            <b-form-input
              id="email"
              placeholder="Email"
              v-model="email"
              @blur="$v.email.$touch()"
              :class="{ 'is-invalid' : $v.email.$error }"
            />
            <div v-if="!$v.email.$email" class="invalid-feedback">Введите корректный email</div>
          </b-form-group>

          <b-form-group>
              <b-form-input
                id="password"
                placeholder="Пароль"
                v-model="password"
                @blur="$v.password.$touch()"
                type="text"
                :class="{ 'is-invalid' : $v.password.$error}"
              />
            <div v-if="!$v.password.$minLength" class="invalid-feedback">Пароль должен быть больше 4 символов</div>
          </b-form-group>

          <b-form-group>
            <button
              style="color: steelblue;border: none;background-color: inherit;"
              v-on:click="$emit('changeForm', 'recovery')"
            >
              Забыли пароль?
            </button>
          </b-form-group>

          <b-form-group>
            <b-button
              pill
              class="btn"
              @click="loginSubmit"
              :disabled="$v.email.$invalid || $v.password.$invalid"
            >
              Войти в аккаунт
            </b-button>
          </b-form-group>

          <b-form-group>
            <p style="color: gray;margin-top: 30px; margin-bottom: 0">Нет Аккаунта?</p>
            <button
              class="btn_text"
              @click="$emit('changeForm', 'register')"
            >
              Зарегистрироваться
            </button>
          </b-form-group>

        </b-form-group>
      </b-card>
    </slot>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators'
import { mapState, mapActions } from 'vuex';


export default {
  name: "login-item",
  mixins: [ validationMixin ],
  data(){
    return {
      email : "kostya.adrianov@gmail.com",
      password : "Password123#",
    }
  },
  computed: {
    ...mapState([
      'loggingIn',
      'loginError',
      'loginSuccessful'
    ])
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(5) }
  },

  methods: {
    ...mapActions([
      'doLogin',
      'fetchAuthToken'
    ]),
    loginSubmit() {
      this.doLogin({
        email: this.email,
        password: this.password
      });
      this.$router.push(
        {
          // name: 'employees',
          // path: '/employees',
          name: 'locations',
          path: '/locations'
        })
    }
  },
  mounted() {
    this.fetchAuthToken();
  }
  // methods: {
  //   async login() {
  //       await axios.post('http://my-finecard.online/api/Authenticate/login', {
  //         email: this.email,
  //         password: this.password
  //              }, {
  //              headers: {
  //                "Access-Control-Allow-Origin": "*",
  //                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  //                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
  //              },
  //       }).then( (response) => {
  //
  //         this.$store.commit('setCompanyId', response.data.companyId)
  //         this.$store.commit('setAuthToken', response.data.token)
  //         this.$router.push(
  //           {
  //             // name: 'employees',
  //             // path: '/employees',
  //             name: 'locations',
  //             path: '/locations',
  //             params: {
  //               companyId: response.data.companyId,
  //               authToken: response.data.token
  //             }
  //           })
  //       }).catch(reason => {
  //         console.log(reason.message)
  //         alert("Неверный пароль или логин")
  //       });
  //     }
  //   }
}
</script>

<style>
.btn {
  background-color:	#FF6347;
  width: 300px;
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
  padding: 0;
  margin-top: 0;
  font-size: 16px;
  cursor: pointer;
  color:	#FF6347;
  display: inline-block;
}

</style>
