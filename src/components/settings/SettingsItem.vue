<template>
    <div>
      <div>
        <div class="split left">
          <LeftSide :example="4"></LeftSide>
        </div>
        <div class="split right">
          <div class="right-side">
            <p style="font-size: 30px">Настройки</p>

              <button
                class="my_btn"
                :class=" { selected_btn: selected_button === 1 } "
                @click="selected_button = 1"
              >
                Аккаунт
              </button>

              <button
                class="my_btn"
                style="margin-left: 3%;"
                :class=" { selected_btn: selected_button === 2 } "
                @click="selected_button = 2"
              >
                Смена пароля
              </button>

              <button
                class="my_btn"
                style="margin-left: 3%;"
                :class=" { selected_btn: selected_button === 3 } "
                @click="selected_button = 3"
              >
                Настройка компании
              </button>

              <button
                class="my_btn"
                style="margin-top: 3%"
                :class=" { selected_btn: selected_button === 4 } "
                @click="selected_button = 4"
              >
                Настройки карточки
              </button>


            <div v-show="selected_button === 1">
              <p style="font-size: 30px; margin-top: 2%;">Настройки Аккаунта</p>

              <b-form-group>
                <b-form-input
                  id="input-large"
                  placeholder="Email"
                  type="email"
                  style="width: 426px"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group>
                <b-form-input
                  id="input-large"
                  placeholder="Номер телефона"
                  type="tel"
                  style="width: 426px"
                ></b-form-input>
              </b-form-group>
              <button class="my_btn2">
                Сохранить
              </button>
            </div>

            <div v-show="selected_button === 2">
              <p style="font-size: 30px; margin-top: 2%;">Смена пароля</p>
              <b-form-group>
                <b-form-input
                  id="input-large"
                  placeholder="Старый пароль"
                  type="text"
                  style="width: 426px"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group>
                <b-form-input
                  id="input-large"
                  placeholder="Новый пароль"
                  type="text"
                  style="width: 426px"
                ></b-form-input>
              </b-form-group>
              <button class="my_btn2">
                Сохранить
              </button>
            </div>

            <div v-show="selected_button === 3">
              <p style="font-size: 30px; margin-top: 2%;">Настройка Компании</p>
              <b-form-group>
                <b-form-input
                  id="input-large"
                  placeholder="Название компании"
                  type="text"
                  style="width: 426px"
                >
                </b-form-input>
              </b-form-group>

              <b-form-group>
                <b-form-input
                  id="input-large"
                  placeholder="Количество штампов"
                  type="text"
                  style="width: 426px"
                ></b-form-input>
              </b-form-group>

              <b-form-group>
                <b-form-checkbox>
                  Начислять несколько штампов
                </b-form-checkbox>
              </b-form-group>

              <b-form-group>
                <b-form-input
                  id="input-large"
                  placeholder="Instagram"
                  type="text"
                  size="5"
                  style="width: 300px"
                ></b-form-input>
              </b-form-group>

              <button class="my_btn2">
                Сохранить
              </button>
            </div>


            <div v-show="selected_button === 4">
              <p style="font-size: 30px; margin-top: 2%;">Настройки Карточки</p>
              <div class="phone">
                <div class="screen">

                </div>
              </div>

              <p style="margin-left: 50%">Пуш-иконка</p>
              <div class="my_body">
                <form class="upload-container" method="POST">
                  <div>
                    <input class="file-input" type="file" name="file" multiple>
                    <span style="margin-top: 5px; margin-left: 12px; justify-content: center;">Перетащите файл или </span>
                    <label for="file-input">загрузите</label>
                    <span style="font-size: 10px; color: gray; justify-content: center; margin-left: 50px;">Поддерживаемые форматы: PNG</span>
                  </div>
                </form>
              </div>

              <p style="margin-left: 50%">Логотип</p>
              <div class="my_body">
                <form class="upload-container" method="POST">
                  <div>
                    <input class="file-input" type="file" name="file" multiple>
                    <span style="margin-top: 5px; margin-left: 12px; justify-content: center;">Перетащите файл или </span>
                    <label for="file-input">загрузите</label>
                    <span style="font-size: 10px; color: gray; justify-content: center; margin-left: 50px;">Поддерживаемые форматы: PNG</span>
                  </div>
                </form>
              </div>

              <p style="margin-left: 50%">Обложка</p>
              <div class="my_body">
                <form class="upload-container" method="POST">
                  <div>
                    <input id="file-input" type="file" name="file" multiple>
                    <span style="margin-top: 5px; margin-left: 12px; justify-content: center;">Перетащите файл или </span>
                    <label for="file-input">загрузите</label>
                    <span style="font-size: 10px; color: gray; justify-content: center; margin-left: 50px;">Поддерживаемые форматы: PNG</span>
                  </div>
                </form>
              </div>

              <div>
                <b-select>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                </b-select>
              </div>

              <div>
                <b-select>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                </b-select>
              </div>

              <button class="my_btn2">
                Сохранить
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import LeftSide from "../leftSide/LeftSide";
export default {
  name: "settings-item",
  components: {
    LeftSide
  },
  data() {
    return {
      selected_button: 1
    }
  }
}
</script>

<style>
.split {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
}

.left {
  left: 0;
  width: 25%;
  background-color: #E9E9E9;
}

.right {
  right: 0;
  width: 75%;
  background-color: #E9E9E9;
}

.right-side {
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
}

.my_btn {
  color: #000000;
  background: #FFFFFF;
  border: None;
  border-radius: 20px;
  font-size: 24px;
  padding: 10px 30px 10px 30px;
}

.my_btn2 {
  color: #FFFFFF;
  background: #E3653D;
  border: None;
  border-radius: 40px;
  font-size: 24px;
  padding: 10px 30px 10px 30px;
}

.selected_btn {
  background: #E3653D;
}

.phone {
  background-image: url("/src/assets/phone.png");
  height: 420px;
  width: 228px;
  background-repeat: no-repeat;
  margin-top: 10px;
  display: block;
  float: left;
}

.screen {
  background-color: #FFFFFF;
  margin: 30px 10px 10px 10px;
  height: 300px;
  width: 200px;
}

.upload-container {
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
  flex-direction: column;
  width: 270px;
  height: 100px;
  outline: 2px dashed #5d5d5d;
  outline-offset: -12px;
  background-color: #e0f2f7;
  color: #1f3c44;
  display: flex;
  margin-left: 20px;
  padding: 2px;
  font-size: 16px;
}

.upload-container label {
  font-weight: bold;
}

.upload-container label:hover {
  cursor: pointer;
  text-decoration: underline;
}

.upload-container div {
  position: relative;
  z-index: 10;
}

.upload-container input[type=file] {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  position: absolute;
  z-index: -10;
}

.my_body {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
