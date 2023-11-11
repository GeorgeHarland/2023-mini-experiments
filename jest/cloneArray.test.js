import cloneArray from "./cloneArray";

test('Returns clone of original array', () => {
  const inputArray = [1, 2, 7]
  expect(cloneArray(inputArray)).toEqual([1, 2, 7])
  expect(cloneArray(inputArray)).toEqual(inputArray)
  expect(cloneArray(inputArray)).not.toBe(inputArray)
})