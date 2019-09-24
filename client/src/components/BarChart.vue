<template lang="html">
  <div>
    <apexchart id="chart" height="400" type="bar" :options="options" :series="options.series" />
  </div>
</template>

<script>

import VueApexCharts from 'vue-apexcharts';




export default {
  name: "bar-chart",
  props: ['meals'],
  components: {
    apexchart: VueApexCharts
  },
  computed: {
    uniqueDates: function() {
      return this.meals.map(meal => meal.date).filter((v, i, a) => a.indexOf(v) ===i )
    },
    snackCalories: function(){
      let snackArray = this.meals.filter(meal => meal.type === "snack")
      let graphArray = []
       this.uniqueDates.forEach(function(date){
        let foundMeal = snackArray.find(function(meal){
         return meal.date === date 
        }) 
        if (foundMeal) {
          graphArray.push(foundMeal.calories)
        } else {
          graphArray.push(0)
        }
       })
      return graphArray
    },
    breakfastCalories: function () {
<<<<<<< HEAD
      return this.meals.filter(meal => meal.type === "breakfast")
      .map(meal => meal.calories)
=======
      let breakfastArray = this.meals.filter(meal => meal.type === "breakfast")
      let graphArray = []
       this.uniqueDates.forEach(function(date){
        let foundMeal = breakfastArray.find(function(meal){
         return meal.date === date 
        }) 
        if (foundMeal) {
          graphArray.push(foundMeal.calories)
        } else {
          graphArray.push(0)
        }
       })
      return graphArray
>>>>>>> develop
    },
    lunchCalories: function () {
      let lunchArray = this.meals.filter(meal => meal.type === "lunch")
      let graphArray = []
       this.uniqueDates.forEach(function(date){
        let foundMeal = lunchArray.find(function(meal){
         return meal.date === date 
        }) 
        if (foundMeal) {
          graphArray.push(foundMeal.calories)
        } else {
          graphArray.push(0)
        }
       })
      return graphArray
    },
    dinnerCalories: function () {
      let dinnerArray = this.meals.filter(meal => meal.type === "dinner")
      let graphArray = []
       this.uniqueDates.forEach(function(date){
        let foundMeal = dinnerArray.find(function(meal){
         return meal.date === date 
        }) 
        if (foundMeal) {
          graphArray.push(foundMeal.calories)
        } else {
          graphArray.push(0)
        }
       })
      return graphArray
    },
    options: function() {
      return {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        series: [{
          name: 'Breakfast',
          data: this.breakfastCalories
        }, {
          name: 'Lunch',
          data: this.lunchCalories
        }, {
          name: 'Dinner',
          data: this.dinnerCalories
        },{
          name: 'Snack',
          data: this.snackCalories
        }],

        xaxis: {
          categories: this.uniqueDates,
        },
        yaxis: {
          title: {
            text: 'kcal '
          }
        },
        fill: {
          opacity: 1

        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "kcal " + val + " "
<<<<<<< HEAD
            },
            show: true
=======
            }
>>>>>>> develop
          }
        }
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="css" scoped>
</style>
