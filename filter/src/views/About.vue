<template>
  <div class="about">
    <h1>This is an about page {{RMB | capitalize}}</h1>
    <div>
      <h3>调用vue原型链封装函数</h3>
      E-mail:<i-input style="width:200px;" v-model="emailIpt"></i-input>{{emailValue}}
    网址: <i-input style="width:200px;" v-model="netIpt"></i-input>{{netValue}}
    </div>
    <div>
      <p>计时器</p>
      <i-input style="width: 200px;" v-model="timer"></i-input>
      <i-button @click="stopTimer">
        停止计时
      </i-button>
      <i-button @click="startTimer">
        开始计时
      </i-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      RMB: 1,
      emailIpt: "",
      netIpt: "",
      timer: 1,
      Timer: null
    };
  },
  computed: {
    emailValue() {
      return this.vueFunc.changeEmail(this.emailIpt);
    },
    netValue() {
      return this.vueFunc.changeNet(this.netIpt);
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      if (value == "1") {
        return "男";
      } else {
        return "女";
      }
    }
  },
  methods: {
    startTimer () {
      this.stopTimer()
      this.Timer = window.setInterval( () => {
        this.timer ++
      }, 1000)
    },
    stopTimer () {
      window.clearInterval(this.Timer)
    }
  }
};
</script>
