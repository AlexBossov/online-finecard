<script>
import { Line } from "vue-chartjs";

export default {
  name: "line-chart",
  extends: Line,
  props: {
    label: {
      type: String
    },
    chartData: {
      type: Array
    },
    options: {
      type: Object
    },
    chartColors: {
      type: Object
    }
  },
  mounted() {
    const dates = this.chartData.map(d => d.date).reverse();
    const totals = this.chartData.map(d => d.total).reverse();

    const {
      borderColor,
      pointBackgroundColor,
      backgroundColor
    } = this.chartColors;

    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            data: totals,
            borderColor: borderColor,
            pointBackgroundColor: pointBackgroundColor,
            backgroundColor: backgroundColor,
            label: this.label
          }
        ]
      },
      this.options
    );
  }
};
</script>
