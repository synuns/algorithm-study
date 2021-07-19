# Find the next perfect square!

<br/>

## **📝Kata Description**
***

<br/>

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the `findNextSquare` method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then `-1` should be returned. You may assume the parameter is non-negative.

<br/>

### **Examples**

<br/>

```zsh
findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect square
```

<br/>

## **🧐CODE REVIEW**
***

<br/>

### **🧾My Solution**

<br/>

```javascript
function findNextSquare(sq) {
  const num = Math.sqrt(sq)
  return Number.isInteger(num) ? (num+1)**2 : -1 ;
}
```

<br/>

#### **📝Explanation**

<br/>

```javascript
```

Instead of `if`, I used conditional operator `condition ? exprIfTrue : exprIfFalse` and `Number.isInteger()` for condition expression 

<br/>

### **Other Solution**

<br/>

```javascript
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}
```

<br/>

#### **📝Explanation**

<br/>

I used `Number.isInteger()` for checking perfect square number. but, They used `root % 1 === 0` condition.

<br/>

### **🔖Summary**

<br/>

1. Use conditional operator when you express simple condition

<br/>

## **📚Reference**

<br/>

- **[Conditional (ternary) operator (mozilla)]**<br/>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator