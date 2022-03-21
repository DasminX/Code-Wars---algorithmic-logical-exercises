/* Description:
Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.

Rules:
Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
Strings will consist of uppercase letters only
Only two groups to a fight.
Group whose total power (A + B + C + ...) is bigger wins.
If the powers are equal, it's a tie.
Examples:
  battle("ONE", "TWO"); // => "TWO"`
  battle("ONE", "NEO"); // => "Tie!" */

function battle(x, y) {
  const stringArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  let xPower = 0
  let yPower = 0

  for (const letter of x) {
    xPower += stringArr.indexOf(letter) + 1
  }

  for (const letter of y) {
    yPower += stringArr.indexOf(letter) + 1
  }

  if (xPower === yPower) return "Tie!"
  return xPower > yPower ? x : y
}
