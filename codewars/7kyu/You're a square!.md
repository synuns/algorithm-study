# You're a square!

<br/>

## **📝Kata Description**
***

<br/>

**A square of squares**

You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

<br/>

### **Examples**

<br/>

```
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
```

<br/>

### **Notes**

<br/>

Given an integral number, determine if it's a [square number](https://en.wikipedia.org/wiki/Square_number):

> In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

<br/>


## **🧐CODE REVIEW**
***

<br/>

### **🧾My Solution**

<br/>

```javascript
var isSquare = function(n){
  if (parseInt(Math.sqrt(n))**2 === n){
    return true
  }else
    return false
}
```

<br/>

### **Other Solution**

<br/>

```javascript
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
```

<br/>

#### **📝Explanation**

<br/>

It's so simple. we just have to check its square root number is natural number.
that's it. `number % 1 === 0`

<br/>

### **Other Solution**

<br/>

```javascript
const isSquare = n => Number.isInteger(Math.sqrt(n));
```

<br/>

#### **📝Explanation**

<br/>

we don't need to `number % 1 === 0` calculation. just use `Number.isInteger()` function.

<br/>