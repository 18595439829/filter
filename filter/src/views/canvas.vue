<template>
  <div class="transfer">
    <!-- <canvas></canvas> -->
    <Transfer :data="data1"
              :titles="['坐席列表', '已分配坐席列表']"
              filterable
              :filter-method="filterMethod"
              :target-keys="targetKeys1"
              :render-format="render1"
              @on-change="handleChange1"
              @on-selected-change="selectChange"></Transfer>
    <Button @click="numberRankLeft"
            size="small">实例</Button>
    <div>
      {{testArr}}
    </div>
    <div>
      {{setArr}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data1: [
        { key: '001', name: '张三', number: '10009' },
        { key: '002', name: '王二', number: '10008' },
        { key: '003', name: '李四', number: '10007' },
        { key: '004', name: '刘五', number: '10006' },
        { key: '005', name: 'Eontent 5', number: '10005' },
        { key: '006', name: 'Bntent 6', number: '10004' },
        { key: '007', name: 'Content 7', number: '10003' },
        { key: '008', name: 'Dontent 8', number: '10002' },
        { key: '009', name: 'Aontent 9', number: '10001' },
        { key: '0010', name: '1223', number: '100010' },
        { key: '0011', name: '76532', number: '100011' },
        { key: '0012', name: '34526', number: '100012' }
      ],
      targetKeys1: [],
      testArr: [],
      setArrInit: [
        {
          name: '一号',
          num: '001'
        },
        {
          name: '一号',
          num: '001'
        },
        {
          name: '二号',
          num: '002'
        },
        {
          name: '三号',
          num: '003'
        }
      ]
    }
  },
  computed: {
    setArr() {
      return Array.from(new Set(this.setArrInit))
    }
  },
  methods: {
    render1(item) {
      return item.name + '-' + item.number
    },
    handleChange1(newTargetKeys, direction, moveKeys) {
      console.log('data', this.data1)
      console.log(newTargetKeys)
      console.log(direction)
      console.log(moveKeys)
      this.targetKeys1 = newTargetKeys
    },
    selectChange(sourceSelectedKeys, targetSelectedKeys) {},
    numberRankLeft() {
      console.log('左侧按工号排序')
    },
    nameRankLeft() {
      console.log('左侧按姓名排序')
    },
    numberRankRight() {
      console.log('右侧按工号排序')
    },
    nameRankRight() {
      console.log('右侧按姓名排序')
    },
    filterMethod(data, query) {
      console.log(query)
      return data
      // return data.label.indexOf(query) > -1
    },
    //左侧  按工号排序
    rankFuncNumLeft(way, numArray) {
      //   way:  排序方式对应数组的key;  numArray: 总数组
      let wayArr = []
      for (let j = 0; j < numArray.length; j++) {
        wayArr.push(numArray[j][way])
      }
      wayArr.sort((a, b) => {
        return a - b
      })
      let resultArr = []
      for (let l = 0; l < wayArr.length; l++) {
        for (let k = 0; k < numArray.length; k++) {
          if (wayArr[l] === numArray[k][way]) {
            resultArr.push(numArray[k])
          }
        }
      }
      return resultArr
    },
    // 按姓名排序
    rankFuncNameLeft(way, numArray) {
      //   way:  排序方式对应数组的key;  numArray: 总数组
       console.log(numArray)
      let wayArr = []
      for (let j = 0; j < numArray.length; j++) {
        wayArr.push(numArray[j][way])
      }
      console.log(wayArr)
      wayArr.sort(function(a, b) {
        return a.localeCompare(b)
      })
      console.log(wayArr)
      let resultArr = []
      for (let l = 0; l < wayArr.length; l++) {
        for (let k = 0; k < numArray.length; k++) {
          if (wayArr[l] === numArray[k][way]) {
            resultArr.push(numArray[k])
          }
        }
      }
      console.log(resultArr)
      return resultArr
    },
    //右侧  按工号排序
    rankFuncNum(array, way, numArray) {
      //  array: 要排序的数组对象;  way:  排序方式对应数组的key;  numArray: 数组对应的key数组
      let wayArr = []
      for (let j = 0; j < numArray.length; j++) {
        for (let i = 0; i < array.length; i++) {
          if (numArray[j] === array[i].key) {
            // console.log(numArray[j], array[i].key)
            wayArr.push(array[i][way])
          }
        }
      }
      wayArr = Array.from(new Set(wayArr))
      wayArr.sort((a, b) => {
        return a - b
      })
      console.log('wayArr', wayArr)
      let resultArr = []
      for (let l = 0; l < wayArr.length; l++) {
        for (let k = 0; k < array.length; k++) {
          if (wayArr[l] === array[k][way]) {
            console.log('kkk', k, array[k][way], array[k].key)
            resultArr.push(array[k].key)
          }
        }
      }
      return resultArr
      console.log('resultArr', resultArr)
    },
    //右侧 按姓名排序
    rankFuncName(array, way, numArray) {
      //  array: 要排序的数组对象;  way:  排序方式对应数组的key;  numArray: 数组对应的key数组
      let wayArr = []
      for (let j = 0; j < numArray.length; j++) {
        for (let i = 0; i < array.length; i++) {
          if (numArray[j] === array[i].key) {
            // console.log(numArray[j], array[i].key)
            wayArr.push(array[i][way])
          }
        }
      }
      wayArr = Array.from(new Set(wayArr))
      wayArr.sort(function(a, b) {
        return a.localeCompare(b)
      })
      console.log('按姓名排序', wayArr)
      let resultArr = []
      for (let l = 0; l < wayArr.length; l++) {
        for (let k = 0; k < array.length; k++) {
          if (wayArr[l] === array[k][way]) {
            console.log('kkk', k, array[k][way], array[k].key)
            resultArr.push(array[k].key)
          }
        }
      }
      return resultArr
      console.log('resultArr', resultArr)
    },
    testArrRank() {
      // this.testArr = ['1', '2', '5','3', '4']
      this.testArr = ['A', 'C', 'D', 'B', 'E']
      return this.testArr.sort((a, b) => {
        return a - b
      })
    }
  },
  mounted() {
    this.testArrRank()
    console.log(document.getElementsByClassName('ivu-transfer-list-search'))
    document.getElementsByClassName('ivu-transfer-list-search')[0].innerHTML +=
      "<div style='margin:5px 0;'><button type='button' class='ivu-btn ivu-btn-default ivu-btn-small numberRankLeft' @click='numberRankLeft'>按工号排序</button><button type='button' style='margin-left: 5px;'  class='ivu-btn ivu-btn-default ivu-btn-small nameRankLeft'  @click='nameRankLeft'>按姓名排序</button></div>"
    document.getElementsByClassName('ivu-transfer-list-search')[1].innerHTML +=
      "<div style='margin:5px 0;'><button  type='button' class='ivu-btn ivu-btn-default ivu-btn-small numberRankRight' @click='numberRankRight'>按工号排序</button><button  type='button' style='margin-left: 5px;' class='ivu-btn ivu-btn-default ivu-btn-small nameRankRight' @click='nameRankRight'>按姓名排序</button></div>"
    // console.log(document.getElementsByClassName('numberRankLeft')[0])
    document
      .getElementsByClassName('numberRankLeft')[0]
      .addEventListener('click', () => {
        console.log('左侧按工号排序', this.data1)
        this.data1 = this.rankFuncNumLeft('number', this.data1)
        // this.targetKeys1 = this.targetKeys1
        console.log('111', this.data1)
      })
    document
      .getElementsByClassName('nameRankLeft')[0]
      .addEventListener('click', () => {
        console.log('左侧按姓名排序')
        this.data1 = this.rankFuncNameLeft('name', this.data1)
      })
    document
      .getElementsByClassName('numberRankRight')[0]
      .addEventListener('click', () => {
        console.log('右侧按工号排序', this.targetKeys1)
        this.targetKeys1 = this.rankFuncNum(
          this.data1,
          'number',
          this.targetKeys1
        )
        console.log('111', this.targetKeys1)
      })
    document
      .getElementsByClassName('nameRankRight')[0]
      .addEventListener('click', () => {
        console.log('右侧按姓名排序')
        this.targetKeys1 = this.rankFuncName(
          this.data1,
          'name',
          this.targetKeys1
        )
      })
  }
}
</script>
<style>
.transfer {
  margin: 50px;
}
.ivu-transfer-list-content {
  margin-top: 30px;
}
canvas {
  position: absolute;
  border: 5px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 0 100px #4162a9;
  transform: translateZ(0);
}
</style>
