---
title: Variables
date: Sep 7, 2022
metad: Variables, what are variables
---

<script>
  import 'prism-themes/themes/prism-shades-of-purple.css'
  import CodeBox from '$lib/components/CodeBox.svelte'
  import Note from '$lib/components/Note.svelte'
  import Breaker from '$lib/components/Breaker.svelte'
  import GlassBox from '$lib/components/GlassBox.svelte'
</script>


In this posts we will talking about **variables**. 

<br>

<GlassBox>
Variables in general containers for storing data. And in abstract 
these are names for location you give when you store something in memory.
</GlassBox>


To understand what is variable, imagine this example. 

You are in a messy room containing various types of things, e.g. books, games, shirts, etc. Here your goal is to clean up room. How will you arrange things in good manner?

One way is that throw everything in some storage box or cupboard. Your initial goal is complete... but what will you do if you need some things from it?. To take things from cupboard or anything you need to take out most of the unnecessary things, which is not good, right?.

To avoid that problem, you can store same type of things in one or two storage boxes/in same place in  cupboard. This will solve earlier problem. 

<GlassBox>
The take out is that in programming you use variables to store data in memory (storage box). 
</GlassBox>


And to simply it more you give that varible a lable, saying "hey you will store this specific type of data with you". In programming that lable is called data type.

Fortunately in Python you don't have to care about this thing. Like below example.

<CodeBox />

```python
# declaring varible with value 10
varible_with_value = 10
```

Well to declare a varible you first write name of varible followed by " = " and then value, and done!!

Remember I said "in Python you don't have to care about which type of data one variable can store", well this give one drawback of changing value of variable with/without you knowning.

<CodeBox />

```python
number = 10 # variable with integer value

number_become_string = "10" # now it convert to string

```

<br>

<Breaker />


# Casting

You can change value of variable by doing this also,

<CodeBox />

```python
number = 10 # integer
string = str(number) # string will become "10"
floating = float(number) # floating will become 10.0
```

<br>

<Note>
In Python variables are case-sensitive, means 'a' will not be equal to 'A'. See below code.
</Note>

<br>

<CodeBox />

```python
a = 10 
A = 20

print(a) # 10
print(A) # 20
```

