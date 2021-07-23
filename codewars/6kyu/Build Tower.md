# Build Tower

<br/>

## **🤺Kata Description**

<br/>

Build Tower by the following given argument:
**number of floors** (integer and always greater than 0).

Tower block is represented as *

Python: return a `list`;
JavaScript: returns an `Array`;
C#: returns a `string[]`;
PHP: returns an `array`;
C++: returns a `vector<string>`;
Haskell: returns a `[String]`;
Ruby: returns an `Array`;
Lua: returns a `Table`;

Have fun!

<br/>

### **👌Examples**

<br/>

for example, a tower of 3 floors looks like below
```javascript
[
  '  *  ', 
  ' *** ', 
  '*****'
]
```

<br/>

and a tower of 6 floors looks like below
```javascript
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
```
<br/>

**Sample Test**

<br/>

```javascript
describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
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
function towerBuilder(nFloors) {
  let result = [];
  for(let i=0; i<nFloors; i++){
    let str = "";
    for(let j=0; j<2*nFloors-1; j++){
      if(nFloors-1-i<=j && nFloors-1+i>=j){
        str += "*";
      }else{
        str += " ";
      }
    }
    result.push(str);
  }
  return result
}
```

<br/>

#### **📝Explanation**

<br/>

understand the pattern between index `i` with index `j`.
`'*'` is always in  $$nFloors-1-i <= j <=nFloors-1+i$$

<br/>

### **Other Solution**

<br/>

```javascript
function towerBuilder(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}
```

<br/>

#### **📝Explanation**

<br/>


Can anyone explain this line? - Amos Sidelnik(6 kyu)

`return Array.from({length: n}, function(v, k) {`

The first argument "{length: n}" determines the length of the array. Each position is initialized with "undefined" so Array.from({length: 3}) looks like "[undefined, undefined, undefined]". The second argument is a mapping function called on each element in the array. So if the second argument was "function(v, k){ return k + 1 }" the new array would now look like "[1, 2, 3]" - brokenspacebar(4 kyu)

when I watch like this solution, I think that I don't know javascript.🤯

<br/>

### **Other Solution**

<br/>

```javascript
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}
```

<br/>

#### **📝Explanation**

<br/>

It's more pretty than mine. I learned use of `repeat()`.

<br/>
