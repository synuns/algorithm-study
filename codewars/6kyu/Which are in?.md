# Which are in?

<br/>

## **🤺Kata Description**

<br/>

Given two arrays of strings `a1` and `a2` return a sorted array `r` in lexicographical order of the strings of `a1` which are substrings of strings of `a2`.

<br/>

### **👌Examples**

<br/>

**Example 1:**

a1 = `["arp", "live", "strong"]`

a2 = `["lively", "alive", "harp", "sharp", "armstrong"]`

returns `["arp", "live", "strong"]`

**Example 2:**

a1 = `["tarp", "mice", "bull"]`

a2 = `["lively", "alive", "harp", "sharp", "armstrong"]`

returns `[]`

<br/>

### **📝Notes**

<br/>

- Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
- In Shell bash `a1` and `a2` are strings. The return is a string where words are separated by commas.
- Beware: `r` must be without duplicates.

<br/>

**Sample Test**

<br/>

```javascript
describe("Tests", () => {
  it("test", () => {
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
Test.assertSimilar(inArray(a1, a2), ["live", "strong"])
a1 = ["live", "strong", "arp"]
Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])
a1 = ["tarp", "mice", "bull"]
Test.assertSimilar(inArray(a1, a2), [])

  });
});
```

<br/>

## **🧐CODE REVIEW**
***

<br/>

### **🧾My Solution**

<br/>

```javascript
function inArray(array1,array2){
  result = []
  for(let i=0; i<array1.length; i++){
    for(let j=0; j<array2.length; j++){
      if(array2[j].includes(array1[i])){
        result.push(array1[i]);
        break;
      }
    }
  }
  return result.sort();
}
```

<br/>

#### **📝Explanation**

<br/>

I used `str.includes()` and `sort()`
It's all of it.
if a1 is substring of a2, push the a1 element other array.

<br/>

### **Other Solution**

<br/>

```javascript
function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}
```

<br/>

#### **📝Explanation**

<br/>

It's so simple. use of filter is gooood.

<br/>