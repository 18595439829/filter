<template>
    <Card class="my"
          :style="{margin: styles + 'px'}">
        <i-form ref="formCustom"
                :model="formCustom"
                :rules="ruleCustom"
                :label-width="80">
            <form-item style="width: 500px;"
                       label="输入密码"
                       prop="passwd">
                <i-input type="password"
                         v-model="formCustom.passwd"></i-input>
                {{formCustom.passwd}}
            </form-item>
            <form-item style="width: 500px;"
                       label="确认密码"
                       prop="passwdCheck">
                <i-input type="password"
                         v-model="formCustom.passwdCheck"></i-input>
                {{formCustom.passwdCheck}}
            </form-item>
            <form-item>
                <i-button type="primary"
                          @click="handleSubmit('formCustom')">Submit
                </i-button>
                <i-button @click="handleReset('formCustom')"
                          style="margin-left: 8px">Reset
                </i-button>
            </form-item>
            <form-item>
                <i-button type="primary"
                          @click="randomPwd">随机密码
                </i-button>
                {{randomPass}}
            </form-item>
        </i-form>
        <div class="bgImg">
        </div>
        <i-table id="tableTime"
                 :columns="columns1"
                 :data="data1"></i-table>
    </Card>
</template>
<script>
    export default {
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'))
                } else {
                    if (this.checkStrong(value)) {
                        callback()
                    } else {
                        callback(new Error('密码必须为8~16位数字、大小写字母或特殊字符组成'))
                    }
                    // if (this.formCustom.passwdCheck !== '') {
                    //   // 对第二个密码框单独验证
                    //   this.$refs.formCustom.validateField('passwdCheck')
                    // } else {

                    // }
                }
            }
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'))
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('两次密码输入不一致!'))
                } else {
                    callback()
                }
            }

            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: ''
                },
                ruleCustom: {
                    passwd: [{validator: validatePass, trigger: 'blur'}],
                    passwdCheck: [{validator: validatePassCheck, trigger: 'blur'}]
                },
                randomPass: '',
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: '开始时间',
                        key: 'startTime',
                        render: (h, params) => {
                            return h(
                                'div',
                                {
                                    class: {startTime: true}
                                },
                                params.row.startTime
                            )
                        }
                    },
                    {
                        title: '结束时间',
                        key: 'endTime',
                        render: (h, params) => {
                            return h(
                                'div',
                                {
                                    class: {endTime: true}
                                },
                                params.row.endTime
                            )
                        }
                    },
                    {
                        title: '预约时间',
                        key: 'orderTime',
                        render: (h, params) => {
                            return h(
                                'div',
                                {
                                    class: {orderTime: true}
                                },
                                params.row.orderTime
                            )
                        }
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        startTime: '2018-01-01 00:11:22',
                        orderTime: '2018-01-01 00:11:22',
                        endTime: '2018-01-01 00:11:22',
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        startTime: '2018-01-01 00:11:22',
                        orderTime: '2018-01-01 00:11:22',
                        endTime: '2018-01-01 00:11:22',
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        startTime: '2018-01-01 00:11:22',
                        orderTime: '2018-01-01 00:11:22',
                        endTime: '2018-01-01 00:11:22',
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        startTime: '2018-01-01 00:11:22',
                        orderTime: '2018-01-01 00:11:22',
                        endTime: '2018-01-01 00:11:22',
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        computed: {
            startTime() {
                return document.getElementsByClassName('startTime')
            },
            styles: {
                get() {
                    return '20'
                },
                set() {

                }
            }
        },
        watch: {
            startTime(newV, oldV) {
                console.log(newV[0].offsetWidth)
                if (64 < newV[0].offsetWidth < 112) {
                    this.columns1 = [
                        {
                            title: 'Name',
                            key: 'name'
                        },
                        {
                            title: 'Age',
                            key: 'age'
                        },
                        {
                            title: '开始时间',
                            key: 'startTime',
                            width: 64,
                            render: (h, params) => {
                                return h(
                                    'div',
                                    {
                                        class: {startTime: true}
                                    },
                                    params.row.startTime
                                )
                            }
                        },
                        {
                            title: '结束时间',
                            key: 'endTime',
                            width: 64,
                            render: (h, params) => {
                                return h(
                                    'div',
                                    {
                                        class: {endTime: true}
                                    },
                                    params.row.endTime
                                )
                            }
                        },
                        {
                            title: '预约时间',
                            key: 'orderTime',
                            width: 64,
                            render: (h, params) => {
                                return h(
                                    'div',
                                    {
                                        class: {orderTime: true}
                                    },
                                    params.row.orderTime
                                )
                            }
                        },
                        {
                            title: 'Address',
                            key: 'address'
                        }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate(valid => {
                    if (valid) {
                        console.log(this.formCustom.passwd)
                        this.$Message.success('Success!')
                    } else {
                        this.$Message.error('Fail!')
                    }
                })
            },
            handleReset(name) {
                this.$refs[name].resetFields()
            },
            checkStrong(value) {
                let reg = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\`\~\!\@\#\$\%\^\&\*\(\)\_\+\-\=\{\}\|\[\]\:\;\'\<\>\?\,\.]).{8,16}$/
                if (reg.test(value)) {
                    return true
                } else {
                    return false
                }
            },
            randomPwd() {
                this.randomPass = this.createPassword(8, 8)
            },
            //  随机密码生成函数
            createPassword(min, max) {
                //可以生成随机密码的相关数组
                var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
                var english = [
                    'a',
                    'b',
                    'c',
                    'd',
                    'e',
                    'f',
                    'g',
                    'h',
                    'i',
                    'j',
                    'k',
                    'l',
                    'm',
                    'n',
                    'o',
                    'p',
                    'q',
                    'r',
                    's',
                    't',
                    'u',
                    'v',
                    'w',
                    'x',
                    'y',
                    'z'
                ]
                var ENGLISH = [
                    'A',
                    'B',
                    'C',
                    'D',
                    'E',
                    'F',
                    'G',
                    'H',
                    'I',
                    'J',
                    'K',
                    'L',
                    'M',
                    'N',
                    'O',
                    'P',
                    'Q',
                    'R',
                    'S',
                    'T',
                    'U',
                    'V',
                    'W',
                    'X',
                    'Y',
                    'Z'
                ]
                var special = ['-', '_', '#']
                var config = num
                    .concat(english)
                    .concat(ENGLISH)
                    .concat(special)

                //先放入一个必须存在的
                var arr = []
                arr.push(getOne(num))
                arr.push(getOne(english))
                arr.push(getOne(ENGLISH))
                arr.push(getOne(special))

                //获取需要生成的长度
                var len = min + Math.floor(Math.random() * (max - min + 1))

                for (var i = 4; i < len; i++) {
                    //从数组里面抽出一个
                    arr.push(config[Math.floor(Math.random() * config.length)])
                }

                //乱序
                var newArr = []
                for (var j = 0; j < len; j++) {
                    newArr.push(arr.splice(Math.random() * arr.length, 1)[0])
                }

                //随机从数组中抽出一个数值
                function getOne(arr) {
                    return arr[Math.floor(Math.random() * arr.length)]
                }

                return newArr.join('')
            }
        },
        mounted() {
            console.log(document.getElementsByClassName('my')[0])
        }
    }
</script>
<style>
    .my {
        height: 2000px;
        position: relative;
    }

    .bgImg {
        /* position: fixed; */
        width: 300px;
        height: 300px;
        border: 10px solid gray;
        background-image: url(.././assets/Koala.jpg);
        background-size: 300px;
        background-color: #2c3e50;
        /* background-origin: content-box; */
        /* background-attachment: inherit; */
        background-repeat: no-repeat;
        background-position: 100%;
    }
</style>
