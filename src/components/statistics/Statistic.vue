<template>
  <div>

<!--    <div class="history-chart">-->
<!--      <canvas ref="canvas"></canvas>-->
<!--    </div>-->
    <div>
      <div class="my-split left">
        <LeftSide
          @giveCompanyId="getCompanyId"
          :example="0"
        />
      </div>
      <div class="my-split my-right">
        <p style="font-size: 36px; margin-top: 2%; margin-right: 805px" class="my-right-side">Статистика</p>
        <div>
          <b-form-select
            size="large"
            v-model="selectedOption"
            :options="options"
            style="margin-left: 5%; width: 300px; margin-right: 805px"
          />
        </div>

        <div style="margin-top: 3%; margin-left: 5%">
          <button
            style="
          font-size: x-large;
          border-top: none;
          border-right: none;
          border-left: none;
          background-color: inherit;
          "
            :class="{ btn_underline : selected === 1, btn_common : selected !== 1 }"
            @click="selected = 1"
          >
            Поставленные штампы
          </button>

          <button
            style="font-size: x-large;
            border-top: none;
            border-right: none;
            border-left: none;
            background-color: inherit;"
            :class="{ btn_underline : selected === 2, btn_common : selected !== 2 }"
            @click="selected = 2"

          >
            Выданные подарки
          </button>

          <button
            style="
          font-size: x-large;
          border-top: none;
          border-right: none;
          border-left: none;
          background-color: inherit;
          margin-right: 265px;
          "
            :class="{ btn_underline : selected === 3, btn_common : selected !== 3 }"
            @click="selected = 3"
          >
            Новые клиенты
          </button>

          <hr>

          <b-card
            v-if="selected === 1 && selectedOption === null"
            sub-title="Поставленные штампы: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 467 }}
            </b-card-text>
          </b-card>
          <b-card
            v-if="selected === 1 && selectedOption === locations[0].name"
            sub-title="Поставленные штампы: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 112 }}
            </b-card-text>
          </b-card>
          <b-card
            v-if="selected === 1 && selectedOption === locations[1].name"
            sub-title="Поставленные штампы: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 204 }}
            </b-card-text>
          </b-card>
          <b-card
            v-if="selected === 1 && selectedOption === locations[2].name"
            sub-title="Поставленные штампы: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 149 }}
            </b-card-text>
          </b-card>


          <b-card
            v-if="selected === 2 && selectedOption === null"
            sub-title="Выданные подарки: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 39 }}
            </b-card-text>
          </b-card>
          <b-card
            v-if="selected === 2 && selectedOption === locations[0].name"
            sub-title="Выданные подарки: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 16 }}
            </b-card-text>
          </b-card>
          <b-card
            v-if="selected === 2 && selectedOption === locations[1].name"
            sub-title="Выданные подарки: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 12 }}
            </b-card-text>
          </b-card>
          <b-card
            v-if="selected === 2 && selectedOption === locations[2].name"
            sub-title="Выданные подарки: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 11 }}
            </b-card-text>
          </b-card>

          <b-card
            v-if="selected === 3 && selectedOption === null"
            sub-title="Новые клиенты: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 52 }}
            </b-card-text>
          </b-card>
          <b-card
            v-if="selected === 3 && selectedOption === locations[0].name"
            sub-title="Новые клиенты: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 21 }}
            </b-card-text>
          </b-card>
          <b-card
            v-if="selected === 3 && selectedOption === locations[1].name"
            sub-title="Новые клиенты: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 17 }}
            </b-card-text>
          </b-card>
          <b-card
            v-if="selected === 3 && selectedOption === locations[2].name"
            sub-title="Новые клиенты: "
            tag="article"
            style="max-width: 12rem; max-height: 12rem; margin-top: 5px; margin-bottom: 5px;margin-right: 5px;height: 200px; border-radius: 11px;"
            class="mb-2"
          >
            <b-card-text style="font-size: 64px; color: #FF6347">
              {{ 14 }}
            </b-card-text>
          </b-card>
        </div>

        <div class="row mt-5" v-if="arr1.length > 0 && selected === 1 && selectedOption === null">
          <div class="col">
            <line-chart
              :chartData="arr1"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество штампов"
            />
          </div>
        </div>
        <div class="row mt-5" v-if="arr2.length > 0 && selected === 1 && selectedOption === locations[0].name">
          <div class="col">
            <line-chart
              :chartData="arr2"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество штампов"
            />
          </div>
        </div>
        <div class="row mt-5" v-if="arr3.length > 0 && selected === 1 && selectedOption === locations[1].name">
          <div class="col">
            <line-chart
              :chartData="arr2"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество штампов"
            />
          </div>
        </div>
        <div class="row mt-5" v-if="arr4.length > 0 && selected === 1 && selectedOption === locations[2].name">
          <div class="col">
            <line-chart
              :chartData="arr2"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество штампов"
            />
          </div>
        </div>

        <div class="row mt-5" v-if="arr5.length > 0 && selected === 2 && selectedOption === null">
          <div class="col">
            <line-chart
              :chartData="arr2"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество подарков"
            />
          </div>
        </div>
        <div class="row mt-5" v-if="arr6.length > 0 && selected === 2 && selectedOption === locations[0].name">
          <div class="col">
            <line-chart
              :chartData="arr2"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество подарков"
            />
          </div>
        </div>
        <div class="row mt-5" v-if="arr7.length > 0 && selected === 2 && selectedOption === locations[1].name">
          <div class="col">
            <line-chart
              :chartData="arr2"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество подарков"
            />
          </div>
        </div>
        <div class="row mt-5" v-if="arr8.length > 0 && selected === 2 && selectedOption === locations[2].name">
          <div class="col">
            <line-chart
              :chartData="arr2"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество подарков"
            />
          </div>
        </div>

        <div class="row mt-5" v-if="arr9.length > 0 && selected === 3 && selectedOption === null">
          <div class="col">
            <line-chart
              :chartData="arr2"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество подарков"
            />
          </div>
        </div>
        <div class="row mt-5" v-if="arr10.length > 0 && selected === 3 && selectedOption === locations[0].name">
          <div class="col">
            <line-chart
              :chartData="arr2"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество подарков"
            />
          </div>
        </div>
        <div class="row mt-5" v-if="arr11.length > 0 && selected === 3 && selectedOption === locations[1].name">
          <div class="col">
            <line-chart
              :chartData="arr2"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество подарков"
            />
          </div>
        </div>
        <div class="row mt-5" v-if="arr12.length > 0 && selected === 3 && selectedOption === locations[2].name">
          <div class="col">
            <line-chart
              :chartData="arr2"
              :options="chartOptions"
              :chartColors="chartColors"
              label="Количество подарков"
            />
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import LeftSide from "../leftSide/LeftSide";
import axios from "axios";
import LineChart from "../lineChart/LineChart";


