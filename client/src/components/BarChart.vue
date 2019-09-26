<template>
  <div>
    <hr>
    <h1>Weekly Calories</h1>
    <apexchart id="chart" height="400" type="bar" :options="options" :series="options.series" />
    <hr>
    <br><br>
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
      const allDates = this.meals.map(meal => meal.date).filter((date, index, datesArray) => datesArray.indexOf(date) ===index )
      if (allDates.length <= 7) {
        return allDates
      } else {
        let numberOfDatesToRemove = allDates.length - 7;
        return allDates.splice(numberOfDatesToRemove)
      }
    },
    snackCalories: function() {
      let snackArray = this.meals.filter(meal => meal.type === "snack")
      let orderedSnacksValues = []
      this.uniqueDates.forEach(function(date){
        let foundMeals = snackArray.filter(meal => meal.date === date)
        if (foundMeals.length === 0) {
          orderedSnacksValues.push(0)
        } else {
          let valueForSpecificDate = foundMeals.map(meal => meal.calories)
            .reduce((totalcalories,calories) => totalcalories + calories ,0);
          orderedSnacksValues.push(valueForSpecificDate)
        }
      })
      return orderedSnacksValues
    },
      breakfastCalories: function () {
      let breakfastArray = this.meals.filter(meal => meal.type === "breakfast")
      let orderedBreakfastValues = []
       this.uniqueDates.forEach(function(date){
        let foundMeals = breakfastArray.filter(meal => meal.date === date)
        if (foundMeals.length === 0) {
          orderedBreakfastValues.push(0)
        } else {
          let valueForSpecificDate = foundMeals.map(meal => meal.calories)
            .reduce((totalcalories,calories) => totalcalories + calories ,0);
          orderedBreakfastValues.push(valueForSpecificDate)
        }
       })
      return orderedBreakfastValues
    },
    lunchCalories: function () {
      let lunchArray = this.meals.filter(meal => meal.type === "lunch")
      let orderedLunchValues = []
       this.uniqueDates.forEach(function(date){
       let foundMeals = lunchArray.filter(meal => meal.date === date)
        if (foundMeals.length === 0) {
          orderedLunchValues.push(0)
        } else {
          let valueForSpecificDate = foundMeals.map(meal => meal.calories)
            .reduce((totalcalories,calories) => totalcalories + calories ,0);
          orderedLunchValues.push(valueForSpecificDate)
        }
       })
      return orderedLunchValues
    },
    dinnerCalories: function () {
      let dinnerArray = this.meals.filter(meal => meal.type === "dinner")
      let orderedDinnerValues = []
       this.uniqueDates.forEach(function(date){
        let foundMeals = dinnerArray.filter(meal => meal.date === date)
        if (foundMeals.length === 0) {
          orderedDinnerValues.push(0)
        } else {
          let valueForSpecificDate = foundMeals.map(meal => meal.calories)
            .reduce((totalcalories,calories) => totalcalories + calories ,0);
          orderedDinnerValues.push(valueForSpecificDate)
        }
       })
      return orderedDinnerValues
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
            }
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
