const isNarcissistic = (n) =>
  n ===
  n
    .toString()
    .split("")
    .map((el) => Math.pow(+el, n.toString().length))
    .reduce((acc, cur) => acc + cur, 0)

isNarcissistic(2321)
