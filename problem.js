//Output should be 
/*
{"user_name":"Mahesh","user_address_personal_city":"Nanded","user_address_personal_area":"Hadgaon","user_address_office_city":"Mumbai","user_address_office_area_landmark":"Nanded road"}
*/
const obj={
    name:"Mahesh",
    address:{
        personal:{
          city:"Nanded",
          area:"Hadgaon"  
        },
        office:{
         city:"Mumbai",
         area:{
             landmark:"Nanded road"
         }
        }
    }
}

const userobj={};
//Return Flattern Objects
function magic(obj,parent){
 //Order object->....->value

 for(let key in obj){
     if(typeof obj[key]==='object'){
       magic(obj[key],parent+"_"+key);
     }else{
       userobj[parent+"_"+key]=obj[key];
     }
 }

}
magic(obj,'user')
console.log(JSON.stringify(userobj))

let str="Hello"

function reverse(str,parent){
    if(str.length===1){
        parent=parent+str;
    }
 else reverse(str.split(str.length,str.length-1)[1],str.split(str.length,str.length-1)[0]);
}

console.log(reverse(str,""));
