'use strict'
// dom被完全被加载和解析的时候执行代码
window.addEventListener('DOMContentLoaded', () => {
  let value = 0
  const number = document.querySelector('.counter-number>span')
  const btnList = document.querySelector('.counter-buttons')

  function changeColor() {
    if (value < 0) {
      number.style.color = 'green'
    } else if (value > 0) {
      number.style.color = 'red'
    } else {
      number.style.color = '#222'
    }
  }

  btnList.addEventListener('click', function (e) {
    const obj = e.target
    if (obj.classList.contains('decrease')) {
      value--
    } else if (obj.classList.contains('increase')) {
      value++
    } else {
      value = 0
    }
    changeColor()
    number.textContent = value
  })
})
