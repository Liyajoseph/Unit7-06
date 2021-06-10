let age = Math.floor(Math.random() * 20 + 1)
let guess = 0

do {
  guess = parseInt(prompt('Guess my age!'))
  if (guess > age) {
    alert('Yikes! Too high. Try again')
  } else if (guess < age) {
    alert('Oh dear! Too low. Try again')
  } else if (guess === age){
    alert('You got it right!')
    const ans = prompt('Would you like to play again? This time its challenging (yes/no)')
    if (ans === 'yes') {
      age = Math.floor(Math.random() * 50 + 1)
      guess = 0
    } else {
      alert('"You know your getting older when the candles don\'t fit on the cake"')
    }
  }
} while (age !== guess)
