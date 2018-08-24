<template>
  <div class="about">
    <h1>This is an about page {{RMB | capitalize}}</h1>
    E-mail:<i-input style="width:200px;" v-model="emailIpt"></i-input>{{emailValue}}
    网址: <i-input style="width:200px;" v-model="netIpt"></i-input>{{netValue}}
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      RMB: 1,
      emailIpt: "",
      netIpt: ""
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
  }
};
</script>
