let str='In space, no one can hear you code.';
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));// the purpose of the parameter in this split method isthe string get splited upto that parameter.
console.log(str);//the split method does not alter the original string.
let arr=['B','n','n',5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));// the purpose of the parameter in the join method is to concatenate each element with that parameter.
console.log(arr);// the join method also does not alter the original array.
let str1="water,space suits,food,plasma sword,batteries";
let index=str1.indexOf(',');
let newstr=str1.replace(/,/g,'');
console.log(newstr);