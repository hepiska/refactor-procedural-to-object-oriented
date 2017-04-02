'use strict'

let model = {
  getRandomNumber: (k, die) => {
    let value = Math.floor((Math.random() * 6) + 1)
    $(die).text(value)
  }
}

let controller = {
  getDice: () => {
    console.log('WAT')
    $('.dice').append('<div class="die">0</div>')
  },

  rollDice: () => {
    $('.die').each(model.getRandomNumber)
  }
}

let view = {
  eventClick: () => {
    $('#roller button.add').on('click', controller.getDice)
    $('#roller button.roll').on('click', controller.rollDice)
  }
}

$(document).ready(view.eventClick)
