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

// interface User{
//  FirstName : string , 
//  LastName : string ,
//  age : number    
// }
// const legalusers =[{}];
// function legal(user : User[])
// {
//     for(let i=0;i<user.length ; i++)
//     {
//         if( user[i] && user[i].age>=18)
//         {
//             legalusers.push(user[i]);
//         }
//     }
// }
// legal([{
//     FirstName : "bhavehs" , 
//     LastName : "josi" ,
//     age :23
// },{
//     FirstName : "guarav" , 
//     LastName : "sati" ,
//     age :2
// }])
// console.log(legalusers);
// interface User {
// 	firstName: string;
// 	lastName: string;
// 	age: number;
// }

// function filteredUsers(users: User[]) {
//     return users.filter(x => x.age >= 18);
// }

// console.log(filteredUsers([{
//     firstName: "harkirat",
//     lastName: "Singh",
//     age: 21
// }, {
//     firstName: "Raman",
//     lastName: "Singh",
//     age: 16
// }, ]));
// type User = String|Number;

// function showit(person : User)
// {
//     console.log(person);
// }
// showit("bhavesh");
// showit(16);
// type User1 = {
//     Name : String , 
//     age : Number
// };
// type User2 = {
//     Name : String , 
// };
// type User = User1 | User2;
// function showit(person : User)
// {
//     console.log(person);
// }
// showit({
//     Name : "Bhavesh" ,
//     age : 12 
// });
// showit({
//     Name : "guarav" ,
//     age : 17 
// });

// enum Directions {
//     Up = 1 , 
//     Down , 
//     Right , 
//     Left
// };
// function KeyPressed(keys : Directions)
// {   
//     console.log(keys);
// }
// KeyPressed(Directions.Left);
//generics in tsc
// type arr = [String | number];

// function showit(Arr : arr)
// {
//     console.log(Arr);
// }
// showit([1]);
// showit(["bHAVESH"]);

// function showit(Arr : (String | Number)[])
// {
//     console.log(Arr);
// }
// showit([1,2,3,4]);
// showit(["bHAVESH" , "joshi"]);
//using generics
// function identity<T>(arg : T){
//   console.log(arg);   
// }
// identity<string>("myString");

// function showit<T>(arg:T[])
// {
//     console.log(arg[0]);
// }
// showit([1,2,3,4]);
// showit(["bHAVESH" , "joshi"]);
// interface User{
//     Name : String
//     age : number    
// };
// function addit(User1:User , User2 : User )
// {
//     console.log(User1.age + User2.age);
// }
// addit({
//     Name : "bahvesh" , 
//     age : 12
// } , {
//     Name : "Gaurav" , 
//     age : 12
// });
// interface User { 
//     Email : String , 
//     Name : String ,
//     Password : String ,
//     PhoneNO : Number 
// }; 
// type UpdatedUser = Pick<User , "Email" | "Name" | "Password">
// type PartialUser = Partial<UpdatedUser>;
// function hello(h : PartialUser)
// {
//     console.log(h);
// }
// hello({
//     Email : "joshi" , 
//     Name  : " bahavesh" 
// });
interface config{
    Address : String , 
    Api_Key : String   
};

const Chatgpt:config = {
       Address : "Https//://.com" ,
       Api_Key : "12345" 
};

Chatgpt.Address = "my";
