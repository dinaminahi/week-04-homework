//https://www.codewars.com/kata/a-function-within-a-function/train/javascript

// return a function that returns n
function always (n) {
   return () => n;
}

//https://www.codewars.com/kata/singleton-pattern/train/javascript


class Singleton {
    constructor() {
       if(!Singleton.instance) {
          Singleton.instance = this;
       } else {
          return Singleton.instance;
       }
    }
}
