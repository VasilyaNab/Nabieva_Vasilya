
/**
 * Задание 1.
 * Напиши функцию `delayLog(msg, ms)`, которая выводит сообщение `msg` в консоль через `ms` миллисекунд.
 * Пример:
 * delayLog("Привет", 1000); // выведет "Привет" через 1 секунду
 **/

// Код задания 1
function delayLog(msg, ms){
    setTimeout(() => {
        console.log(msg);}, ms);
}
delayLog("Привет", 1000); // выведет "Привет" через 1 секунду


/**
 * Задание 2.
 * Напиши функцию `sequentialLogs()`, которая выводит 1, 2 и 3 с интервалами в 1, 2 и 3 секунды соответственно.
 **/

// Код задания 2
const fetchData1 = () => new Promise(resolve => setTimeout(() => resolve("1"), 1000));
const fetchData2 = () => new Promise(resolve => setTimeout(() => resolve("2"), 2000));
const fetchData3 = () => new Promise(resolve => setTimeout(() => resolve("3"), 3000));
async function sequentialLogs() {
    try {
        console.log(await fetchData1()); // выведет 1 через 1 секунду
        console.log(await fetchData2()); // выведет 2 через 2 секунды
        console.log(await fetchData3()); // выведет 3 через 3 секунды
    } catch (error) {
        console.error("Ошибка:", error);
    }
}
sequentialLogs();


/**
 * Задание 3.
 * Напиши функцию `checkNumber(num)`, возвращающую Promise.
 * Если число больше 10 — промис должен выполниться с "OK", иначе — отклониться с "Too small".
 **/

// Код задания 3
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) resolve("OK");
        else reject("Too small"); 
    });
}
checkNumber(11)
    .then(result => console.log(result)) // OK
    .catch(error => console.error(error));
checkNumber(8)
    .then(result => console.log(result))
    .catch(error => console.error(error)); // Too small

    
/**
 * Задание 4.
 * Напиши функцию `fakeFetch(url)`, которая возвращает промис.
 * Он "загружает" данные через 2 секунды, возвращая сообщение `${url} loaded`.
 **/ 

// Код задания 4
function fakeFetch(url) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${url} loaded`), 2000);
    });
}
fakeFetch("https://github.com/VasilyaNab")
    .then(result => console.log(result)) // выведет 'https://github.com/VasilyaNab loaded' через 2 секунды
    .catch(error => console.error(error));


/**
 * Задание 5.
 * Создай цепочку промисов, которая:
 * 1. Удваивает число 5.
 * 2. Прибавляет 10.
 * 3. Делит результат на 3.
 * 4. Выводит финальный результат.
 **/

// Код задания 5
function task5(number, operation){
    return new Promise (resolve => {
        setTimeout(() => resolve(operation(number)), 0);
    });
}
task5(5, x => x * 2) // 10
    .then(result => task5(result, x => x + 10)) // 20
    .then(result => task5(result, x => x / 3)) // 6.666666666666667
    .then(result => console.log(result)); // 6.666666666666667


/**
 * Задание 6.
 * Напиши async-функцию `loadData`, которая вызывает `fakeFetch(url)` с использованием async/await.
 * Обработай ошибку с помощью try...catch.
 **/

// Код задания 6
async function loadData(url) {
    try {
        const result = await fakeFetch(url);
        console.log(result); 
    } catch (error) {
        console.error(error);
    }
}
loadData("https://github.com/VasilyaNab") // выведет 'https://github.com/VasilyaNab loaded' через 2 секунды


/**
 * Задание 7.
 * Напиши функцию `loadAll(urls)`, которая использует Promise.all для параллельной загрузки массива URL.
 * После загрузки выведи все результаты.
 **/

// Код задания 7
async function loadAll(urls) {
    try {
        const result = await Promise.all(urls.map(fakeFetch));
        console.log(result); 
    } catch (error) {
        console.error(error);
    }
}
loadAll([
    "https://github.com/VasilyaNab1",
    "https://github.com/VasilyaNab2",
    "https://github.com/VasilyaNab3"
]);  // через 2 секунды выведет массив с urls


/**
 * Задание 8.
 * Напиши функцию `loadFirst(urls)`, которая использует Promise.race.
 * Она должна вернуть результат самого первого завершившегося запроса.
 **/

// Код задания 8
async function loadFirst(urls) {
    try {
        const result = await Promise.race(urls.map(fakeFetch));
        console.log(result); 
    } catch (error) {
        console.error(error);
    }
}
loadFirst([
    "https://github.com/VasilyaNab1",
    "https://github.com/VasilyaNab2",
    "https://github.com/VasilyaNab3"
]); // через 2 секунды вернет самый первый завершившийся запрос, т.е. 'https://github.com/VasilyaNab1 loaded'


/**
 * Задание 9.
 * Напиши функцию `processSequentially(arr, asyncFn)`, которая вызывает `asyncFn` для каждого элемента массива последовательно.
 **/

// Код задания 9
async function processSequentially(arr, asyncFn) {
    for (const i of arr){
        await asyncFn(i);
    }
}


/**
 * Задание 10.
 * Напиши функцию `sleep(ms)`, которая возвращает промис, завершающийся через указанное количество миллисекунд.
 **/

// Код задания 10
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Функция завершена");
            resolve();
        }, ms);
    });
}
sleep(1000)
    .then(result => console.log(result)) // выведет "Функция завершена" через 1 секунду
sleep(5000)
    .then(result => console.log(result)) // выведет "Функция завершена" через 5 секунду