export default {
  checkField: (type, value) => {
    // if (!type || !value) return false
    switch (type) {
      case 'require':
        if (value) return true
        return false
      case 'telephone':
        if (!(/^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value))) {
          return false
        } else {
          return true
        }
      case 'email':
        let emailPatrn = /^(?:\w+\.?)*\w+@(?:\w+\.)*\w+$/
        if (emailPatrn.test(value)) {
          return true
        } else {
          return false
        }
      case 'password':
        // 只能输入6-20个字母、数字、下划线
        let passwordPatrn = /^(\w){6,20}$/
        if (!passwordPatrn.exec(value)) return false
        return true
      case 'integer':
        let integerPatrn = /^[0-9]{1,20}$/
        if (!integerPatrn.exec(value)) return false
        return true
    }
  }
}
