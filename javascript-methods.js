/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  let new_array = [];
  for (let i = 0; i < this.length; i++) 
  { 
    if (this[i] === undefined) continue;
    new_array[i] = callbackFn(this[i], i, this); 
  }
  return new_array;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let pass_test = [];
  let index = 0;
  for (let i = 0; i < this.length; i++) 
  { 
    if (this[i] === undefined) continue;
    if(callbackFn(this[i], i, this) == true)
    {
      pass_test[index] = this[i]; 
      index++;
    }
  }
  return pass_test;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let i = 0; i < this.length; i++) 
  {
    if (this[i] === undefined) continue;
    if(callbackFn(this[i],i, this)==true)
      return true; 
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++) 
  {
    if (this[i] === undefined) continue;
    if(callbackFn(this[i],i, this)==false)
      return false; 
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  if (this.length === 0)
    throw new Error("Error");
  let value = this[0];
  for (let i = 1; i < this.length; i++) 
  {
    if (this[i] === undefined) continue;
    value = callbackFn(value, this[i], i, this);
  }
  return value;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for (let i = 0; i < this.length; i++) 
    if(this[i] === searchElement)
      return true;
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  if (searchElement === undefined)
    return -1;
  for (let i = 0; i < this.length; i++) 
  {
    if (this[i] === undefined) continue;
    if(this[i] === searchElement)
      return i;
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  if (searchElement === undefined)
    return -1;
  for (let i = this.length-1; i >= 0; i--) 
  {
    if (this[i] === undefined) continue;
    if(this[i] === searchElement)
      return i;
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  let return_arr = [];
  if(typeof(object)==='string')
  {
    for(let j = 0;j<object.length;j++)
      return_arr[j] = String(j);
    return return_arr;
  }
  if(typeof(object)!='object')
    return return_arr;
  let index = 0;
  for (const prop in object) 
  {
    if(object.hasOwnProperty(prop))
      return_arr[index] = prop;
    index++;
  }
  return return_arr;
};

// VALUES //
Object.myValues = function(object) {
  // Place your code here.
};