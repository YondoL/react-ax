module.exports = {
  formatTel: (number) => {
    let str = number.toString().match(/\d/g)
    str.splice(3, 4, '*', '*', '*', '*')
    str = str.join('')
    return str
  }
}