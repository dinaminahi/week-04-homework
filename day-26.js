//https://www.codewars.com/kata/sort-with-arrow-functions/train/javascript

var OrderPeople = function(people){
  return people.sort( (a,b) => a.age - b.age);
}

//https://www.codewars.com/kata/power-bind/train/javascript

Function.prototype.bind = function (newCtx) {
      const newFunc = this;
      return function(){
        newFunc.apply(newCtx);
      };
}; 
