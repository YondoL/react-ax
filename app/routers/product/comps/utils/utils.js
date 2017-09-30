module.exports = {
  formatTel: (number) => {
    let str = number.toString().match(/\d/g)
    str.splice(3, 4, '*', '*', '*', '*')
    str = str.join('')
    return str
  },
  queryString: (name) => {
    let result = location.search.match(new RegExp('[\?\&]' + name + '=([^\&]+)','i'))
    if (result === null || result.lenght < 1) {
      return ''
    }
    return result[1]
  }
}