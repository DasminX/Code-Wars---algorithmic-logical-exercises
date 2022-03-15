"use strict"

// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

function solve(str) {
  const vowels = ["a", "e", "i", "o", "u"]
  let word = ""
  let temporaryWord = ""

  const splitStrArr = str.split("")

  splitStrArr.forEach((letter) => {
    vowels.includes(letter) ? (temporaryWord += letter) : (temporaryWord = "")
    if (temporaryWord.length > word.length) word = temporaryWord
  })
  return word.length
}

solve("strengthlessnesses")
solve("codewarriors")
solve("suoidea")
solve("ultrarevolutionariees")
solve("strengthlessnesses")
solve("cuboideonavicuare")
solve("chrononhotonthuooaos")
solve("iiihoovaeaaaoougjyaw")
