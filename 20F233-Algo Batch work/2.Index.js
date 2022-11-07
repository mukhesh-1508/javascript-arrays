//2.
let cargoHold=['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
let replace=cargoHold.indexOf('slinky');
if(replace!=-1){
    cargoHold[replace]='space tether';
}
console.log(cargoHold);
console.log(cargoHold.pop());
console.log(cargoHold);
console.log(cargoHold.shift());
console.log(cargoHold);
cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(cargoHold);
console.log(`${cargoHold}`);
console.log(`${cargoHold.length}`);
//3.
console.log(" 3 starts");
cargoHold.splice(3,0,'keys');
console.log(cargoHold);
let index=cargoHold.indexOf('instruction manual');
if(index!=-1){
  cargoHold.splice(index,0);
}
console.log(cargoHold);
cargoHold.splice(2,3,'cat','fob','string cheese');
console.log(cargoHold);