//https://www.codewars.com/kata/duplicate-arguments/train/javascript

function solution(...args){
    let a = false;
    [...args].map(val => {
        if([...args].indexOf(val,[...args].indexOf(val)+1) !== -1){
           a = true;
        } 
    });
    return a;     
}

//https://www.codewars.com/kata/541629460b198da04e000bb9/solutions/javascript


function last(list){
   let values = [...arguments];
   if (values.length > 1) {
      return values[values.length - 1];
   } else {
       if(values[0].length > 1){
           return [...values[0]][[...values[0]].length - 1];
       } else {
           return values[0];
       }
   }
}
