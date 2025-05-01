let people = [
    {
        name: "suraj",
        age: 25,
        city: "surat"
    }, {
        name: "dev",
        age: 22,
        city: "rojkot"
    }, {
        name: "kuashal",
        age: 18,
        city: "kim"
    }
];

// foreach loop
people.forEach((element) => {
    console.log(`${element.name} is ${element.age} year old and he lived in ${element.city}`);
})

// fillter

let fillter = people.filter((element) => {
    return (element.age > 20)
})

// console.log(fillter);

// map

let map = people.map((element) => {
    return (element.age > 20)
})

// console.log(map);

// find

let find = people.find((people) => {
    return people.name == "suraj"
})

console.log(find.city);