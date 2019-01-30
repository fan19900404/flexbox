/**
 * 本方法用于计算页面根 rem 的大小
 */
(function init () {
  const flexBox = () => {
    let fontSize = document.documentElement.clientWidth / 7.5
    if (fontSize > 100) {
      fontSize = 100
    }
    document.documentElement.style.fontSize = `${fontSize}px`
    /** 在部分浏览器中，设置fontSize只会，实际1rem不等于fontSize，所以这里多一个判断，获取实际大小值 */
    var div = document.createElement('div')
    div.style = 'height:1rem;width:1rem'
    document.body.appendChild(div)
    if (div.offsetHeight !== fontSize) {
      fontSize = (fontSize * fontSize / div.offsetHeight)
    }
    document.body.removeChild(div)
    document.documentElement.style.fontSize = `${fontSize}px`
  }
  flexBox()
  window.addEventListener('resize', flexBox)
}())
