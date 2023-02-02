// Задание 1
let d = 7;
for (i=1; i<4; i++){
   console.log(Math.pow(d, i));
}
prompt();
console.log("----------------");

// Задание 2
let num = Number(prompt("Введите любое целое число: "));
if (num > 0){
   console.log(num*2);
}
prompt();
console.log("----------------");

// Задание 3
let num1 = Number(prompt("Введите первое число: "));
let num2 = Number(prompt("Введите второе число: "));
if (num1 > num2){
    console.log(` Сумма чисел равна: ${num1+num2}`);
}else if (num1 < num2){
    console.log(`Произведение чисел равно: ${num1*num2}`);
}else{
    console.log("Числа одинаковые.");
}
prompt();
console.log("----------------");

// Задание 4
let numTask4 = Number(prompt("Введите любое целое число: "));
if (numTask4 < 0){
    console.log(numTask4**2)
}else{
    console.log("Ошибка");
}
prompt();
console.log("----------------");

//Задание 5
let students = Number(prompt("Введите количество учеников в классе: "));
let stools = Number(prompt("Введите количество стульев в классе: "));
if (students <= stools){
    console.log("Стульев хватает.");
}else{
    console.log("Стульев не хватает.");
}
prompt();
console.log("----------------");

// Задание 6
let arr = [];
function order(){
    for (i=1; i<10; i++){
            arr.push(i);
    }
    return arr;
}
console.log(`Start, ${order()}, Finish`);
prompt();
console.log("----------------");

// Задание 7
let initArr = [];
function divFive(){
    for (i=10; i<100; i++){
        if (i % 5 == 0){
            initArr.push(i);
        }   
    }
    return initArr;
}
console.log(`${divFive()}`);
prompt();
console.log("----------------");

//Задание 8
let anyArr = [12, 4, 84, -7, 45, 19, 0, 86, 14, 15, 22];
for (i in anyArr){
    if (anyArr[i] >= 15){
        console.log(anyArr[i]);
    }
}
prompt();
console.log("----------------");

//Задание 9
let anyArr1 = [23, 45, 68, 2, -6, 4, 74, 37];
for (i in anyArr1){
    if (anyArr1[i] % 2 ==1){
        console.log(anyArr1[i]);
    }
}
prompt();
console.log("----------------");

//Задание 10
let anyArr2 = [23, 45, 68, 2, -6, 19, 0, 86, 14, 2, 4, 84, -7, 45, 12, 4, 84, -7, 45, 19, 0];
for (i in anyArr2){
    if (i % 3 == 0 && i != 0){
        console.log(anyArr2[i]);
    }
}