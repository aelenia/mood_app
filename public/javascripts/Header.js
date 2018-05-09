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
