<template>
<Chart class="chart" :chartdata="chartData" :options="options"></Chart>
</template>

<script>
import Chart from '../components/Chart.vue';
export default {
    name: 'App',
  components: {
    Chart
  },data(){
      return{
          chartData:this.$store.getters.chartDatas,
           options:{

           }
      }
  }
    
}
</script>

<style scoped>
    .chart{
        width: 450px;
        margin: 100px auto;
    }
</style>

