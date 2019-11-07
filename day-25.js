//https://www.codewars.com/kata/anonymous-returns/train/javascript


const name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function(name) {
        name = this.name;
        return function() {
            return name;
        };
    }
};



//https://www.codewars.com/kata/write-javascripts-call-function-using-apply/train/javascript


Function.prototype.call = function(newCall, ...args){ 
    return this.apply(newCall, args);
}
