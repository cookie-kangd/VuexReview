<template>
  <div id="app">
    <div style="text-align: center;margin-top: 10%;">{{count}}</div>
    <div style="text-align: center;margin-top: 5%;">
      <button @click="increment">点击+1</button>
      <button @click="decrement">点击-1</button>
    </div>
  </div>
</template>

<script>
//在组件中引入vuex
import {mapState,mapMutations} from 'vuex'

export default {
  name: 'App',
  computed: {
    //使用vuex state中定义的count
    ...mapState(['count'])
  },
  methods: {
    //使用vuex mutations中定义的increment和decrement方法
    ...mapMutations(['increment','decrement'])
  }
}
</script>

<style>

</style>
