# Highest Scoring Word

<br/>

## **🤺Kata Description**

<br/>

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: `a = 1, b = 2, c = 3` etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

<br/>

**Sample Test**

<br/>

```javascript
describe("Example tests",() =>{
Test.assertEquals(high('man i need a taxi up to ubud'), 'taxi');
Test.assertEquals(high('what time are we climbing up the volcano'), 'volcano'); 
Test.assertEquals(high('take me to semynak'), 'semynak'); 
Test.assertEquals(high('aa b'), 'aa');
Test.assertEquals(high('b aa'), 'b');
Test.assertEquals(high('bb d'), 'bb');
Test.assertEquals(high('d bb'), 'd');
Test.assertEquals(high('aaa b'), 'aaa');
});
```

<br/>

## **🧐CODE REVIEW**
***

<br/>

### **🧾My Solution**

<br/>

```javascript
function high(x){
  const words = x.split(" ");
  let max_word = '';
  let max_point = 0;
  for(let i=0; i<words.length; i++){
    let points = 0
    for(let j=0; j<words[i].length; j++){
      points += words[i].charCodeAt(j) - 96;
    }
    if(max_point < points){
      max_point = points;
      max_word = words[i];
    }
  }
  return max_word;
}
```

<br/>

#### **📝Explanation**

<br/>

I used double for loop and check all of the spellings.
and then I got each of points of the words.
I checked max point and max word everytime.

<br/>

### **Other Solution 1**

<br/>

```javascript
function high(x){
  //transform the input string into array & define a string of alphabetical latin characters
  var arr = x.split(' ');
  var str = 'abcdefghijklmnopqrstuvwxyz';
  //Iterate through the array with input words to find the one with the greatest sum
  var newArr = arr.map(function(word){
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
      sum += str.indexOf(word[i]);
    }
    return sum;
  });
  //Return the word with the greatest sum
  return arr[newArr.indexOf(Math.max(...newArr))];
}
```

<br/>

#### **📝Explanation**

<br/>

He just used the indexOf on the alphabetical-order literal `'abcdefghijklmnopqrstuvwxyz'`

<br/>

### **Other Solution 2**

<br/>

```javascript
function high(s){
  let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}
```

<br/>

#### **📝Explanation**

<br/>

I've never seen before `'...'`. It's a Spread syntax.

<br/>

### **🔖Summary**

<br/>

1. 

<br/>

## **📚Reference**

<br/>

- **[Spread syntax (...) (MDN)]**<br/>
URLhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax