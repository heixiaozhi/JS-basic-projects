// 导入用户数据
import { reviews } from './js/data.js'

// 获取dom
// array
const btnContainer = document.querySelector('.review-card__body-btns')
const userImg = document.querySelector('.review-card__body-img>img')
const userName = document.querySelector('.review-card__body-name')
const userJob = document.querySelector('.review-card__body-job')
const userDesc = document.querySelector('.review-card__body-desc')
const randomBtn = document.querySelector('.review-card__body-btn--random')

const MIN_INDEX = 1
const MAX_INDEX = reviews.length

// 设置当前用户下标
let userLength = reviews.length
let currentUserIndex = 0

function getUserIndex(direction) {
  if (direction === 'left') {
    return currentUserIndex === 0 ? userLength - 1 : currentUserIndex - 1
  }
  return currentUserIndex === userLength - 1 ? 0 : currentUserIndex + 1
}

function setCurrentUser(index) {
  const user = reviews[index]
  currentUserIndex = index

  // src属性可以直接获取
  userImg.src = user.img
  userJob.textContent = user.job
  userName.textContent = user.name
  userDesc.textContent = user.text
}

// 点击的回调函数
function handleClick(e) {
  // 获取点击的元素 使用e.target
  // 监听函数中的this等于绑定监听函数的元素

  // dataset获取自定义属性，getAttribute或者获取属性
  const direction = e.target.dataset.id
  currentUserIndex = getUserIndex(direction)
  setCurrentUser(currentUserIndex)
}

function handleRandomUser() {
  // 生成MIN_INDEX 到 MAX_INDEX 之间的随机数
  const randomIndex =
    Math.floor(Math.random() * (MAX_INDEX - MIN_INDEX + 1)) + MIN_INDEX
  setCurrentUser(randomIndex - 1)
}

// 给btn direction的父元素添加监听事件
btnContainer.addEventListener('click', handleClick)
randomBtn.addEventListener('click', handleRandomUser)
