<template lang="html">
  <div>
    <apexchart id="chart" height="400" type="bar" :options="options" :series="options.series" />
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts';


export default {
  name: "heat-map",
  props: ['meals'],
  components: {
    apexchart: VueApexCharts
  }
}
</script>

<style lang="css" scoped>
</style>
