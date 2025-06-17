/**
 * Задание 1.
 Создай переменные всех основных типов данных: строка, число, булево, null, undefined, symbol, BigInt,
 объект и массив.
 Напиши typeof для каждой.
 пример: console.log(typeof test)
 **/


// Код задания 1
let a = "vasilya";
let b = 18;
let c = true;
let d = null;
let e;
let f = Symbol("f");
let g = BigInt("1111111111111111111111111")
let product = {
    name: "Apple AirPods Max",
    color: "purple",
    price: 60990,
};
let categories = ["MacBook", "AirPods", "iPad"];

console.log(typeof a) // string
console.log(typeof b) // number
console.log(typeof c) // boolean
console.log(typeof d) // object
console.log(typeof e) // undefined
console.log(typeof f) // symbol
console.log(typeof g) // bigint
console.log(typeof product) // object
console.log(typeof categories) // object


/**
 * Задание 2.
 Преобразуй строку "123" в число. Попробуй сложить "123" + 5 и Number("123") + 5.
 Объясни разницу.
 **/


// Код задания 2
let numbers = "123";
// Варианты изменения строки в число
let changeNumType = Number(numbers);
let changeNumType2 = +"123";
let example1 = numbers + 5; // 1235. число, которое мы прибавляем, преобразовывается в строку
let example2 = changeNumType + 5; //128. выполняется арифметическая опреация, происходит сложение чисел


/**
 * Задание 3.
 Напиши функцию, которая принимает аргумент и возвращает строку: "Это строка", "Это число",
 и т.п. — в зависимости от типа.
 **/


// Код задания 3
let info = 10;
function check(info) {
    if (typeof info == "string") {
        console.log("Это строка");
    }else if (typeof info == "number"){
        console.log("Это число");
    }else if (typeof info == "boolean"){
        console.log("Это логический тип");
    }else if (typeof info == "undefined"){
        console.log("Это переменная без значения");
    }else if (typeof info == "symbol"){
        console.log("Это символ");
    }else if (typeof info == "bigint"){
        console.log("Это переменная с большим количеством целых чисел");
    }else{
        console.log("Это объект");
    }
}
check(info);


/**
 Задание 4.
Чем отличаются undefined и null? Проверьте результат выполнения следующего кода.

    let a;
    let b = null;

    console.log(a == b);  // ?
    console.log(a === b); // ?
    console.log(typeof a); // ?
    console.log(typeof b); // ?
 **/

// Код задания 4
// Разница между undefined и null в том, что undefined означает, что значение еще не задано, а null значение намеренно пустое. Да и по typeof они выдают разные типы
console.log(a == b);  // true
console.log(a === b); // false
console.log(typeof a); // undefined
console.log(typeof b); // object