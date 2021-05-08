<template>
  <div class="hello">
    <div>loading(主应用缓存各子应用需要手动控制应用加载)</div>
    这里是主页的内容 {{count}}
    <button @click="setMsg">点击存储信息</button>
  </div>
</template>

<script>
import actions from "../shared/action";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      count: 0
    }
  },
  mounted() {
     actions.onGlobalStateChange((state, prevState) => {
      // state: 变更后的状态; prevState: 变更前的状态
      this.count = state.token
      console.log("主应用观察者：token 改变前的值为 ", prevState.token);
      console.log("主应用观察者：登录状态发生改变，改变后的 token 的值为 ", state.token);
    });
  },
  methods: {
    setMsg() {
      this.count++
      const token = this.count
      actions.setGlobalState({ token });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>