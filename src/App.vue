<template>
  <div id="app">
    <Header/>
    <router-view
      :data="data"
    />
  </div>
</template>

<script>
import Data from '@/fakeData.json'
import Header from '@/components/Header.vue'
export default {
  data(){
    return{
      data: Data
    }
  },
  
  name: 'app',
  components: {
    Header 
  }
}
</script>

