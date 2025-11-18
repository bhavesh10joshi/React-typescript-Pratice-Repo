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
function showit(person:sati)
{
    console.log("The person name is "+person.name);
}
interface sati {name:string , age : number};
showit({name : "guarav" , age:19});