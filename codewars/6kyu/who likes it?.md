# Who likes it?

<br/>

## **📝Kata Description**
***

<br/>

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function `likes :: [String] -> String`, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

<br/>

### **Examples**

<br/>

```
likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
```

<br/>

**Sample Test**

<br/>

```javascript
describe('static tests', function() {
  it('should return correct text', function() {
    Test.assertEquals(likes([]), 'no one likes this');
    Test.assertEquals(likes(['Peter']), 'Peter likes this');
    Test.assertEquals(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    Test.assertEquals(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    Test.assertEquals(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
```

<br/>

### **Notes**

<br/>

For 4 or more names, the number in and `2 others` simply increases.

<br/>


## **🧐CODE REVIEW**
***

<br/>

### **🧾My Solution**

<br/>

```javascript
function likes(names) {
  likes_num = names.length;
  if(likes_num===0){
    return "no one likes this";
  }else if(likes_num===1){
    return names[0] + " likes this";
  }else if(likes_num===2){
    return `${names[0]} and ${names[1]} like this`;
  }else if(likes_num===3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }else{
    return `${names[0]}, ${names[1]} and ${likes_num-2} others like this`;
  }
}
```

<br/>

#### **📝Explanation**

<br/>

first I get length of names, and divide 4 cases.
length is 1, 2, 3 and more. and then return proper string.
return string tip is use ``(backtick).

<br/>

### **Other Solution**

<br/>

```javascript
function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}
```

<br/>

#### **📝Explanation**

<br/>

I like this solution than mine.
It use Object. It's more simple than ifs.

<br/>

### **🔖Summary**

<br/>

1. let's use object

<br/>