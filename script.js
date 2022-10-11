let arr_students = [
    {
        id: 1,
        name: "Timur",
        age: 16,
        children: ["Amin", "Davlat"],
        gender: "male"
    },
    {
        id: 2,
        name: "Amin",
        age: 15,
        children: ["Aziz", "Zafar", "Asad"],
        gender: "female"
    },
    {
        id: 3,
        name: "Naim",
        age: 21,
        children: ["Timur", "Orif"],
        gender: "male"
    },
    {
        id: 4,
        name: "Laziz",
        age: 17,
        children: ["Munis"],
        gender: "female"
    },
    {
        id: 5,
        name: "Jamshed",
        age: 28,
        children: ["Munis"],
        gender: undefined
    }
]

// Найти средний возраст студентов
// Найти самого старшего студента и сохранить в переменную
// Найти самого младшего студента и сохранить в переменную
// посчитать сколько малчиков и сколько девочек и бинарных

let age_1 = 0
let age_2 = []
let age_3 = []

let male = 0
let female = 0
let undefined_1 = 0


for (let item of arr_students) {
    age_1 = age_1 + item.age / arr_students.length
    // item.age.Math.max()







    if (item.gender == `male`) {
        male++
    } else if (item.gender == `female`) {
        female++
    } else {
        undefined_1++
    }
}

console.log(male, female, undefined_1);
console.log(age_1);
console.log(arr_students[4]);
console.log(arr_students[1]);
