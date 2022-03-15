// # 1

function isNice(arr) {
  if (arr.length === 0) return false // if array is empty return false

  let counter = 0 // variable counts if array length is equal to number of times when in some method every single value had a conditional passing value

  // if every element of arr is compliting condition below (if any of arguments fits the condition, counter increments)
  arr.every((el) => {
    if (
      arr.some((item) => {
        if (el !== item && (el === item - 1 || el == item + 1)) return true
        return false
      })
    )
      return ++counter

    return false
  })

  // if counter is equal to arr.length (some method always was true, because every single unit had a matching value, return true, else return false)
  if (counter !== arr.length) return false
  return true
}

isNice([2, 10, 9, 3])
