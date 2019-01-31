// секунд в часе
var secondsInAMinute = 60;
var minutesInAnHour = 60;
var secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour);

// секунд в сутках
var hoursInADay = 24;
var secondsInADay = secondsInAnHour * hoursInADay;
console.log(secondsInADay);

// секунд в году 
var daysInAYear = 365;
var secondsInAYear = secondsInADay * daysInAYear;
console.log(secondsInAYear);

// возраст в секундах
var age = 29;
var secondsInTheAge = age * secondsInAYear;
console.log(secondsInTheAge);

// slice
var longString = "Эта длинная строка такая длинная";
console.log(longString.slice(4, 18));

// первая буква строки заглавная
var sillyString = "эЙ, кАК деЛа?"; // глупая строка
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1); // оставшаяся часть строки
var final = firstCharacterUpper + restOfString;
console.log(final);

// то же проще
var sillyString = "эЙ, кАК деЛа?";
var final = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
console.log(final);


// Массивы, методы массивов
var animals = [];
// добавить в конец push
animals.push("Cat"); 
animals.push("Dog");
animals.push("Lama");
console.log(animals.length); // 3

// добавить в начало unshift
animals.unshift("Monkey");
animals; // [ 'Monkey', 'Cat', 'Dog', 'Lama' ]
animals.unshift("White bear");
console.log(animals[0]);

// удалить последний pop
var lastAnimal = animals.pop();
lastAnimal; // Lama
animals; // [ 'White bear', Monkey', 'Cat', 'Dog' ]
animals.pop();
animals; // [ 'White bear', Monkey', 'Cat' ]

animals.unshift(lastAnimal);
animals; // [ 'Lama', White bear', Monkey', 'Cat' ]

// удаление из массива первого элемента, возвращение его значения shift();
var firstAnimal = animals.shift();
firstAnimal; // Lama
animals; // [ 'White bear', Monkey', 'Cat' ]

// Объединение массивов
var furryAnimals = [ "Альпака", "Кольцехвостый лемур", "Йети" ]; // пушистые
var scalyAnimals = [ "Удав", "Годзилла" ]; // чешуйчатые
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
furryAndScalyAnimals; // [ 'Альпака', 'Кольцехвостый лемур', 'Йети', 'Удав', 'Годзилла' ]​​​​​

// Поиск индекса элемента в массиве
var colors = [ "красный", "зеленый", "синий"];
console.log(colors.indexOf("синий")); // 2
console.log(colors.indexOf("зеленый")); // 1
console.log(colors[2]); // синий
console.log(colors.indexOf("фиолетовый")); // -1

var insects = [ "Пчела", "Муравей", "Пчела", "Пчела", "Муравей" ]; // насекомые
console.log(insects.indexOf("Пчела")); // 0  — возвращает индекс элемента, который ближе к началу массива

// Превращаем массив в строку join
var boringAnimals = [ "Мартышка", "Кот", "Рыба", "Ящерица" ];
console.log(boringAnimals.join(" * ")); // ​​​​​Мартышка * Кот * Рыба * Ящерица​​​​​

// Генератор случайных дразнилок
var randomBodyParts = [ "глаз", "нос", "череп" ];
var randomAdjectives = [ "вонючая", "унылая", "дурацкая" ];
var randomWords = [ "муха", "выдра", "дубина", "мартышка", "крыса" ];

// Выбор случайной части тела
var bodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Выбор случайного прилагательного
var adjective = randomAdjectives[Math.floor(Math.random() * 3)];
// Выбор случайного слова 
var word = randomWords[Math.floor(Math.random() * 5 )];
// Соединяем дразнилку
var randomInsult = "У тебя " + bodyPart + " словно " + adjective + " " + word + "!!!"; // случайная дразнилка
randomInsult; // ​​​​​У тебя глаз словно вонючая выдра!!!​​​​​

// Улучшаем
// var word = randomWords[Math.floor(Math.random() * randomWords )];
// randomInsult;

// Способ получше
var randomInsult = ["У тебя", bodyPart, "словно", adjective, word + "!!!"].join(" ");
randomInsult;