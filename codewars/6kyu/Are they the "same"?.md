# Are they the "same"?

<br/>

## **📝Kata Description**
***

<br/>

Given two arrays `a` and `b` write a function `comp(a, b)` (or `compSame(a, b)`) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in `b` are the elements in a squared, regardless of the order.

<br/>

### **Examples**

<br/>

**Valid arrays**

```
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
```

`comp(a, b)` returns true because in `b` 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write `b`'s elements in terms of squares:

```
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
```

**Invalid arrays**

If, for example, we change the first number to something else, comp may not return true anymore:

```
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
```

`comp(a,b)` returns false because in `b` 132 is not the square of any number of a.

```
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
```

`comp(a,b)` returns false because in `b` 36100 is not the square of any number of `a`.

<br/>

**Sample Test**

<br/>

```javascript
describe("Tests", () => {
  it("test", () => {
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
Test.assertEquals(comp(a1, a2), true);
  });
});
```

<br/>

### **Notes**

<br/>

**Remarks**

a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, Elixir, Haskell, PureScript, Pascal, R, Rust, Shell).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

**Note for C**

The two arrays have the same size (> 0) given as parameter in function comp.

<br/>


## **🧐CODE REVIEW**
***

<br/>

### **🧾My Solution**

<br/>

```javascript
function comp(array1, array2){
  if(array1 === null || array2 === null) return false;
  const length = array1.length;
  for(let i =0; i<length; i++){
    array2[i] = Math.sqrt(array2[i]);
  }
  array1.sort();
  array2.sort();
  return JSON.stringify(array1) === JSON.stringify(array2);
}
```

<br/>

#### **📝Explanation**

<br/>

I can't get I wanted result from `array1 === array2`. Because, The triple equals operator `===` only returns true if the arrays are the same reference. One neat way to take into account object values is comparing arrays by their `JSON.stringify()` output.

<br/>

### **Other Solution**

<br/>

```javascript
function comp(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}
```

<br/>

#### **📝Explanation**

<br/>

It's just like `!a` called twice. It's sometimes called `"double-bang"` and is used to coalesce a value to a bool. `!!truthy` turns into true, and !!falsy turns into false.

<br/>

### **Other Solution**

<br/>

```javascript
function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
```

<br/>

#### **📝Explanation**

<br/>

I learned `every()` function.

<br/>

### **🔖Summary**

<br/>

1. compare array using `JSON.stringify()` not `===`.
2. Using `every()` function is good when It have to check every element.

<br/>

## **📚Reference**

<br/>

- **[Compare Arrays in JavaScript (mastering JS)]**<br/>
https://masteringjs.io/tutorials/fundamentals/compare-arrays