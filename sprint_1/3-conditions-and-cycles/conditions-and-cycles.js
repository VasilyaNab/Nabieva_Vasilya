/**
 * Задание 1.
 Напиши функцию, который проверяет возраст пользователя и выводит сообщение:
 "Доступ разрешён", если возраст больше или равен 18,
 "Доступ запрещён" — если меньше.
 **/


// Код задания 1
function checkAge(age) {
    if(age<18){
        console.log("Доступ запрещён");
    }else{
        console.log("Доступ разрешён");
    }
}

checkAge(10)
checkAge(18)
checkAge(26)


/**
 * Задание 2.
 Цикл: Выведи в консоль числа от 1 до 10.
 **/


// Код задания 2
// 1
for (let i = 1; i <= 10; i++){
    console.log(i)
}
// 2
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
// 3
do{
    console.log(i);
    i++
}while(i <= 10);


/**
 * Задание 3.
 Есть рейтинг от 1 до 5. Напиши функцию, которая принимает рейтинг и выводит строку из звёздочек:
 ★★★☆☆ для 3.
 **/


// Код задания 3
function rating(stars){
    let res = '';
    for(let i= 0; i < 5; i++){
        if (i < stars) res += "★";
        else res += "☆";
    }
    console.log(res);
}


/**
 * Задание 4.
 Напиши функцию, которая будет:
 Если сейчас между 22:00 и 07:00 — возвращать:
 "Ночная блокировка: операции недоступны".
 Иначе - возвращать: true
 Используй Date и if.
 **/

// Код задания 4
function block(){
    const time = new Date();
    const hour = time.getHours();
    if (hour >= 22 || hour < 7) return "Ночная блокировка: операции недоступны";
    return true;
}


/**
 * Задание 5.
 Есть массив товаров с ценами. Выведи список: в формате:
 1. Хлеб — 40₽
 2. Молоко — 60₽
 ..и т.д
 **/

const productList = [
    { name: 'Хлеб', price: 40 },
    { name: 'Молоко', price: 60 },
    { name: 'Сыр', price: 250 },
    { name: 'Яйца', price: 90 },
    { name: 'Масло', price: 120 },
    { name: 'Макароны', price: 70 },
    { name: 'Кофе', price: 300 },
    { name: 'Чай', price: 150 },
    { name: 'Сахар', price: 80 },
    { name: 'Соль', price: 30 },
    { name: 'Мука', price: 50 },
    { name: 'Колбаса', price: 220 },
    { name: 'Огурцы', price: 100 },
    { name: 'Помидоры', price: 110 },
    { name: 'Картофель', price: 45 },
];

// Код задания 5
productList.forEach(products => {
    console.log(`${products.name} - ${products.price}₽`);
});


/**
 * Задание 6.
 Продолжаем работать со списком продуктов:
 1. У каждого продукта уменьши цену на 20%
 2. Оставь в массиве только продукты, где цена больше 40
 Метод должен вернуть массив, где выполнены 2 вышеуказанных пункта
 **/


// Код задания 6
productList.forEach(products => {
    const discontPrice = products.price * 0.8;
    if (discontPrice > 40) console.log(`${products.name} - ${discontPrice}₽`);
});


/**
 * Задание 7.
 Напишите метод которая выводит числа от 1 до 100:
     1. Числа, кратные 3, заменяются на "Fizz".
     2. Числа, кратные 5, заменяются на "Buzz".
     3. Числа, кратные одновременно 3 и 5, заменяются на "FizzBuzz".
 **/


// Код задания 7
function task7(){
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5  === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}
