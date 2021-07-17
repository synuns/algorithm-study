# Duplicate Encoder

<br/>

## **📝Kata Description**
***

<br/>

The goal of this exercise is to convert a string to a new string where each character in the new string is `"("` if that character appears only once in the original string, or `")"` if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

<br/>

### **Examples**

<br/>

```
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
```

<br/>

### **Notes**

<br/>

Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

<br/>


## **🧐CODE REVIEW**
***

<br/>

### **🧾My Solution**

<br/>

```javascript
function duplicateEncode(word){
  const dict = {};
  let answer = "";
  for(let i=0; i<word.length; i++){
    const m = word[i].toLowerCase();
    if(dict[m]){
      dict[m] = ')';
    }else{
      dict[m] = '(';
    }
  }
  for(let i=0; i<word.length; i++){
    answer += dict[word[i].toLowerCase()];
  }
  return answer;
}
```

<br/>

#### **📝Explanation**

<br/>

I used dictionary to check using charater more than once.
I used `str.toLowerCase()` to ignore capitalization.

<br/>

#### **😅Improvement Point**

<br/>

1. repetive use of `toLowerCase()`

If I use `toLowerCase()` first time, I can reduce use of `toLowerCase()`.

<br/>

```javascript
function duplicateEncode(word){
  const letters = word.toLowerCase();
  const dict = {};
  let answer = "";
  for(let i=0; i<letters.length; i++){
    const m = letters[i];
    if(dict[m]){
      dict[m] = ')';
    }else{
      dict[m] = '(';
    }
  }
  for(let i=0; i<letters.length; i++){
    answer += dict[letters[i]];
  }
  return answer;
}
```

<br/>

more simple!!

<br/>

### **Other Solution**

<br/>

```javascript
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
```

<br/>

#### **📝Explanation**

<br/>

```javascript
```

<br/>

### **Other Solution**

<br/>

```javascript
function duplicateEncode(word) {
  word = word.toLowerCase();
  return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
}
```

<br/>

#### **📝Explanation**

<br/>

```javascript
```

<br/>

### **🔖Summary**

<br/>

1. 

<br/>