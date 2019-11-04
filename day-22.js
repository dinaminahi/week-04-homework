//http://tddbin.com/#?kata=es6/language/arrow-functions/basics

// 5: arrow functions - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Arrow functions', function() {
  it('are shorter to write, instead of `function(){}` write `() => {}`', function() {
    const func = () => {};
    assert.equal('' + func, '() => {}');
  });
  it('instead `{}` use an expression, as return value', function() {
    const func = () => 'I return too';
    assert.equal(func(), 'I return too');
  });
  it('one parameter can be written without parens', () => {
    const func = p => p - 1;
    assert.equal(func(25), 24);
  });
  it('many params require parens', () => {
    const func = (param,param1) => param + param1;
    assert.equal(func(23, 42), 23+42);
  });
  it('the function body needs parens to return an object', () => {
    const func = (x) => x ={iAm: 'an object'};
    assert.deepEqual(func(), {iAm: 'an object'});
  });
});


//http://tddbin.com/#?kata=es6/language/arrow-functions/binding

/// 6: arrow functions - binding
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

class LexicallyBound {
  getFunction() {
    return () => {
      return this;
    }
  }
  getArgumentsFunction() {
    return () => {return arguments}
  }
}

describe('Arrow functions have lexical `this`, no dynamic `this`', () => {
  it('bound at definition time, use `=>`', function() {
    const bound = new LexicallyBound();
    const fn = bound.getFunction();
    assert.strictEqual(fn(), bound);
  });
  it('can NOT bind a different context', function() {
    const bound = new LexicallyBound();
    const fn = bound.getFunction();
    const anotherObj = {};
    const expected = bound;
    assert.strictEqual(fn.call(anotherObj), expected);
  });
  it('`arguments` does NOT work inside arrow functions', function() {
    const bound = new LexicallyBound();
    const fn = bound.getArgumentsFunction();
    assert.equal(fn(1, 2).length, 0);
  });
});
