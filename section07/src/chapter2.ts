/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);

function myMap<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

myMap(arr, (it) => it * 2);
myMap(["a", "b"], (it) => parseInt(it));

/**
 * forEach 메서드
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function myForEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

myForEach(arr2, (it) => {
  console.log(it.toFixed());
});

myForEach(["1", "2"], (it) => {
  console.log(parseInt(it));
});
