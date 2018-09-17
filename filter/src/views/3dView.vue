<template>
  <div class="scene ">
    <div class="cube">
      <div class="side back"></div>
      <div class="side left"></div>
      <div class="side right"></div>
      <div class="side top"></div>
      <div class="side bottom"></div>
      <div class="side front"></div>
    </div>
  </div>
</template>
<script>
export default {
  // created() {
  //   setInterval(() => {
  //     // console.log(this)
  //     document
  //       .getElementsByClassName('cube')[0]
  //       .style('transform', 'rotateX(90deg)')
  //   }, 1000)
  // }
}
</script>
<style>
.scene {
  perspective: 800px;
  padding: 100px;
}
.cube {
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  transform-origin: 50% 50% 100px;
  transform: rotateY(360px);
  transition: all 2s;
}
.side {
  position: absolute;
  width: 200px;
  height: 200px;
  background: gray;
}
.back {
  transform: translateZ(-100px);
}
.left {
  transform: translateX(-100px) rotateY(90deg);
}
.right {
  transform: translateX(100px) rotateY(90deg);
}
.top {
  transform: translateY(-100px) rotateX(90deg);
}
.bottom {
  transform: translateY(100px) rotateX(90deg);
}
.front {
  transform: translateZ(100px);
}
</style>
