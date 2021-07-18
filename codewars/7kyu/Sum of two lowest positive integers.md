# Sum of two lowest positive integers

<br/>

## **📝Kata Description**
***

<br/>

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like `[19, 5, 42, 2, 77]`, the output should be `7`.

`[10, 343445353, 3453445, 3453545353453]` should return `3453455`.

<br/>

## **🧐CODE REVIEW**
***

<br/>

### **🧾My Solution**

<br/>

```javascript
function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a,b)=>a-b).slice(0,2).reduce((total, num)=> total+num);
}
```

<br/>

### **Other Solution**

<br/>

```javascript
function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
```

<br/>

#### **📝Explanation**

<br/>

I used `slice()`, `reduce()`. but it's unnecessary.
just sort and add index 0 and 1 numbers.

<br/>

### **🔖Summary**

<br/>

1. simple is best

<br/>

## **📚Reference**

<br/>

- **[Array.prototype.sort()]**<br/>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

- **[How to sort an array of integers correctly]**<br/>
https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly

- **[Array.prototype.slice()]**<br/>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

- **[Array.prototype.reduce()]**<br/>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

- **[Use the reduce() Method to Sum an Array in a JavaScript Array]**<br/>
https://www.delftstack.com/howto/javascript/javascript-sum-of-array/#use-the-reduce-method-to-sum-an-array-in-a-javascript-array