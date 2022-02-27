<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <td>
          <input type="checkbox" disabled value="false">
        </td>
        <td>Телефон</td>
        <td>Дата первой покупки</td>
        <td>Дата последней покупки</td>
        <td>Текущее кол-во
          штампов</td>
        <td>Кол-во накопленных
          подарков</td>
      </tr>
      </thead>
      <tbody>
        <tr
          class="client"
          v-for="client in clients"
          :key="client.id"
        >
          <td><input type="checkbox"></td>
          <td>{{ client.phoneNumber }}</td>
          <td> {{ client.firstTimePurchase }} </td>
          <td> {{ client.lastTimePurchase }} </td>
          <td> {{ client.countOfStamps }} </td>
          <td> {{ client.countOfPresents }} </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "clients-table",
  props: {
    clients: [
      {
        id: Number,
        phoneNumber: String,
        companyId: Number,
        confirmed: Boolean,
        countOfStamps: Number,
        countOfPresents: Number,
        firstTimePurchase: Date,
        lastTimePurchase: Date
      }
    ]
  },
  data() {
    return {

    }
  }
}
</script>

<style>
</style>
