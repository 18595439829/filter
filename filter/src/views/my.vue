<template>
  <div>
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
                  @click="handleSubmit('formCustom')">Submit</i-button>
        <i-button @click="handleReset('formCustom')"
                  style="margin-left: 8px">Reset</i-button>
      </form-item>
    </i-form>
  </div>
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
            callback(
              new Error('密码必须为8~16位数字、大小写字母或特殊字符组成')
            )
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
        passwd: [{ validator: validatePass, trigger: 'blur' }],
        passwdCheck: [{ validator: validatePassCheck, trigger: 'blur' }]
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
      // var strength = 0
      // if (8 < value.length < 16 && value.match(/[\da-zA-Z]+/)) {
      //   if (value.match(/\d+/)) {
      //     strength++
      //     console.log('数字校验', strength)
      //   }
      //   if (value.match(/[a-z]+/)) {
      //     strength++
      //     console.log('小写字母校验', strength)
      //   }
      //   if (value.match(/[A-Z]+/)) {
      //     strength++
      //     console.log('大写字母校验', strength)
      //   }
      //   if (value.match(/[!@#*$-_()+=&￥?.,]+/)) {
      //     strength++
      //     console.log('特殊字符校验', strength)
      //   }
      // }
      // if (strength >= 3) {
      //   return true
      // }
      // return false
    }
  }
}
</script>
