1.
What will be output to the console after the code runs?

```js
let count = 0;

if(count){
  console.log('Counting')
}else if(count > 0){
  console.log('Counting down')
}else if(count === 0){
  console.log('Done counting')
}

```
C. Done counting

2.
What will be output to the console after the code runs?

```js
let total = 10;
let amount = "10";

if(total === amount){
  console.log('Same')
}else if(total == amount){
  console.log('Similar')
}else if(total = amount){
  console.log('This is incorrect. Remember a single equals sign is for assignment, not for comparisons.')
}

```
B. Similar

3.
What will be output to the console after the code runs?

```js
let total = 10;

if(total >= 10){
  console.log('one')
}

if(total >= 0 && total > 100){
  console.log(' two')
}

if(total >= 0 || total > 100){
  console.log(' three')
}

```
E. one three

4.
What will be output to the console after the code runs?

```js
let city = "";

console.log(!!city)

city = "St. Louis"

console.log(!!city)
```

D. false
     true

5.
What will be output to the console after the code runs?

```js
let count = -100;

console.log(!!count)

count = 0;

console.log(!!count)

count = 100

console.log(!!count)
```
B. true
     false
     true

6.
What will be output to the console after the code runs?

```js
let isConnected = true;
console.log(!isConnected)
```
A. false