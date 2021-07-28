# PaginationHelper

<br/>

## **🤺Kata Description**

<br/>

For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

<br/>

### **👌Examples**

<br/>

```js
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); //should == 2
helper.itemCount(); //should == 6
helper.pageItemCount(0); //should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); //should == 1 (zero based index)
helper.pageIndex(2); //should == 0
helper.pageIndex(20); //should == -1
helper.pageIndex(-10); //should == -1
```

<br/>

## **🧐CODE REVIEW**
***

<br/>

### **😫My Incorrect Solution**
### **🧾My Solution**

<br/>

```javascript
// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  const pageCount = this.pageCount();
  if(pageIndex < 0 || pageIndex > pageCount-1){
    return -1;
  }else if(pageIndex < pageCount-1){
    return this.itemsPerPage;
  }else if(pageIndex === pageCount-1){
    return this.itemCount() % this.itemsPerPage;
  } 
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
    return -1;
  }
  return Math.floor((itemIndex + 1)/this.itemsPerPage);
}
```

<br/>

#### **📝Explanation**

<br/>

It's my first 5kyu kata solution.

This solution is Make 4 pagination function.

at first, you can get only item collection and itemsPerPage.

If it has 6 items and itemsPerPage is 4, It make 2 pages. page #1 has 4 items and page #2 has 2 items.

principle is simple. It can be seen everywhere in the website. but, Be careful for exception handling.

I like this kata. It's so practical than other problem. nice

<br/>

### **Other Solution**

<br/>

```javascript
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection, this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return pageIndex < this.pageCount() 
    ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
    : -1;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
}
```

<br/>

#### **📝Explanation**

<br/>

ternary operator is good for simple case.

It's so good.

<br/>

### **🔖Summary**

<br/>

1. I learned pagination solution.

<br/>