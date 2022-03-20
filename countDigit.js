"use strict"

function nbDig(n, d) {
  const arr = []
  for (let i = 0; i <= n; i++) {
    arr.push(i ** 2)
  }

  const allElArr = arr.join("").split("")

  let counter = 0

  allElArr.forEach((el) => {
    if (+el === d) counter++
  })

  return counter
}
