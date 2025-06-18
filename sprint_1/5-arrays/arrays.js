/**
 * Задание 1.
 Напиши метод `sum(arr)`, которая возвращает сумму всех чисел в массиве.
 **/

// Код задания 1
let arr = [3,2,3];
let result = 0;
for (let num of arr){
    result += num;
}
console.log(result); // 8


/** Задание 2.
Напиши метод `unique(arr)`, которая возвращает новый массив без повторяющихся значений.
 **/

// Код задания 2
const unique = arr => [...new Set(arr)]; // ... помогает разбить set на отдельные элементы
console.log(unique(arr)); // [3, 2]


/**
  Задание 3.
` Напиши метод filterRange(arr, a, b)` — возвращает элементы из `arr` в диапазоне `[a, b]`.
 **/

// Код задания 3
function filterRange(arr, a, b){
  return arr.filter(i => i >= a && i <= b);
}
let arr2 = [1, 2, 3, 4, 5];
console.log(filterRange(arr2, 1, 3)); // [1, 2, 3]
console.log(filterRange(arr2, 3, 5)); // [3, 4, 5]


/** Задание 4.
Напиши метод`sortDesc(arr)`, сортирующую числовой массив по убыванию без изменения оригинала.
 **/

// Код задания 4
const sortDesc = arr => arr.sort((a, b) => b - a);
let arr3 = [6, 3, 8, 1, 9, 1];
console.log(sortDesc(arr3)); // [9, 8, 6, 3, 1, 1]


/** Задание 5.
` Напиши метод flatMapDemo(arr), которая для каждого элемента x из массива arr создаёт новый массив
    из двух элементов: [x, x * 2], а затем объединяет все эти массивы в один плоский массив.
 Используй flatMap
 **/

// Код задания 5
const flatMapDemo = arr => arr.flatMap((x) => [x, x * 2]);
let arr4 = [1, 2, 3, 4];
console.log(flatMapDemo(arr4)); // [1, 2, 2, 4, 3, 6, 4, 8]


/** Задание 6.
`Напиши метод groupBy(arr, keyFunc)` — группирует элементы массива по ключу,
 возвращая объект, где ключи — результат `keyFunc`.
 **/

// Код задания 6
function groupBy(arr, keyFunc) {
  const group = {};
  arr.forEach(i => {
    const key = keyFunc(i);
    if (!group[key]){
      group[key] = [];
    }
    group[key].push(i);
  });
  return group;
}
let arr5 = [
  {name: 'Иван', age: 15},
  {name: 'Василя', age: 19},
  {name: 'Петр', age: 15},
  {name: 'Мария', age: 19},
  {name: 'Соня', age: 19},
];
console.log(groupBy(arr5, x => x.age)); // {15: Array(2), 19: Array(3)}


/** Задание 7.
`Напиши метод rotate(arr, n)` — возвращает новый массив, в котором элементы сдвинуты вправо на `n` позиций (цикл).
 Пример: `rotate([1,2,3,4,5], 2)` → `[4,5,1,2,3]`.
 **/

 // Код задания 7
function rotate(arr, n){
  const result = [...arr];
  n = n % arr.length;
  if (n<0){
    n = arr.length + n;
  }
  for (let i = 0; i < n; i++){
    const ElementDelete = result.pop(); 
    result.unshift(ElementDelete);
  }
  return result;
}

let arr6 = [1, 2, 5, 4, 7];
console.log(rotate(arr6, 2)); // [4, 5, 1, 2, 3]
console.log(rotate(arr6, -3)); // [3, 4, 5, 1, 2]