<template>
  <div>
    <div class="split left">
      <LeftSide
        :example="2"
        :companyId="companyId"
        :authToken="authToken"
      />
    </div>
    <div class="split right">
      <div class="right-side">
        <p style="font-size: 30px">Локации</p>
        <div style="margin-top: 3%">
          <button
            style="
          font-size: x-large;
          border-top: none;
          border-right: none;
          border-left: none;
          background-color: inherit;
          "
            @click="changeLocationsToCurrent"
            :class="{ btn_underline : currentLocationsIndicator, btn_common : !currentLocationsIndicator }"
          >
            Действующие локации
          </button>

          <button
            style="font-size: x-large;
            border-top: none;
            border-right: none;
            border-left: none;
            background-color: inherit;"
            @click="changeLocationsToArchival"
            :class="{ btn_underline : !currentLocationsIndicator, btn_common : currentLocationsIndicator }"
          >
            Архивные локации
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
          v-if="currentLocationsIndicator">
          Создать новую локацию
        </button>

        <div class="dialog" v-if="createDialogVisible" @click.stop="hideCreateDialog">
          <div @click.stop class="dialog__content">
            <location-create-form @create="createLocation"/>
          </div>
        </div>

        <div class="dialog" v-if="editDialogVisible" @click.stop="hideEditDialog">
          <div @click.stop class="dialog__content">
            <location-edit-form @edit="editLocation" :location="currentEditingLocation"/>
          </div>
        </div>

        <b-input
          placeholder="Введите адрес или название локации"
          v-model="searchedQuery"
          style="margin-top: 12%"
        />

        <!--        <location-table-->
        <!--          :locations="currentLocationsIndicator ? searchedCurrentLocations : searchedArchivalLocations"-->
        <!--          :location-options-indicator="currentLocationsIndicator"-->

        <!--          v-if="!isLocationsLoading"-->
        <!--          @remove="removeLocation"-->
        <!--          @show="showEditDialog"-->
        <!--          @restore="restoreLocation"-->
        <!--        />-->

        <location-table
          :locations="currentLocationsIndicator ? currentLocations() : archivalLocations()"
          :location-options-indicator="currentLocationsIndicator"
          v-if="!isLocationsLoading"
          @remove="removeLocation"
          @show="showEditDialog"
          @restore="restoreLocation"
        />

      </div>
    </div>
  </div>
</template>


<script>
import LeftSide from "../leftSide/LeftSide";
import LocationTable from "./LocationTable";
import LocationCreateForm from "./LocationCreateForm";
import LocationEditForm from "./LocationEditForm";
import axios from "axios";
import {mapGetters} from 'vuex'

export default {
  name: "location-page",
  props: {
    companyId: Number,
    authToken: String
  },
  components: {
    LocationTable,
    LocationCreateForm,
    LocationEditForm,
    LeftSide,
  },
  data() {
    return {
      locations: [],

      // currentLocations: [
      //   {id: 1, name: 'Simple coffee', address: 'Ленина 46'},
      //   {id: 2, name: 'Cofix', address: 'Нагибина 13'},
      //   {id: 3, name: 'Coffee like', address: 'Малюгина 26, д. 6'},
      // ],
      // archivalLocations: [
      //   {id: 4, name: 'Coffee 1', address: 'Россия, ул. Соколова, д. 16'},
      //   {id: 5, name: 'Coffee 2', address: 'Россия'},
      //   {id: 6, name: 'Coffee 3', address: 'Россия'},
      // ],
      createDialogVisible: false,
      editDialogVisible: false,
      isLocationsLoading: false,
      currentLocationsIndicator: true,
      currentEditingLocation: {
        name: '',
        address: ''
      },
      searchedQuery: '',
    }
  },
  methods: {
    async fetchLocations() {
      await axios.get(`http://my-finecard.online/api/Locations/${localStorage.getItem('companyId')}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
            "Authorization": `Bearer ${localStorage.getItem('authToken')}`
          }
        }
      ).then(response => {
        console.log(response.data)
        this.locations = response.data
      }).catch(error => {
        alert(error.message)
      });
    },
    changeLocationsToArchival() {
      this.currentLocationsIndicator = false;
    },
    changeLocationsToCurrent() {
      this.currentLocationsIndicator = true;
    },
    async createLocation(location) {
      await axios.post(`http://my-finecard.online/api/Locations`,
        {
          name: location.name,
          address: location.address,
          companyId: localStorage.getItem('companyId'),
        }, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
            "Authorization": `Bearer ${localStorage.getItem('authToken')}`
          }
        }
      ).then(response => {
        console.log(response.data)
      }).catch(error => {
        alert(error.message)
      });
      this.createDialogVisible = false;
    },
    async removeLocation(location) {
      location.archived = !location.archived

      await axios.delete(`http://my-finecard.online/api/Locations/${location.id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
            "Authorization": `Bearer ${localStorage.getItem('authToken')}`
          }
        }
      ).then(_ => {
      }).catch(error => {
        alert(error.message)
      });

      // await axios.put(`http://my-finecard.online/api/Locations/${location.id}`,{ location },
      //   {
      //     headers: {
      //       "Access-Control-Allow-Origin": "*",
      //       "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      //       "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      //       "Authorization": `Bearer ${localStorage.getItem('authToken')}`
      //     }
      //   }
      // ).then(_ => {
      // }).catch(error => {
      //   alert(error.message)
      // });
      // this.currentLocations = this.currentLocations.filter(e => e.id !== location.id)
      // this.archivalLocations.push(location)
    },
    async editLocation(location) {
      await axios.put(`http://my-finecard.online/api/Locations/${location.id}`,{ location },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
            "Authorization": `Bearer ${localStorage.getItem('authToken')}`
          }
        }
      ).then(_ => {
      }).catch(error => {
        alert(error.message)
      });

      this.currentEditingLocation = location
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
    restoreLocation(location) {
      this.archivalLocations = this.archivalLocations.filter(e => e.id !== location.id)
      this.currentLocations.push(location)
    },
    currentLocations() {
      console.log(this.locations.filter(l => !l.archived))
      return this.locations.filter(l => !l.archived)
    },
    archivalLocations() {
      console.log(this.locations.filter(l => l.archived))
      return this.locations.filter(l => l.archived)
    }
  },
  computed:
    {
      ...mapGetters(["getAuthToken", "getCompanyId"]),
      searchedCurrentLocations() {
      return this.currentLocations.filter(location =>
        location.name.toLowerCase().includes(this.searchedQuery) ||
        location.address.toLowerCase().includes(this.searchedQuery)
      )
    },
    searchedArchivalLocations() {
      return this.archivalLocations.filter(location =>
        location.name.toLowerCase().includes(this.searchedQuery) ||
        location.address.toLowerCase().includes(this.searchedQuery)
      )
    }
  },
  mounted() {
    this.fetchLocations();
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

.btn_common {
  border-bottom: none;
}

.btn_underline {
  border-bottom: 2px solid #FF6347;
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
</style>

