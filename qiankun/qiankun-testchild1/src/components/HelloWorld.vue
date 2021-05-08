<template>
  <div class="hello">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="電器" name="first">
        <h1>{{ msg }}</h1>
        <span>这是返回的信息: {{ sendMsg }}</span>
        <button @click="delCount">点击减少</button>
        <span>{{count}}</span>
        <button @click="$router.push('/qiankun-testchild1/test2')">跳轉2</button>
      </el-tab-pane>
      <el-tab-pane label="食品" name="second" >
      食品
      <button @click="$router.push('/qiankun-testchild1/test1')">跳轉</button>
      </el-tab-pane>
      <el-tab-pane label="服裝" name="third">服裝
        <button @click="$router.push('/qiankun-testchild2')">跳轉3</button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import actions from "../shared/action";
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sendMsg:'',
      count: 0,
      activeName: 'first'
    }
  },
   mounted() {
    // 注册观察者函数
    // onGlobalStateChange 第二个参数为 true，表示立即执行一次观察者函数
    if (window.__POWERED_BY_QIANKUN__) {
      actions.onGlobalStateChange(state => {
        console.log(state)
        const { token } = state;
        // 未登录 - 返回主页
        this.sendMsg = token
      }, true);
    }
  },
  methods: {
    delCount() {
      if (!this.sendMsg) return
      this.sendMsg --
      this.count++
      const token1 = this.sendMsg
      // actions.setGlobalState({ token: '项目99'})//改变全局状态
      actions.setGlobalState({ token: token1 });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
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