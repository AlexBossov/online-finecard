<template>
  <div>
    <div class="my-split left">
      <div class="centered">
        <div class="transformer">
          <span style="color: gray">Card</span><span style="color: mediumpurple;">fine</span><span  style="color: gray">Cardf</span><br>
          <span style="color: gray">Card</span><span style="color: mediumpurple;">fine</span><span  style="color: gray">Cardf</span>
        </div>
      </div>
    </div>
    <div class="my-split my-right">
      <div class="centered">
        <Register v-if=" form === 'register' " v-on:changeForm="changeForm"></Register>
        <login-item v-if=" form === 'login' " v-on:changeForm="changeForm"></login-item>
        <Recovery v-if=" form === 'recovery' " v-on:changeForm="changeForm"></Recovery>
      </div>
    </div>
  </div>
</template>

<script>
import LoginItem from "../login/Login";
import Register from "../register/RegisterItem";
import Recovery from "../recovery/RecoveryItem";

export default {
  name: "StartPage",
  components: {
    LoginItem,
    Register,
    Recovery
  },
  data() {
    return {
      form: 'login'
    }
  },
  methods: {
    changeForm(form) {
      this.form = form
    }
  }
}
</script>

<style scoped>

.transformer {
  transform: rotate(-90deg);
}

div::-webkit-scrollbar {
  width: 0;
}

.my-split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

.left {
  left: 0;
  background-color: #E9E9E9;
}

.my-right {
  right: 0;
  background-color: #E9E9E9;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

span {
  font-size: 16.5vh;
}
</style>
