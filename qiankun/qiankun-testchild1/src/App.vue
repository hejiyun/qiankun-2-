<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-view ></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
}
</script>


