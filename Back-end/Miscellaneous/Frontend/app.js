// const stu1={
//     name:"John",
//     age:22,
//     marks:85,
//     getmarks:function(){
//         return this.marks;
//     }
// };
// const stu2={
//     name:"Jane",
//     age:20,
//     marks:90,
//     getmarks:function(){
//         return this.marks;
//     }
// };  
// const stu3={
//     name:"Jim",
//     age:23, 
//     marks:78,
//     getmarks:function(){
//         return this.marks;
//     }
// };


arr=[1,2,3,4,5];
arr.sayHello=() =>{
    console.log("Hello World");
};

arr.__proto__.push =(n) => {
    console.log("Pushing "+ n);
}

function personMaker(name, age) {
    const person={
        name:name,
        age:age,
       talk(){
        console.log("Hello, my name is " + this.name);
       }
    };
    return person;
}