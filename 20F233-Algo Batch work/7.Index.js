let people=["Greg", "Mary", "Devon", "James"];
for(i=0;i<people.length;i++){
    console.log(people[i]);
}
people.shift();
people.pop();
people.unshift('Matt');
people.push("Manoj");
for(i=0;i<people.length;i++){
    if(people[i]=='Mary')
    {
        break;
    }
    console.log(people);
}
let arr=[].concat(people);
arr.shift();
arr.shift();
console.log(arr);
console.log(people.indexOf("Mary"));
console.log(arr.indexOf("foo"));
people=["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth","Artie");
let withBob=people.concat("Bob");
console.log(withBob);
