<template lang="html">
  <div>
    <p>Filter By Date: </p>

      <select v-on:select="handleSelect" >
        <option v-for="meal in meals">{{meal.date}}</option>

    </select>
  </div>
</template>

<script>

import Meals from '../services/MealsService'
import {eventBus} from '@/main.js'

export default {
  name: "search-by-date",
  props: ['meals'],
  methods: {
    handleSelect(){

    }
  }

}
</script>

<style lang="css" scoped>
</style>
