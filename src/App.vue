<template>
  <v-app> 
    <v-content>
      <router-view name="header">
        <Header/>
    </router-view>
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