export default {
  name: "statistic",
  props: {
    companyId: Number,
    authToken: String
  },
  components: {
    LeftSide,
    LineChart
  },
  data() {
    return {
      arr1: [
        {
          date: '23.02',
          total: 70
        },
        {
          date: '22.02',
          total: 53
        },
        {
          date: '21.02',
          total: 70
        },
        {
          date: '20.02',
          total: 56
        },
        {
          date: '19.02',
          total: 54
        },
        {
          date: '18.02',
          total: 49
        },
        {
          date: '17.02',
          total: 115
        },
      ],
      arr2: [
        {
          date: '23.02',
          total: 21
        },
        {
          date: '22.02',
          total: 11
        },
        {
          date: '21.02',
          total: 22
        },
        {
          date: '20.02',
          total: 19
        },
        {
          date: '19.02',
          total: 13
        },
        {
          date: '18.02',
          total: 15
        },
        {
          date: '17.02',
          total: 11
        }
      ],
      arr3: [
        {
          date: '23.02',
          total: 21
        },
        {
          date: '22.02',
          total: 11
        },
        {
          date: '21.02',
          total: 22
        },
        {
          date: '20.02',
          total: 19
        },
        {
          date: '19.02',
          total: 13
        },
        {
          date: '18.02',
          total: 15
        },
        {
          date: '17.02',
          total: 11
        }
      ],
      arr4: [
        {
          date: '23.02',
          total: 21
        },
        {
          date: '22.02',
          total: 11
        },
        {
          date: '21.02',
          total: 22
        },
        {
          date: '20.02',
          total: 19
        },
        {
          date: '19.02',
          total: 13
        },
        {
          date: '18.02',
          total: 15
        },
        {
          date: '17.02',
          total: 11
        }
      ],
      arr5: [
        {
          date: '23.02',
          total: 21
        },
        {
          date: '22.02',
          total: 11
        },
        {
          date: '21.02',
          total: 22
        },
        {
          date: '20.02',
          total: 19
        },
        {
          date: '19.02',
          total: 13
        },
        {
          date: '18.02',
          total: 15
        },
        {
          date: '17.02',
          total: 11
        }
      ],
      arr6: [
        {
          date: '23.02',
          total: 21
        },
        {
          date: '22.02',
          total: 11
        },
        {
          date: '21.02',
          total: 22
        },
        {
          date: '20.02',
          total: 19
        },
        {
          date: '19.02',
          total: 13
        },
        {
          date: '18.02',
          total: 15
        },
        {
          date: '17.02',
          total: 11
        }
      ],
      arr7: [
        {
          date: '23.02',
          total: 21
        },
        {
          date: '22.02',
          total: 11
        },
        {
          date: '21.02',
          total: 22
        },
        {
          date: '20.02',
          total: 19
        },
        {
          date: '19.02',
          total: 13
        },
        {
          date: '18.02',
          total: 15
        },
        {
          date: '17.02',
          total: 11
        }
      ],
      arr8: [
        {
          date: '23.02',
          total: 21
        },
        {
          date: '22.02',
          total: 11
        },
        {
          date: '21.02',
          total: 22
        },
        {
          date: '20.02',
          total: 19
        },
        {
          date: '19.02',
          total: 13
        },
        {
          date: '18.02',
          total: 15
        },
        {
          date: '17.02',
          total: 11
        }
      ],
      arr9: [
        {
          date: '23.02',
          total: 21
        },
        {
          date: '22.02',
          total: 11
        },
        {
          date: '21.02',
          total: 22
        },
        {
          date: '20.02',
          total: 19
        },
        {
          date: '19.02',
          total: 13
        },
        {
          date: '18.02',
          total: 15
        },
        {
          date: '17.02',
          total: 11
        }
      ],
      arr10: [
        {
          date: '23.02',
          total: 21
        },
        {
          date: '22.02',
          total: 11
        },
        {
          date: '21.02',
          total: 22
        },
        {
          date: '20.02',
          total: 19
        },
        {
          date: '19.02',
          total: 13
        },
        {
          date: '18.02',
          total: 15
        },
        {
          date: '17.02',
          total: 11
        }
      ],
      arr11: [
        {
          date: '23.02',
          total: 21
        },
        {
          date: '22.02',
          total: 11
        },
        {
          date: '21.02',
          total: 22
        },
        {
          date: '20.02',
          total: 19
        },
        {
          date: '19.02',
          total: 13
        },
        {
          date: '18.02',
          total: 15
        },
        {
          date: '17.02',
          total: 11
        }
      ],
      arr12: [
        {
          date: '23.02',
          total: 21
        },
        {
          date: '22.02',
          total: 11
        },
        {
          date: '21.02',
          total: 22
        },
        {
          date: '20.02',
          total: 19
        },
        {
          date: '19.02',
          total: 13
        },
        {
          date: '18.02',
          total: 15
        },
        {
          date: '17.02',
          total: 11
        }
      ],

      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      },
      chartColors: {
        borderColor: "#FF6633",
        pointBackgroundColor: "#313A9D",
        backgroundColor: "#ee916f"
      },
      locations: [],
      currentLocation: String,
      options: [],
      selectedOption: null,
      selected: 1
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
        this.locations = response.data
        this.options = [
          { value: null, text: 'Все локации' },
          { value: this.locations[0].name, text: this.locations[0].name },
          { value: this.locations[1].name, text: this.locations[1].name },
          { value: this.locations[2].name, text: this.locations[2].name },
        ]
      }).catch(error => {
        alert(error.message)
      });
    },
    getCompanyId(data) {
      console.log(data)
    }
  },
  mounted(){
    // this.renderChart({
    //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //   datasets: [{
    //     label: '# of Votes',
    //     data: [12, 19, 3, 5, 2, 3],
    //     backgroundColor: [
    //       'rgba(255, 99, 132, 0.2)',
    //       'rgba(54, 162, 235, 0.2)',
    //       'rgba(255, 206, 86, 0.2)',
    //       'rgba(75, 192, 192, 0.2)',
    //       'rgba(153, 102, 255, 0.2)',
    //       'rgba(255, 159, 64, 0.2)'
    //     ],
    //     borderColor: [
    //       'rgba(255, 99, 132, 1)',
    //       'rgba(54, 162, 235, 1)',
    //       'rgba(255, 206, 86, 1)',
    //       'rgba(75, 192, 192, 1)',
    //       'rgba(153, 102, 255, 1)',
    //       'rgba(255, 159, 64, 1)'
    //     ],
    //     borderWidth: 1
    //   }]
    // })
    this.fetchLocations()
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

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.my-right-side {
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

</style>
