
2
5
undefined
Sum 11

console.log("Sum "+sum(4)(2)(5)())
function sum(a){
 return (b)=>{
   console.log(b)
  return b?sum(a+b,b):a; 
 }
}
