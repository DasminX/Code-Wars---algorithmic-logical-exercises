function hydrate(str) {
  let numbersArr = str
    .match(/\d+/g)
    .map((el) => +el)
    .reduce((acc, cur) => (acc += cur), 0)

  return numbersArr === 1
    ? `${numbersArr} glass of water`
    : `${numbersArr} glasses of water`
}
