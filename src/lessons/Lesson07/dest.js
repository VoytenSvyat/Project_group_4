console.log("Hi");

//ДЕСТРУКТУРИЗАЦИЯ
//Массивы
const fruits = ["apple", "grape"];

const arr = [...fruits, "cherry"];

console.log(arr);
console.log(fruits);

//Объекты
const bookObj = {
  bookName: "Great Gatsby",
  price: 20,
};

//Создать новый объект newBookObj и добавить в него новое свойство author
const newBookObj = { ...bookObj, author: "Fitzgerald" };

console.log(newBookObj);

//Деструктурирующее присваивание
//массивы
const colors = ["red", "black"];

//Вариант 1 копирования значений из массива в переменные
// const color1 = colors[0];
// const color2 = colors[1];

//Вариант 2 копирования значений из массива в переменные
// (с помощью деструктурирующего присваивания)
const [color1, color2] = colors;

console.log(color1);
console.log(color2);
console.log(colors);

//объекты
const animal = {
  title: "Dog",
  weight: 20,
};

// const title = animal.title;

//при деструктурирующем присваивании объектов необходимо указать точные
//названия свойств объект и тогда будут созданы переменные с такими же названиями
// если не заданы псевдонимы (через двоеточие после названия свойства)
const { title, weight: animalWeight } = animal;
console.log(title);
// console.log(weight);
console.log(animalWeight);
console.log(animal);
