/*let numbers[ ,20 ,30 ];
for(let i=0 ; i < numbers.length;i++){
    console.log(numbers[i]);
}
let fruits=["яблоко","банан","груша"];
for (let fruit of fruits){
    console.log(numbers[i]);
}*//**/

let fruits=["яблоко","банан"];
fruits.push("груша");
let last=fruits.pop();
console.log(fruits);
console.log(last);
let numbers=[2,3];
numbers.unshift(1);
console.log(numbers);
let colors=["red","green","blue"];
console.log(colors.indexOf("green"));
console.log(colors.indexOf("black"));

let pets=["кот","пёс","попугай"];
console.log(pets.includes("пёс"));
console.log(pets.includes("хомяк"));
let nums=[10,20,30,40];
let part=nums.slice(1,3);
console.log(part);
console.log(nums);
let num=[10,20,30,40,50];
let removed=num.splice(1,2);
console.log(num);
console.log(removed);
let words=["привет","мир"];
let message=words.join(" ");
console.log(words);
let Nums=[1,2,3];
Nums.reverse();
console.log(Nums);
let names=["Ира","Анна","Борис"];
name.sort();
console.log(names);
let NUMS=[1,2,3];
let newNUMS=NUMS.map(n=>n+1);
console.log(newNUMS);