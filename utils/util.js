const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// 强制保留的两位小数
const formatNum = num => {
  var value = Math.round(parseFloat(num) * 100) / 100;
  var values = value.toString().split(".");
  if (values.length == 1) {
    value = value.toString() + ".00";
    return value;
  }
  if (values.length > 1) {
    if (values[1].length < 2) {
      value = value.toString() + "0";
    }
    return value;
  }
}

module.exports = {
  formatTime,
  formatNum
}
