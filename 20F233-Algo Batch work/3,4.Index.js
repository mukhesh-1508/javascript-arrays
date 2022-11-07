let holdCbinet1=['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCbinet2=['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
console.log(holdCbinet1.concat(holdCbinet2));// the concat method doesnot change the original array.
console.log(holdCbinet1);
console.log(holdCbinet1.slice(2,4));// the slice method doesnot alter the origina array.
console.log(holdCbinet1);
console.log(holdCbinet2.slice(1,3));
console.log(holdCbinet2);
holdCbinet1.reverse();// reverse method prints the array in he reverse order. this method alters the original array.
console.log(holdCbinet1);
holdCbinet2.sort();//sort method arranges the numbers in ascending order and string as per the alphabetical order.
console.log(holdCbinet2);// the original array gets altered.
