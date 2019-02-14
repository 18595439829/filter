<template>
  <div class="all">
    <Button @click="click('1')">点击1</Button>
    <Button @click="click('2')">点击2</Button>
    <div v-if="">
      lalalla
    </div>
    <div>
      <div class="one">
      <Tooltip content="Here is the prompt text">
        <div class="content">
          A ball
        </div>
      </Tooltip>
    </div>
    <div class="two">
      <Tooltip content="Here is the prompt text">
        <div class="content">
          A balloon appears when the mouse passes over this text
        </div>
      </Tooltip>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      spinShow: true
    }
  },
  methods: {
    click(num) {
      if(num === '2') {
        this.spinShow = true
      }
    }
  }
}
</script>
<style>
.all {
  width: 200px;
  height: 100px;
  display: flex;
  position: relative
}
.all .one {
  flex: 1;
  width: 100px;
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.all .two {
  flex: 1;
  width: 100px;
  height: 100px;  
}
.all .content {
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
