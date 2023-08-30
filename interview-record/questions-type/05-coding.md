---
title: CODing QUESTIONS
---

* Make this work

```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```

* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`

* What will be returned by each of these?
  
```javascript
console.log("hello" || "world")
console.log("foo" && "bar")
```

* Write an immediately invoked function expression (IIFE)

### 4. Performance

* What tools would you use to find a performance bug in your code?
* What are some ways you may improve your website's scrolling performance?
* Explain the difference between layout, painting and compositing.

### 5. Network

* Traditionally, why has it been better to serve site assets from multiple domains?
* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
* What are the differences between Long-Polling, Websockets and Server-Sent Events?
* Explain the following request and response headers:
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* What are HTTP methods? List all HTTP methods that you know, and explain them.
* What is domain pre-fetching and how does it help with performance?
* What is a CDN and what is the benefit of using one?

### 6. Coding

Question: What is the value of `foo`?

```javascript
var foo = 10 + '20';
```

Question: What will be the output of the code below?

```javascript
console.log(0.1 + 0.2 == 0.3);
```

Question: How would you make this work?

```javascript
add(2, 5); // 7
add(2)(5); // 7
```

Question: What value is returned from the following statement?

```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

Question: What is the value of `window.foo`?

```javascript
( window.foo || ( window.foo = "bar" ) );
```

Question: What is the outcome of the two alerts below?

```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

Question: What is the value of `foo.length`?

```javascript
var foo = [];
foo.push(1);
foo.push(2);
```

Question: What is the value of `foo.x`?

```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```

Question: What does the following code print?

```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
Promise.resolve().then(function() {
  console.log('three');
})
console.log('four');
```

Question: What is the difference between these four promises?

```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```

Question: What will the code below output to the console and why?

```javascript
(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));
```

Question: Consider the two functions below. Will they both return the same thing? Why or why not?

```javascript
function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}
```
