---
title: C Functions
date: "Sept 3, 2022"
---

<script>
  import 'prism-themes/themes/prism-shades-of-purple.css'
  import CodeBox from '$lib/components/CodeBox.svelte'
  import Note from '$lib/components/Note.svelte'
  import Breaker from '$lib/components/Breaker.svelte'
</script>

<div style="box-shadow: 0 5px 12px 0 rgba(255,255,255,0.4); padding: 5px; border-radius: 13px; margin-bottom: 25px">

Functions are known for it's reuse capabilities. Means that it will only run when call, until it do nothing.
It can accepts data known as ** *parameters* ** .

</div>

<Breaker />

## Define 

<CodeBox />

```c
int square(int b) {
  return b*b
}
```

As you see above code block has a function which work is to square the given number (** b **). Some functions return value and some not, which we will be see in a moment.

<Breaker />


## Creating Functions: 

To create (also called by 'declare') your own functions, first choose one of the data type (e.g. int,float,bool,etc...) then specify your function name, followed by parentheses '()' and curly bracket and done! . 

<CodeBox />

```c
void myFunction() {
  // do something here ....
}

```

- ** *void* ** is C's data type. It define what/which type of value should function return. e.g. here **void** tell C that, this fuction will not return any thing.

Missmatch in delare data type and return value will cause you some headache.

- ** *myFunction()* ** is name of your own fuction followed by '()' .

- Inside (or between curly brackets) write your code that, this fuction will execute.


<Breaker />

## Calling Function

To call function you only need to write name of function (if that fuction required value then pass them to it in '()'  ).


<CodeBox />

```c
1 #include <stdio.h>
2 
3 // declare fuction 
4 void sayHello() {
5   printf("Hello, Buddy!");
6 }
7
8 int main() {
9   sayHello(); // call the fuction
10  return 0;
11 }

// Outputs: Hello, Buddy!
```

You can call fuction multiple time!

<CodeBox />

```c
4 void sayHello() {
5   printf("Hello, Buddy!");
6 }
7
8 int main() {
9   sayHello(); // call the fuction
10  sayHello(); // we call this again
11  return 0;
12 }

// Outputs: Hello, Buddy!
//          Hello, Buddy!
```
