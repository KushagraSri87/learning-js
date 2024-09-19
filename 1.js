console.log("Kushagra");
let name="tony stark";
console.log(name);
let age=24;
console.log(age); 
const student ={
    fName:"kushagra srivastava",
    age:19,
    cgpa:8.8,
    isPass:true,
};
console.log(student["cgpa"]);
const product={
    pName:"parker pen",
    rating:4,
    price:270
};
let gameNum=45;
let userNum = prompt("guess the game number: ");
while(userNum!= gameNum){
    userNum= prompt("you enetered wrong number,guess again:");
}

console.log("congratulations you are gay");
let str=`Ishann is gay ${gameNum}`;

let fullName=prompt("enter the fullname without spaces");
let userName= "@" + fullName + fullName.length;
console.log(userName)

let gays=["nitesh","ishan","mohamid","khushwant"];
 
for(let i=0;i<=4;i++){
    console.log(gays[i]);
}
let marks=["90","89","87","99"];

let sum=0;
for (let val of marks) {
    sum+=val;
}
let avg =sum/marks.length;
console.log(`avg marks of the class =${avg}`);
