let periodicTable=[
element1=['Hydrogen','H',1.008],
element2=['Helium','he',4.003],
element26=['Iron','Fe',55.85],
];
let table=[];
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);
console.log(table[1]);// in this representation the whole first row will be printed
console.log(table[1][1]);// this representation which describes both row and the column so the element of first row which is at the first column will be printed.
console.log(element1[2]);
console.log(element2[0]);
console.log(element26[1]);