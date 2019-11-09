//https://www.codewars.com/kata/shifty-closures/train/javascript

let name = 'Abe';
const greet_abe = function() {
  return 'Hello, ' + name + '!';
};
const greet_ben = function() {
  name = 'Ben';
  return 'Hello, ' + name + '!';
};


//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript


function buildFun(n){
	let res = [];
	for (let i = 0; i< n; i++){
		res.push(function(){
		return i;
	  });
	}
	return res;
}
