# Ones and Zeros

<br/>

## **📝Kata Description**
***

<br/>

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

<br/>

### **Examples**

<br/>

```zsh
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
```

<br/>

### **Notes**

<br/>

However, the arrays can have varying lengths, not just limited to 4

<br/>


## **🧐CODE REVIEW**
***

<br/>

### **🧾My Solution**

<br/>

```javascript
const binaryArrayToNumber = arr => {
  const cipher = arr.length;
  let answer = 0;
  for(let i = 0; i < cipher; i++){
    answer += arr[i] * (2 ** (cipher - i -1));
  }
  return answer;
};
```

<br/>

#### **📝Explanation**

<br/>



<br/>

### **Other Solution**

<br/>

```javascript
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
```

<br/>

#### **📝Explanation**

<br/>

The join('') method merges all the array elements into a string. The parseInt(num, base) convert the 'num' represented in base 'base' into a decimal base.
For example

```
if arr = [1, 0, 1] then arr.join('-') --> '1-0-1', arr.join('X') --> '1X0X1', arr.join('') --> '101'
parseInt('1ea', 16) --> 490, parseInt('11', 8) --> 9, parseInt('101', 2) --> 5
```

<cite>muneale (7 kyu)</cite>

<br/>

### **Other Solution**

<br/>

```javascript
function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}
```

<br/>

#### **📝Explanation**

<br/>

written by <cite>hencethus(2 kyu)</cite>

Assuming you know how [reduce] and [arrow functions] work, `<<` is the [bitwise left shift operator], and `|` is the [bitwise OR operator]. Bitwise operations in JavaScript convert all numbers to 32-bit signed integers, so this wouldn't work on numbers greater than 2,147,483,647.

Anyway, as an example, take the number 42. The Array passed in to our function will be `[1, 0, 1, 0, 1, 0]`.

Reduce operates from left to right, and since we didn't specify a starting value for the accumulator, it will just be the left-most element in the Array, or 1. Bitwise operation has left-to-right associativity, and also << has a higher precedence than `|`, so the `<<` is processed before the `|`.

So then we have:

```
Operation         Accumulator    Remaining Array
=========         ===========    ===============
none              1              [0, 1, 0, 1, 0]
1 << 1 | 0        10             [1, 0, 1, 0]
10 << 1 | 1       101            [0, 1, 0]
101 << 1 | 0      1010           [1, 0]
1010 << 1 | 1     10101          [0]
10101 << 1 | 0    101010         []
```

Reduce will return the 32-bit signed integer which is stored in memory as the bits 101010, or 42.

Hope that helps.

<br/>

### **Other Solution**

<br/>

```javascript
const binaryArrayToNumber = arr => {
  return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}
```

<br/>

#### **📝Explanation**

<br/>

It's really good use of `reduce` and highly legibility.

<br/>

### **🔖Summary**

<br/>

1. learn about `reduce`
2. learn about `parseInt`
3. learn about bit operation.

<br/>

## **📚Reference**

<br/>

[reduce]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
[arrow functions]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
[bitwise left shift operator]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators
[bitwise OR operator]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_bitwise_operators


