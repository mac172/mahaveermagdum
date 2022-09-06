---
title: (C) Hello World
date: Sept 2, 2022
nextblog: [
  {path: '/blog/c-lang/function',name: 'C function'}
]
---

<script>
  import 'prism-themes/themes/prism-shades-of-purple.css'
  import CodeBox from '$lib/components/CodeBox.svelte'
  import Note from '$lib/components/Note.svelte'
</script>

C programming is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie at the Bell Telephone Laboratories to develop the UNIX operating system. It is one of the most widely used programming language. If you know some basic of computer memory, then you will easily learn C.


Their are programming language which give programmer less headache compare to C. But C gives you strong control over memory that most of the programming language does not.


## Applications: 

 - Operating Systems

 - Language Compilers

 - Assemblers

 - Text Editors

 - Print Spoolers
  
 - Network Drivers
  
 - Modern Programs
  
 - Databases
  
 - Language Interpreters
  
 - Utilities



 So let's start with tradition of all programming language program i.e. with "Hello, World!".

<CodeBox />

 ```c
1 #include <stdio.h>
2  int main() {
3   printf("Hello, World!");
4   return 0;
5 }
 ```

Let's break down above code line-by-line and understand it's meaning.

At 1'st line we have

<CodeBox />

```c
1 #include <stdio.h>
```

This line include C's builtin header file called 'stdio'. We bring this header file in our program becz. of ** *printf* ** function.
This function help us to print the text to standard output (console/terminal).


In next line we have two things to take care of ** *int* ** and ** *main()* ** .

<CodeBox />

```c
2 int main() {
```

First thing ** *int* ** is a data type in C. There are other data types which are built in it. 'int' is alias for 'integer'. 
Data types are basically an identity given to variables, fuctions, etc. This is similar to how you classify things in your day-to-day life.

For second thing ** *main()* ** . This is a function in C, all C program must have one **main()** function. 
This is similar to function's in **Maths** , given some input it calculate and give us output. 

<CodeBox />

```c
3   printf("Hello, World!");
4   return 0;
5 }
```

** *printf()* ** which is taken from **stdio.h** header file print text to terminal/standard output.

** *return* ** like word suggest it return valur from function, in this case *0* (meaning our program successfully run).

<div style="border: 2px dotted #fd6b85; border-radius: 12px">
<p style="padding: 10px">Don't forget to add ';' at end of each line of code.</p>
</div>
