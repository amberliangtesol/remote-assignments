//Assignment 1: Function and Array
//Complete the function below to find the max number of the passing array of numbers. Reminder: you can't use built-in Math.max() or sort() to complete this assignment.
 
function max(arr){
    let maximum = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (maximum < arr[i]) {
        maximum = arr[i];
      } 
    }
    return maximum; 
};
  console.log(max([1, 2, 4, 5]));
  console.log(max([5, 2, 7, 1, 6]));

//Assignment 2: Function and Object
//Complete the function below to calculate the result of the passing object.
 
function calculate(args) {
  const n1 = args.n1;
  const n2 = args.n2;
  const op = args.op;
  if (op === "+"){
    return (n1 + n2);
  } else if(op === "-"){
    return (n1 - n2);
  } else {
    return ("Not supported");
  }
}

console.log(calculate({ n1: 2, n2: 3, op: '+' })); 
console.log(calculate({ n1: 5, n2: 2, op: '-' })); 
console.log(calculate({ n1: 1, n2: 6, op: 'x' })); 

//Assignment 3: Function, Array, and Object
//Complete the function below to calculate the total price of all products after applying a discount.
 
function calculate(data) {
  const totalPrice = data.products.reduce((total, item) => {
  return total + (item.price * (1-data.discount))
  },0)
  console.log(totalPrice);
  };

const discountedPrice = calculate({
    discount: 0.1,
    products: [
      {name: "Product 1",price: 100},
      {name: "Product 2",price: 700},
      {name: "Product 3",price: 250}
    ]
  });

console.log(discountedPrice);  

//Assignment 5: Algorithm (Advanced Optional)
//Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
function twoSum(nums, target) { 
  for (let i = 0; i < nums.length; i++ ) {
		let goal = target - nums[i];
		for (let j = 0; j < nums.length; j++ ) {
			if (nums[j] === goal)
			    return [i,j];
        }
    }
}

twoSum([2, 7, 11, 15], 9)
