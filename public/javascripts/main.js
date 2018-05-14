import Header, { elements } from './Header.js'
// import login from './login.js'
const header = new Header('[data-module-header]')

// --- Switch Tab
const dailyMood = document.querySelector('.daily-mood')
const dailySpeed = document.querySelector('.daily-speed')
const dailyStart = document.querySelector('.daily-start')
const btnMoods = document.querySelectorAll('.js-mood-start')
const btnsSpeed = document.querySelectorAll('.js-speed')

btnMoods.forEach(addEventListenerA)
btnsSpeed.forEach(addEventListenerB)

function addEventListenerA(btn) {
  btn.addEventListener('click', changeToMood)
}
function addEventListenerB(btn) {
  btn.addEventListener('click', changeToSpeed)
}

function changeToMood() {
  hideDiv(dailyStart)
  showDiv(dailyMood)
}

function changeToSpeed() {
  hideDiv(dailyMood)
  hideDiv(dailyStart)
  showDiv(dailySpeed)
}

function hideDiv(el) {
  el.classList.add('hidden')
}

function showDiv(el) {
  el.classList.remove('hidden')
}

// --- Change Mood Icon

const perfect = document.querySelector('.js-perfect')
const good = document.querySelector('.js-good')
const bad = document.querySelector('.js-bad')
const killMeNow = document.querySelector('.js-kill_me')
const moodIndicator = document.querySelector('.js-mood-indicator')
const moodIndicatorStart = document.querySelector('.js-mood-start')
const overview = document.querySelector('.overview')

perfect.addEventListener('click', event => replaceHTML('perfect'))
good.addEventListener('click', event => replaceHTML('good'))
bad.addEventListener('click', event => replaceHTML('bad'))
killMeNow.addEventListener('click', event => replaceHTML('kill_me'))

function replaceHTML(mood) {
  moodIndicator.innerHTML = `<img src="/images/${mood}.svg" width="100px"> <h2> Mood</h2 >`
  moodIndicatorStart.innerHTML = `<img class="js-mood-start" src="/images/${mood}.svg" alt="" width="100px">
    <h2 class="js-mood">Mood</h2>`
  backToDaily()
}

function backToDaily() {
  hideDiv(dailyMood)
  hideDiv(dailySpeed)
  showDiv(dailyStart)
  hideDiv(overview)
}

// --- Speed tab

const btnsTooSlow = document.querySelectorAll('.js-too-slow')
const btnsPerfect = document.querySelectorAll('.js-perfect-speed')
const btnsTooFast = document.querySelectorAll('.js-too-fast')
const btns = document.querySelectorAll('.speed-btn')
const needleSlow = document.querySelector('.js-needle-slow')
const needleFast = document.querySelector('.js-needle-fast')
const needlePerfect = document.querySelector('.js-needle-perfect')
const green = document.querySelector('#js-green')
const orangeRight = document.querySelector('#js-orange-right')
const orangeLeft = document.querySelector('#js-orange-left')

btnsTooSlow.forEach(changeToSlow)
btnsPerfect.forEach(changeToPerfect)
btnsTooFast.forEach(changeToFast)

// function ListenerSpeed(btn, speed) {
//   btn.addEventListener('click', speed)
// }

function changeToSlow(btn) {
  btn.addEventListener('click', e => {
    hideDiv(needleFast)
    hideDiv(needlePerfect)
    hideDiv(green)
    hideDiv(orangeRight)
    showDiv(needleSlow)
    showDiv(orangeLeft)
  })
}

function changeToFast(btn) {
  btn.addEventListener('click', e => {
    hideDiv(needleSlow)
    hideDiv(needlePerfect)
    hideDiv(green)
    hideDiv(orangeLeft)
    showDiv(needleFast)
    showDiv(orangeRight)
  })
}

function changeToPerfect(btn) {
  btn.addEventListener('click', e => {
    hideDiv(needleSlow)
    hideDiv(needleFast)
    hideDiv(orangeLeft)
    hideDiv(orangeRight)
    showDiv(needlePerfect)
    showDiv(green)
  })
}

// ---> login

// toggleButtons() {
//   this.btns.forEach(btn => btn.classList.toggle('active-btn'))
// }

// getAll(sel) {
//   return Array.from(this.el.querySelectorAll(sel))
// }

const buttonLogin = document.querySelector('.login')
const buttonRegister = document.querySelector('.register')
const loginInputs = document.querySelectorAll('.input-login')
const inputs = document.querySelectorAll('input')
const inputName = document.querySelector('.input-name')

buttonLogin.addEventListener('click', changeToLogin)
buttonRegister.addEventListener('click', changeToRegister)

function changeToLogin() {
  loginInputs.forEach(input => input.classList.remove('display-none'))
  buttonLogin.classList.add('transform-translate')
  buttonRegister.classList.add('display-none')
  buttonLogin.classList.add('go-to-moodpage')
  changeToDaily()
}

function changeToRegister() {
  inputs.forEach(input => input.classList.remove('display-none'))
  buttonLogin.classList.add('display-none')
  buttonRegister.classList.add('transform-translate')
}

function changeToDaily() {
  const body = document.querySelector('body')
  const moodPage = document.querySelector('.go-to-moodpage')
  const loginScreen = document.querySelector('.login-screen')
  // const dailyStart = document.querySelector('.daily-start')
  moodPage.addEventListener('click', e => {
    loginScreen.classList.add('hidden')
    dailyStart.classList.remove('hidden')
    body.classList.remove('login-bg')
  })
}
