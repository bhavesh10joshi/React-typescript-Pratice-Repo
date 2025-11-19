// function callit(delayed:()=>void)
// {
//     setTimeout(delayed , 5000)
// };
// callit(function()
// {
//     console.log("my name is bhavesh joshi !");
// });
// interfaces
// function showit(person:{name:string , age : number})
// {
//     console.log("The person name is "+person.name);
// }
// interface joshi {name:string , age : number};
// showit({name : "guarav" , age:19});
// function showit(person:sati)
// {
//     console.log("The person name is "+person.name);
// }
// interface sati {name:string , age : number};
// showit({name : "guarav" , age:19});
// interface   Place{
//     name:string , 
//     address ?: {
//         city?:string , 
//         pincode?:number
//     }
// }
// function showit(place:Place)
// {
//     console.log(place.address?.city);
// }
// showit({
//     name:"kaladhungi" ,
//     address:{
//         city:"haldwani"
//     } 
// })
// interface People{
//     name:string , 
//     age : number ,
//     greet : ()=>string
// }
// let person : People ={
//     name:"bhavesh joshi" , 
//     age : 12 , 
//     greet:()=>{
//         return "hello there !";
//     }
// }
// interface manager{
//     name : string
//     age : number
// }
// class company implements manager{

//     constructor(public name:string , public age:number)
//     {
//         this.name = name;
//         this.age = age;
//     }
// }
// let Google = new company("google" , 32);

// console.log("the name of the company "+Google.name+" and age is "+Google.age);
// let max:number = -1000000000;
// function getMax(Num: number[])
// {
//     for(let i = 0 ; i<Num.length ; i++)
//     {
//         if(Num[i] >= max)
//         {
//             max = Num[i];
//         }
//     }
// }
// getMax([4, 7, 1, 9, 3]); // 9
// console.log(max);
// interface user {
//     name : String , 
//     age : Number , 
//     address : [{
//         city :string
//     }]
// }
// function showit(User:user)
// {
//     console.log(User.address);   
// }
// showit({
//     name:"bhavesh" , 
//     age  : 12 , 
//     address : [{
//         city:"haldwani"
//     }]
// })

interface User{
 FirstName : string , 
 LastName : string ,
 age : number    
}
const legalusers =[{}];
function legal(user : User[])
{
    for(let i=0;i<user.length ; i++)
    {
        if( user[i] && user[i].age>=18)
        {
            legalusers.push(user[i]);
        }
    }
}
legal([{
    FirstName : "bhavehs" , 
    LastName : "josi" ,
    age :23
},{
    FirstName : "guarav" , 
    LastName : "sati" ,
    age :2
}])
console.log(legalusers);