<template>
  <div>
    <table class="table table-borderless" bgcolor="white">
      <thead>
      <tr style="color: gray">
        <td>Название</td>
        <td>Адрес</td>
        <td>Оплачено до</td>
      </tr>
      </thead>
      <tbody>
      <tr
        class="location"
        v-for="location in locations"
        :key="location.id"
      >
        <td> {{ location.name }} </td>
        <td> {{ location.address }} </td>
        <td> {{ location.date }} </td>
        <button
          style="font-size: x-large;border: none;background-color: inherit; color: blue; padding-bottom: 2%"
          @click="show(location.id)"
        >
          ...
        </button>

        <general-options
          v-if="showLocationOptions && location.id === currentLocationId && locationOptionsIndicator"
          :object="location"
          style="position: absolute; right: 6%"
          @remove="removeLocation(location)"
          @showEditDialog="showEditDialogLocation(location)"
        />

        <general-restore-option
          v-if="showLocationOptions && location.id === currentLocationId && !locationOptionsIndicator"
          :object="location"
          style="position: absolute; right: 6%"
          @restore="restoreLocation(location)"
        />

      </tr>
      </tbody>
    </table>
    <p style="color: gray; font-size: x-large" v-show="locations.length <= 0">
      Вы пока не добавили Локаций
    </p>
  </div>
</template>

<script>
import GeneralOptions from "../options/GeneralOptions";
import GeneralRestoreOption from "../options/GeneralRestoreOption";

export default {
  name: "location-table",
  components: {
    GeneralOptions,
    GeneralRestoreOption
  },
  props: {
    locations: {
      type: Array,
      required: true,
    },
    currentLocationId: Number,
    locationOptionsIndicator: true,
  },
  data() {
    return {
      editDialogVisible: false,
      showLocationOptions: true,
    }
  },
  methods: {
    show(locationId) {
      this.showLocationOptions = !this.showLocationOptions;
      this.currentLocationId = locationId
    },
    removeLocation(location) {
      this.$emit('remove', location)
      this.showLocationOptions = !this.showLocationOptions;
    },
    showEditDialogLocation(location) {
      this.$emit('show', location)
      this.showLocationOptions = !this.showLocationOptions;
    },
    restoreLocation(location) {
      this.$emit('restore', location)
      this.showLocationOptions = !this.showLocationOptions;
    }
  }
}
</script>

<style scoped>
.table {
  margin-top: 5%;
  border-radius: 15px;
}
</style>
