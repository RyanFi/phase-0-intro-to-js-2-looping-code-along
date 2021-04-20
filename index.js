function writeCards(nameArray, event) {
  let cardsArray = []
  for (let i = 0; i < nameArray.length; i++) {
      cardsArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
  }
  return cardsArray
}

function countDown(number) {
  while (number > 0) {
    console.log(number);
    number -= 1
  }
  console.log(number)
}