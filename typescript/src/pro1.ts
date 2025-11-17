// function callit(delayed:()=>void)
// {
//     setTimeout(delayed , 5000)
// };
// callit(function()
// {
//     console.log("my name is bhavesh joshi !");
// });
function showit(sum:(k:number , m:number)=>number)
{
    let i:number = sum(12,13);
    setTimeout(function()
    {
        console.log("the sum is " + i);
    },5000);
}
showit(function(i:number , j:number)
{
    return (i+j);
})

