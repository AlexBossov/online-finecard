<template>
    <div>
      <div>
        <div class="my-split left">
          <LeftSide :example="1" />
        </div>
        <div class="my-split my-right">
          <div class="my-right-side">
            <p style="font-size: 30px; margin-right: 800px">Клиенты</p>
            <button class="my_btn">Отправить пуш</button>
            <div style="width: 700px">
            </div>
            <b-input
              style="
              margin-top: 20px;
              margin-bottom: 20px;
              width: 483px;
              height: 51px;
              background: #FFFFFF;
              border-radius: 11px;"
              placeholder="Поиск по номеру телефону"
            />
            <clients-table :clients="clients"></clients-table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import LeftSide from "../leftSide/LeftSide";
import ClientsTable from "./ClientsTable";

export default {
  name: "ClientsPage",
  components: {
    LeftSide,
    ClientsTable
  },
  data() {
    return {
      clients:[]
      // clients: [
      //   {
      //     id: Number,
      //     phoneNumber: String,
      //     companyId: Number,
      //     confirmed: Boolean,
      //     countOfStamps: Number,
      //     countOfPresents: Number,
      //     firstTimePurchase: Date,
      //     lastTimePurchase: Date
      //   }
      // ]
    }
  },
  methods: {
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    fetchClients() {
      for (let i = 1; i < 1000; i++) {
        const day = this.getRandomInt(1, 25)
        const month = this.getRandomInt(1, 2)
        const client = {
          id: i,
          phoneNumber: `+7` +
            ` ${this.getRandomInt(1, 9)}`+
            `${this.getRandomInt(1, 9)}`+
            `${this.getRandomInt(1, 9)}`+
            ` ${this.getRandomInt(1, 9)}`+
            `${this.getRandomInt(1, 9)}`+
            `${this.getRandomInt(1, 9)}`+
            `-${this.getRandomInt(1, 9)}`+
            `${this.getRandomInt(1, 9)}`+
            `-${this.getRandomInt(1, 9)}`+
            `${this.getRandomInt(1, 9)}`,
          countOfStamps: this.getRandomInt(0, 11),
          countOfPresents: this.getRandomInt(0, 2),
          firstTimePurchase: `${day}.` + `${month}.` + '2022',
          lastTimePurchase: `${this.getRandomInt(day, 25)}.${this.getRandomInt(month, 2)}.2022`
        }
        this.clients.push(client)
      }
    }
  },
  mounted() {
    this.fetchClients()
  }
}
</script>

<style scoped>
.my-split {
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

.my-right {
  right: 0;
  width: 75%;
  background-color: #E9E9E9;
}

.my-right-side {
  margin-top: 2%;
  margin-left: 5%;
  margin-right: 5%;
}

.my_btn {
  color: #FFFFFF;
  background: #E3653D;
  border: None;
  border-radius: 40px;
  font-size: 20px;
  padding: 10px 30px 10px 30px;
  right: 0;
  top: 0;
  position: absolute;
  margin-top: 2%;
  margin-right: 5%;
}

</style>
