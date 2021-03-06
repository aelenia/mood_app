import { $, $$ } from './utils/helpers.js'

export default class Header {
  constructor(sel) {
    this.el = $(sel)
    this.btns = this.getAll('.js-changer')
    this.btns.forEach(btn => {
      btn.addEventListener('click', e => this.toggleButtons())
    })
  }

  toggleButtons() {
    this.btns.forEach(btn => btn.classList.toggle('active-btn'))
  }

  getAll(sel) {
    return Array.from(this.el.querySelectorAll(sel))
  }
}

export const elements = {
  btnDaily: $('.daily-changer'),
}

const btnDaily = $('.daily-changer')
const btnOverview = $('.overview-changer')
const dailyMood = document.querySelector('.daily-mood')
const dailySpeed = document.querySelector('.daily-speed')
const dailyStart = document.querySelector('.daily-start')
const overview = document.querySelector('.overview')
const userIcon = document.querySelector('.user')
const templateEl = document.querySelector('template')

btnDaily.addEventListener('click', e => backToDaily())

function backToDaily() {
  dailyMood.classList.add('hidden')
  dailySpeed.classList.add('hidden')
  dailyStart.classList.remove('hidden')
  overview.classList.add('hidden')
}

btnOverview.addEventListener('click', e => {
  dailyMood.classList.add('hidden')
  dailySpeed.classList.add('hidden')
  dailyStart.classList.add('hidden')
  overview.classList.remove('hidden')
})

userIcon.addEventListener('click', e => logOutScreen())

function logOutScreen() {
  templateEl.insertAdjacentHTML(
    'afterbegin',
    '<div class="user-logout logout">Logout</div>',
  )
}
