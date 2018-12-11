<template>
  <v-app>
    <Header v-if="isAuth"/> 
    <v-content>
      <router-view></router-view>
    </v-content>  
  </v-app>
</template>

<script>

import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      person: {
        id: 1,
        name: "Renan",
        age: 25,
      }
    }
  },
  methods: {
    
  },
  computed: {
    isAuth: function(){
      return true;
    }
  }
}
</script>
