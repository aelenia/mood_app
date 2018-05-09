import Header from './Header.js'
const header = new Header('[data-module-header]')

// --- Switch Tab
const dailyMood = document.querySelector('.daily-mood')
const dailySpeed = document.querySelector('.daily-speed')
const dailyStart = document.querySelector('.daily-start')
const btnMoods = document.querySelectorAll('.js-mood')
const btnsSpeed = document.querySelectorAll('.speed')

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

perfect.addEventListener('click', event => replaceHTML('perfect'))
good.addEventListener('click', event => replaceHTML('good'))
bad.addEventListener('click', event => replaceHTML('bad'))
killMeNow.addEventListener('click', event => replaceHTML('kill_me'))

function replaceHTML(mood) {
  //moodIndicator.innerHTML.replace('perfect_mood', 'good')
  moodIndicator.innerHTML = `<img src="/images/${mood}.svg" width="100px"> <h2> Mood</h2 >`
}
