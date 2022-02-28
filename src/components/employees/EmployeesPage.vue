<template>
  <div>
    <div class="my-split left">

      <LeftSide
        :companyId="companyId"
        :authToken="authToken"
        :example="3"
      />

    </div>
    <div class="my-split my-right">
      <div class="my-right-side">
        <p style="font-size: 30px; margin-right: 800px">Сотрудники</p>

        <div style="margin-top: 3%">
          <button
            style="
          font-size: x-large;
          border-top: none;
          border-right: none;
          border-left: none;
          background-color: inherit;
          "
            @click="changeEmployeesToCurrent"
            :class="{ btn_underline : currentEmployeesIndicator, btn_common : !currentEmployeesIndicator }"
          >
            Действующие сотрудники
          </button>

          <button
            style="font-size: x-large;
            border-top: none;
            border-right: none;
            border-left: none;
            background-color: inherit;
            margin-right: 365px"
            @click="changeEmployeesToArchival"
            :class="{ btn_underline : !currentEmployeesIndicator, btn_common : currentEmployeesIndicator }"
          >
            Архивные сотрудники
          </button>
        </div>

        <hr>

        <button
          style="
           background-color: white;
           border: none;
           border-radius: 25px;
           color: black;
           padding: 15px 32px;
           text-align: center;
           text-decoration: none;
           display: inline-block;
           font-size: x-large;
           margin: 4px 2px;
           float: right;
           right: 5%;
           flex-direction: column"
          @click="showCreateDialog"
          v-if="currentEmployeesIndicator">
          Создать нового сотрудника
        </button>

        <div class="dialog" v-if="createDialogVisible" @click.stop="hideCreateDialog">
          <div @click.stop class="dialog__content">
            <employee-create-form @create="createEmployee"/>
          </div>
        </div>

        <div class="dialog" v-if="editDialogVisible" @click.stop="hideEditDialog">
          <div @click.stop class="dialog__content">
            <employee-edit-form @edit="editEmployee" :employee="currentEditingEmployee"/>
          </div>
        </div>

        <b-input
          placeholder="Введите имя и фамилию для поиска сотрудника"
          style="margin-top: 12%"
        />

        <employee-table
          :employees="employees.filter(e => !e.archived)"
          :employee-options-indicator="currentEmployeesIndicator"
          v-if="!isEmployeesLoading && currentEmployeesIndicator"
          @remove="removeEmployee"
          @show="showEditDialog"
          @restore="restoreEmployee"
        />

        <employee-table
          :employees="employees.filter(e => e.archived)"
          :employee-options-indicator="currentEmployeesIndicator"
          v-if="!isEmployeesLoading && !currentEmployeesIndicator"
          @remove="removeEmployee"
          @show="showEditDialog"
          @restore="restoreEmployee"
        />

      </div>
    </div>
  </div>
</template>

<script>
import LeftSide from "../leftSide/LeftSide";
import EmployeeTable from "./EmployeeTable";
import EmployeeCreateForm from "./EmployeeCreateForm";
import EmployeeEditForm from "./EmployeeEditForm";
import axios from "axios";

export default {
  name: "employees-page",
  props: {
    companyId: Number,
    authToken: String
  },
  components: {
    EmployeeEditForm,
    LeftSide,
    EmployeeTable,
    EmployeeCreateForm
  },
  data() {
    return {

      employees: [
        {
          id: Number,
          name: String,
          surname: String,
          position: String,
          location: {
            name: String,
            address: String
          },
          email: String,
          companyId: Number,
          archived: Boolean
        }
      ],

      currentEditingEmployee: {
        position: '',
        name: '',
        surname: '',
        email: '',
        location: ''
      },

      currentEmployeesIndicator: true,
      createDialogVisible: false,
      editDialogVisible: false,
      isEmployeesLoading: false,
      searchQuery: '',
    }
  },
  methods: {

    async fetchEmployees() {
      await axios.get(`http://my-finecard.online/api/Employee/${localStorage.getItem('companyId')}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
            "Authorization": `Bearer ${localStorage.getItem('authToken')}`
          }
        }
      ).then(response => {
        this.employees = response.data
      }).catch(error => {
        alert(error.message)
      });
    },

    async createEmployee(employee) {
      await axios.post(`http://my-finecard.online/api/Employee`,
        {
          name: employee.name,
          surname: employee.surname,
          position: employee.position,
          email: employee.email,
          companyId: localStorage.getItem('companyId'),
          archived: false,

          location: {
            address: "kek",
            archived: false,
            companyId: 1,
            name: "lol"
          },
          locationId: 12

        },{
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
            "Authorization": `Bearer ${localStorage.getItem('authToken')}`
          }
        }
      ).then(response => {
        console.log(response.data)
      }).catch(_ => this.createDialogVisible = false)
    },

    async removeEmployee(employee) {
      employee.archived = false
      await axios.put(`http://my-finecard.online/api/Employee/${employee.id}`,
        {
          employee
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
            "Authorization": `Bearer ${localStorage.getItem('authToken')}`
          }
        }
      ).then(_ => {
        // console.log(response.data)
      }).catch(error => {
        alert(error.message)
      });
    },

    editEmployee(employee) {
      this.currentEditingEmployee = employee
      this.editDialogVisible = false;
    },

    showCreateDialog() {
      this.createDialogVisible = true;
    },

    hideCreateDialog() {
      this.createDialogVisible = false;
    },

    showEditDialog(employee) {
      this.currentEditingEmployee = employee
      this.editDialogVisible = true;
    },

    hideEditDialog() {
      this.editDialogVisible = false;
    },

    changeEmployeesToArchival() {
      this.currentEmployeesIndicator = false;
    },

    changeEmployeesToCurrent() {
      this.currentEmployeesIndicator = true;
    },

    restoreEmployee(employee) {
      this.archivalEmployees = this.archivalEmployees.filter(e => e.id !== employee.id)
      this.currentEmployees.push(employee)
    },
  },
  mounted() {
    this.fetchEmployees();
  }
}
</script>

<style>
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

.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.dialog__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 58px;
  min-width: 300px;
  padding: 20px;
}

button {
  cursor: pointer;
}

.btn_common {
  border-bottom: none;
}

.btn_underline {
  border-bottom: 2px solid #FF6347;
}

</style>
