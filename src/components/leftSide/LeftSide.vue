<template>
  <div>
    <div class="transformer">
      <b-card class="form" style="background-color: #313A9D; height: 100vh">
          <b-card-group>
            <img src="../../assets/logo.png" alt="logo" style="max-height: 50px; padding-left: 10%;"/>
          </b-card-group>

          <b-card-group>
            <button
              onclick="location.href='statistic'"
              @click="giveAuth"
              class="my_btn_text"
            >
              <span :class="{ bold: example === 0 }">Статистика</span>
            </button>
          </b-card-group>

          <b-card-group>
            <button onclick="location.href='clients'" class="my_btn_text">
              <span :class="{ bold: example === 1}">Клиенты</span>
            </button>
          </b-card-group>

          <b-card-group>
            <button onclick="location.href='locations'" class="my_btn_text">
              <span :class="{ bold: example === 2}">Локации</span>
            </button>
          </b-card-group>

          <b-card-group>
            <button onclick="location.href='employees'" class="my_btn_text">
              <span :class="{ bold: example === 3 }">Сотрудники</span>
            </button>
          </b-card-group>

          <b-card-group>
            <button onclick="location.href='settings'" class="my_btn_text">
              <span :class="{ bold: example === 4 }">Настройки</span>
            </button>
          </b-card-group>

        <b-card-group style="margin-top: 150px">
          <button onclick="location.href='startPage'" class="my_btn_text">
            <span>Выйти из аккаунта</span>
          </button>
        </b-card-group>

      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "left-side",
  props: {
    example: Number,
    companyId: Number,
    authToken: String
  },
  methods: {
    giveAuth() {
      console.log(this.companyId, this.authToken)
      this.$emit('giveAuth', this.companyId, this.authToken)
    }
  }
}
</script>

<style scoped>
.my_btn_text {
  border: none;
  color: #FFFFFF;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 22px;
  cursor: pointer;
  display: inline-block;
}

.bold {
  font-weight: bold;
}
</style>
