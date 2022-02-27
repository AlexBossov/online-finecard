<template>
  <div>
    <table class="table table-borderless" bgcolor="white">
      <thead>
      <tr style="color: gray">
        <td>Должность</td>
        <td>Имя</td>
        <td>Фамилия</td>
        <td>Email</td>
        <td>Локация</td>
      </tr>
      </thead>
      <tbody>
      <tr
        class="employee"
        v-for="employee in employees"
        :key="employee.id"
      >
        <td>{{ employee.position }}</td>
        <td> {{ employee.name }} </td>
        <td> {{ employee.surname }} </td>
        <td> {{ employee.email }} </td>
        <td> {{ employee.location }} </td>
        <button
            style="font-size: x-large;border: none;background-color: inherit; color: blue; padding-bottom: 2%"
            @click="show(employee.id)"
        >
            ...
        </button>

        <general-options
          v-if="showEmployeeOptions && employee.id === currentEmployeeId && employeeOptionsIndicator"
          :object="employee"
          style="position: absolute; right: 6%"
          @remove="removeEmployee(employee)"
          @showEditDialog="showEditDialogEmployee(employee)"
        />

        <general-restore-option
          v-if="showEmployeeOptions && employee.id === currentEmployeeId && !employeeOptionsIndicator"
          :object="employee"
          style="position: absolute; right: 6%"
          @restore="restoreEmployee(employee)"
        />

      </tr>
      </tbody>
    </table>
    <p style="color: gray; font-size: x-large" v-show="employees.length <= 0">
      Вы пока не добавили сотрудников
    </p>
  </div>
</template>

<script>
import GeneralOptions from "../options/GeneralOptions";
import GeneralRestoreOption from "../options/GeneralRestoreOption";

export default {
  name: "employee-table",

  data() {
    return {
      editDialogVisible: false,
      showEmployeeOptions: false,
    }
  },

  components: {
    GeneralOptions,
    GeneralRestoreOption
  },

  props: {
    employees: {
      type: Array,
      required: true,
    },
    currentEmployeeId: 0,
    employeeOptionsIndicator: true,
  },

  methods: {
    show(employeeId) {
      this.showEmployeeOptions = !this.showEmployeeOptions;
      this.currentEmployeeId = employeeId
    },
    removeEmployee(employee) {
      this.$emit('remove', employee)
      this.showEmployeeOptions = !this.showEmployeeOptions;
    },
    showEditDialogEmployee(employee) {
      this.$emit('show', employee)
      this.showEmployeeOptions = !this.showEmployeeOptions;
    },
    restoreEmployee(employee) {
      this.$emit('restore', employee)
      this.showEmployeeOptions = !this.showEmployeeOptions;
    }
  }
}
</script>

<style>
.table {
  margin-top: 5%;
  border-radius: 15px;
}
</style>
