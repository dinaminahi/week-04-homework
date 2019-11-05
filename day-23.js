//https://www.codewars.com/kata/unpacking-arguments/train/javascript

function spread(func, args) {
  return func(...args);
}

//https://www.codewars.com/kata/for-the-sake-of-argument/train/javascript

function numbers(...args) {
   return [...args].every(num => Object.prototype.toString.call(num).slice(8, -1) === 'Number');
}
