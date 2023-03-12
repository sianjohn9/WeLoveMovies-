1.
What will print to the console when the following code executes? 

```js
let totals = [10,20,30,40];
for(var i=0; i < totals.length; i+=2){
  console.log(totals[i]*2)
}
```
C. 20 
     60

2.
What will print to the console when the following code executes? 

```js
let totals = [10,20,30,40];
for(var i=0; i < 3; i++){
  console.log(totals[i]*2)
}
```
D. 20
     40 
     60
3.
What will print to the console when the following code executes? 

```js
let totals = [10,20,30,40];
for(var i=2; i < totals.length; i++){
  console.log(totals[i]*2)
}
```

C. 60
     80

4.
What will print to the console when the following code executes? 

```js
let totals = [10,20,30,40];
for(var i=0; i < totals.length; i++){
  let weightedTotal = totals[i]*2;
  if(weightedTotal < 75){
    console.log(weightedTotal)
  }
}
```
B. 20
     40
     60