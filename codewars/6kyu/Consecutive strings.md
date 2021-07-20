# Consecutive strings

<br/>

## **🤺Kata Description**

<br/>

You are given an array(list) `strarr` of strings and an integer `k`. Your task is to return the **first** longest string consisting of k **consecutive** strings taken in the array.

<br/>

### **👌Examples**

<br/>

```
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
```

<br/>

n being the length of the string array, if `n = 0` or `k > n` or `k <= 0` return "".

<br/>

### **📝Notes**

<br/>

consecutive strings : follow one after another without an interruption

<br/>


**Sample Test**

<br/>

```javascript
function testing(actual, expected) {
    Test.assertEquals(actual, expected)
}

describe("longestConsec",function() {
it("Basic tests",function() { 
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
    testing(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
    testing(longestConsec([], 3), "")
    testing(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
    testing(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
    testing(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
    testing(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
})})
```

<br/>

## **🧐CODE REVIEW**
***

<br/>

### **🧾My Solution**

<br/>

```javascript
function longestConsec(strarr, k) {
  const arr_length = strarr.length;
  if(arr_length == 0 || arr_length < k || k <= 0 ){
    return '';
  }
  
  let consec_length = [];
  let max = 0;
  let max_i = 0;
  let total = 0;
  let answer = "";
  
  for(let i=0; i<arr_length; i++){
    consec_length.push(strarr[i].length);
  }
  
  for(let i=0; i<arr_length-k+1; i++){
    total = consec_length.slice(i,i+k).reduce((sum, num)=> sum+num);
    console.log(`${i} : ${total}`)
    if(max < total){
      max = total;
      max_i = i;
    } 
  }
  for(let i=0; i<k; i++){
    answer += strarr[max_i+i];
  }
  
  return answer;
}
```

<br/>

#### **📝Explanation**

<br/>

First, Exception handling.

```javascript
const arr_length = strarr.length;
  if(arr_length == 0 || arr_length < k || k <= 0 ){
    return '';
  }
```

I got the length of every element of `strarr` and save at the array

```javascript
  for(let i=0; i<arr_length; i++){
    consec_length.push(strarr[i].length);
  }
```

I got the max length index.

```javascript
  for(let i=0; i<arr_length-k+1; i++){
    total = consec_length.slice(i,i+k).reduce((sum, num)=> sum+num);
    console.log(`${i} : ${total}`)
    if(max < total){
      max = total;
      max_i = i;
    } 
  }
```

join the string from `strarr[max_i]` to `strarr[max_i+k]`

```javascript
  for(let i=0; i<k; i++){
    answer += strarr[max_i+i];
  }
```

I'm not practiced for javascript yet. It's a little hard.

<br/>

### **Other Solution**

<br/>

```javascript
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}
```

<br/>

#### **📝Explanation**

<br/>

He `sliced` array and `joined` the fraction.

simple and clear than mine.

but, There is no exception handling. I think old solution.

<br/>