//https://www.codewars.com/kata/anonymous-returns/train/javascript


name = 'The Window';

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


Function.prototype.call = function(newfunction, ...args){ 
    return this.apply(newfunction, args);
}
