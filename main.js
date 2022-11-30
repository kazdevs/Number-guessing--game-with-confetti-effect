const inputField = document.querySelector('#input')
const btn = document.querySelector('#btn')
const textDisplay = document.querySelector('#textDisplay')
let counter = 0
const upperLimit = 10
const upperLimitSpan = document.getElementById('upper-limit')
const correctGuess = document.getElementById('correct-guess')
const randomNumber = Math.floor(Math.random() * upperLimit) + 1

upperLimitSpan.innerHTML = upperLimit

btn.addEventListener('click', function () {
  let userGuess = inputField.value
  counter += 1
  if (userGuess > randomNumber) {
    textDisplay.innerHTML = 'You guessed too high, try again'
  } else if (userGuess < randomNumber) {
    textDisplay.innerHTML = 'You guessed too low, try again'
  } else {
    textDisplay.innerHTML = `You guessed correctly in <span></span> ${counter} attempts`
    correctGuess.innerHTML = `The correct guess is ${randomNumber}`
    confettify()
  }
})

const jsConfetti = new JSConfetti()
async function confettify() {
  await jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    confettiRadius: 6,
    confettiNumber: 500,
    emojiSize: 50,
    confettiNumber: 200,
  })
  document.getElementById('game-over').style.display = 'flex'
}

document.getElementById('reload').addEventListener('click', function () {
  window.location.reload()
})
