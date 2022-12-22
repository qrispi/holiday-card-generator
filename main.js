var toText = document.querySelector('.card-to')
var fromText = document.querySelector('.card-from')
var titleText = document.querySelector('.card-title')
var bodyText = document.querySelector('.card-paragraph')
var card = document.querySelector('.card')

var toForm = document.querySelector('#card-to')
var fromForm = document.querySelector('#card-from')
var titleForm = document.querySelector('#card-title')
var bodyForm = document.querySelector('#card-body')
var imageForm = document.querySelector('#card-image')
var colorForm = document.querySelector('#card-color')

var heading = document.querySelector('h1')

var button = document.querySelector('button')

button.addEventListener('click', createCard)

function createCard(event) {
  event.preventDefault()
  if (checkFields()) {
    doBonus()
    toText.innerText = `To: ${toForm.value}`
    fromText.innerText = `From: ${fromForm.value}`
    titleText.innerText = titleForm.value
    bodyText.innerText = bodyForm.value
    clearFields()
  }
}

function checkFields() {
  if (toForm.value && fromForm.value && titleForm.value && bodyForm.value) {
    heading.innerText = 'Make Another Holiday Card!'
    return true
  } else {
    heading.innerHTML = '<h1 id="h1-heading">Please fill out all fields below!</h1><p id="p-heading">(Bonus! can be left blank)</p>'
    return false
  }
}

function clearFields() {
  toForm.value = ''
  fromForm.value = ''
  titleForm.value = ''
  bodyForm.value = ''
  imageForm.value = ''
  colorForm.value = ''
}

function doBonus() {
  if (imageForm.value) {
    card.style.backgroundImage = imageForm.value
  } else {
    card.style.backgroundImage = 'url(https://images.unsplash.com/photo-1422207134147-65fb81f59e38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1558&q=80)'
  }
  if (colorForm.value) {
    card.style.color = colorForm.value
  } else {
    card.style.color = 'black'
  }
}