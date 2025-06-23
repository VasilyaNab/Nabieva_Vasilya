
/**
 * Задание 1.
 Создайте объект person с полями firstName, lastName и age. Выведите полное имя в консоль.
 **/

// Код задания 1
const person = {
    firstName: 'Василя',
    lastName: 'Набиева',
    age: 19
};
console.log(person.lastName + " " + person.firstName); // Набиева Василя


/**
 * Задание 2.
 Добавьте в объект person новое свойство city со значением "Moscow".
 **/

// Код задания 2
person.city = "Moscow";
console.log(`${person.lastName} ${person.firstName} живет в - ${person.city}`); // Набиева Василя живет в - Moscow


/**
 * Задание 3.
 Удалите свойство age из объекта person.
 **/

// Код задания 3
delete person.age;


/**
 * Задание 4.
 Используйте цикл for...in, чтобы вывести в консоль все ключи и значения объекта person.
 **/

// Код задания 4
for (let key in person){
    console.log(key, person[key])
} 
// firstName Василя
// lastName Набиева
// city Moscow


/**
 * Задание 5.
 Напишите функцию, которая принимает объект и возвращает массив всех его ключей.
 **/

// Код задания 5
function task5(obj){
    const result = [];
    for (const i in obj) {
        result.push(i);
    }
    return result;
}
console.log(task5(person)) // ["firstName", "lastName", "city"]


/**
 * Задание 6.
 Напишите функцию, которая принимает объект и возвращает массив всех значений.
 **/

// Код задания 6
function task6(obj){
    const result = [];
    for (const i in obj) {
        result.push(obj[i]);
    }
    return result;
}
console.log(task6(person)) // ["Василя", "Набиева", "Moscow"]


/**
 * Задание 7.
 Создайте объект с методом greet(), который выводит в консоль приветствие с использованием значения свойства name.
 **/

// Код задания 7
const person2 = {
    name: 'Василя',
    greet() {
        console.log(`Привет, ${this.name}`); 
    }
};
person2.greet(); // Привет, Василя

