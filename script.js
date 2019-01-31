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

// Доступ к значениям внутри объектов
var cat = {
    legs: 3,
    name: "Гармония",
    color: "Черепаховый"
}
console.log(cat["name"]);
console.log(cat.name);

var dog = {
    name: "Оладушек",
    age: 6,
    color: "белый",
    bark: "Гав тяф тяф!" // bark - лай
}
console.log(dog);

var cat = {
    name: "Гармония",
    age: 8,
    color: "Черепаховый"
}
console.log(cat);

// Object.keys(); Возвращает массив всех ключей объекта 
console.log(Object.keys(dog)); // [ 'name', 'age', 'color', 'bark' ]​​​​​
console.log(Object.keys(cat)); // [ 'name', 'age', 'color' ]​​​​​

// Добавление элементов объекта

// Через кавычки
var cat = {};
cat["legs"] = 3;
cat["name"] = "Гармония";
cat["color"] = "Черепаховый";
console.log(cat); // { legs: 3, name: 'Гармония', color: 'Черепаховый' }​​​​​
                        // color: "Черепаховый"
                        // legs: 3
                        // name: "Гармония"

// !!! Javascript хранит ключи объектов НЕ упорядочивая их

// Через точку
var cat = {};
cat.legs = 3;
cat.name = "Гармония";
cat.color = "Черепаховый";
console.log(cat);

// Массивы объектов
var dinosaurs = [
    { name: "Тираннозавр рекс", period: "Верхнемеловой"},
    { name: "Стегозавр", period: "Верхнеюрский"},
    { name: "Платеозавр", period: "Триасовый"}
];

console.log(dinosaurs[0]); // name: 'Тираннозавр рекс', period: 'Верхнемеловой'
console.log(dinosaurs[0]["name"]); // Тираннозавр рекс
console.log(dinosaurs[1].period); // ​​​​​Верхнеюрский​​​​​

// !!! Точечную нотацию можно использовать только с объектами, для массивов она не подходит

// Массив друзей
var anna = { name: "Анна", age: 11, luckynumbers: [2, 4, 8, 16] };
var dave = { name: "Дэйв", age: 5, luckynumbers: [3, 9, 40] };
var kate = { name: "Кейт", age: 9, luckynumbers: [1, 2, 3] };

var friends = [anna, dave, kate];
console.log(friends[1]); // { name: 'Дэйв', age: 5, luckynumbers: Array(3) }​​​​​
                            // age: 5
                            // luckynumbers: Array(3)
                            //    0: 3
                            //    1: 9
                            //    2: 40
                            //    length: 3

                            // name: "Дэйв"

console.log(friends[2].name); // Кейт
console.log(friends[0].luckynumbers[1]); // 4  — Значение из массива, находящегося в объекте, который находится в массиве friends

// Хранение информации о фильмах
var movies = {
    "В поисках Немо": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Альберт Брукс", "Эллен Дедженерес"],
        format: "DVD"
    },

    "Звезные войны: Эпизод VI — Возвращение джедая": {
        releaseDate: 1983,
        duration: 134,
        actors: ["Марк Хэмилл", "Харрисон Форд"],
        format: "DVD"
    },

    "Гарри Поттер и Кубок огня": {
        releaseDate: 2005,
        duration: 157,
        actors: ["Дэниел Рэдклифф", "Эмма Уотсон"],
        format: "Blu-ray"
    }
}

var findingNemo = movies["В поисках Немо"];
console.log(findingNemo.duration); // 100
console.log(findingNemo.format); // DVD

// Создаем новый объект cars и добавляем его в movies с ключом "Тачки"
var cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Оуэн Уилсон", "Бонни Хант"],
    format: "Blu-ray"
};
movies["Тачки"] = cars; // или
// movies.Тачки = cars;

console.log(Object.keys(movies));
// [ 'В поисках Немо', 'Звезные войны: Эпизод VI — Возвращение джедая',​​​​​ 'Гарри Поттер и Кубок огня',​​​​​'Тачки' ]​​​​​

var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123}, 3.3], // purpose — цель
    "random animal": "Банановая акула"
};
console.log(myCrazyObject["some array"][2]["number"]);
console.log(myCrazyObject["some array"][2].number);
