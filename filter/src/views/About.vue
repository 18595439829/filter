<template>
  <div class="about">
    <h1>This is an about page {{RMB | capitalize}}</h1>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      RMB: 1
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      if (value == '1') {
        return '男'
      } else {
        return '女'
      }
    }
  }
}
</script>
