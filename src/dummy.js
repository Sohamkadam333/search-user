/*
// *** Be careful when using typeof, instanceof and constructor.
// ** typeof : a JavaScript unary operator used to  return a string that represents the primitive type of a variable,  don’t forget that typeof null will return “object”, and for the majority of object types (Array, Date, and others) will return also “object”.
// ** constructor : is a property of the internal prototype property, which could be overridden by code.
// * instanceof : is another JavaScript operator that check in all the prototypes chain the constructor it returns true if it’s found and false if not.

var arr = ['a', 'b', 'c'];
typeof arr;
// return "object"

arr instanceof Array;
// true

arr.constructor();
//[]

*/

// String.prototype.trim = function () {
// 	return this.replace(/^s+|s+$/g, '');
// };
// console.log('   hello soham kadam      '.length);
// console.log('   hello soham kadam      '.trim().length);

// const arr = [10, 20, 30, 49];

// console.log(arr instanceof Array);
// console.log(typeof arr);
// console.log(arr.constructor());

class GetThis {
	name = 'soham';
	getThisOfClass() {
		return this;
	}

	getThisOfClass2 = () => {
		return this;
	};
}

c1 = new GetThis();
console.log(c1.getThisOfClass());
console.log(c1.getThisOfClass2());
