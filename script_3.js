for(let i=1;i<=5;i++){
console.log("Повтор"+i);
}
for(let i=2;i<=10;i+=2){
console.log(i);
}
for(let i=5;i<=15;i++){
console.log(i);
}
let money=100;
while (money>0){
    console.log("Покупаю мороженое!");
    money-=20;
}
let a=1;
while(a<=10){
    console.log(a);
    a++;
}
let password;
do{
    password=prompt("Введите пароль:");
}while(password!=="1234");
console.log("Пароль принят!");
b=prompt()
while(b!=="5"){
    b=prompt("Введите заново");
}
let fruits=["apple","banana","papaya"];
for(let fruit of fruits){
    console.log(fruit);
}
for(let letter of "привет"){
    console.log(letter);
}
let animals=["lion","tiger","mouse","wolf","fox"];
for(let animal of animals){
    console.log(animal);
}
let person={name:"Anna",age:15,city:"Minsk"};
for(let key in person){
    console.log(key+": "+person[key]);
}
for(let i=1;i<=10;i+=2){
    console.log(i);
    }

    let c=0;
    for(let i=1;i<=5;i++){
        c+=i;
        
    }
    console.log(c);
    for(let i=1;i<=10;i++){
        console.log("3 * "+i+" = "+(3*i));
    }
let w=0;
for(let word of "банан"){
    if(word=="а"){
        w++;
    }
}
console.log("букв -a- в слове -банан- : ",w);
for(let i=1;i<=5;i++){
    console.log(i*i);
    }
function  showMessage(from , text){
    alert(from +', '+text);
}
showMessage('Привет',);
/*function sum(a,b){
    return a+b;
}
let result=sum(1,2);
alert(result);
const sayHi=function(){
    console.log("Привет!");
};
sayHi();
const generateSumFinder=()=>{
    const sum=(a,b)=>a+b;
    return sum;
}
const sum = generateSumFinder();
sum(1,5);
button.onclick=function(){
    console.log("Клик");
}
const obj ={
    name:"Text",
    show(){
        console.log(this.name);
    }

};
obj.show();
button.addEventListener("click",()=>{
    console.log("Нажали!");
});
setTimeout(()=>{
    console.log("Прошло 2 секунды");
},1000);
let names="Kolya";
function say(){
    alert("Hi, "+ names);
}
names="Irina";
say();*/
let Name="Dima";
function getName(){
    console.log(Name);
}
getName();
let x=1;
let y=2;
let z=3;
function Sum(){
    console.log(x+y+z);
}
Sum();
const um = () => {
   
    return x*y;
}


const hello=()=>{
    return("Привет");
}



