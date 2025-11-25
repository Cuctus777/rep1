let boxes=[
    {weight: 2 , label:"Лёгкая"},
    {weight: 5 , label:"Средняя"},
    {weight: 12 , label:"Тяжёлая"},
    {weight: 5 , label:"Очень тяжёлая"}
    ]
    let heavyBox =boxes.find(box=>box.weight>10);
    console.log(heavyBox);
let innerPlanets=["Меркурий","Венера","Земля","Марс"];
let innerPlanets=["Юпитер","Сатурн","Уран","Нептун"];
let allPlanets=innerPlanets.concat(outerPlanets);
console.log(allPlanets);
let toys=[
    {
        name:"Большой шар с рисунком Цветок",
        counts:2,
        year:1960,
        shape:"шар",
        color:"жёлтый",
        size:"большой",
        favorite:false
    },
    {
        name:"Зелёный шар с цветочным узором",
        counts:5,
        year:2000,
        shape:"шар",
        color:"зелёный",
        size:"большой",
        favorite:false
    },
    {
        name:"Красный шар с напылением",
        counts:3,
        year:1990,
        shape:"шар",
        color:"красный",
        size:"большой",
        favorite:false
    },
    {
        name:"Большой шар с рисунком Цветок",
        counts:2,
        year:1960,
        shape:"шар",
        color:"жёлтый",
        size:"большой",
        favorite:false
    },
    {
        name:"Синий шар с рисунком Снежика",
        counts:4,
        year:1980,
        shape:"шар",
        color:"синий",
        size:"большой",
        favorite:false
    },
]
toys.forEach(toy=>{
    console.log(
        toy.name+
        "-"+
        toy.color+
        ",форма: "+
        toy.shape+
        ",количество: "+
        toy.counts
    );

})
let updatedToys=toys.map(toy=>{
    return{
        ...toy,
        count:toy.count+1
    };

});
console.log(updatedToys);
let toys=[{
    name:"Большой шар с рисунком Цветок",
    counts:2,
    year:1960,
    shape:"шар",
    color:"жёлтый",
    size:"большой",
    favorite:false
},
{
    name:"Зелёный шар с цветочным узором",
    counts:5,
    year:2000,
    shape:"шар",
    color:"зелёный",
    size:"большой",
    favorite:false
},
{
    name:"Красный шар с напылением",
    counts:3,
    year:1990,
    shape:"шар",
    color:"красный",
    size:"большой",
    favorite:false
},]
let car={brand:"BMW", year:2020};
let person={
    name:"Anna",
    age:30,
    isAdmin:false,
    hobbies:["спорт","фото"],
    greet(){console.log("Привет!");}
};
console.log(user.name)