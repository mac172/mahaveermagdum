---
title: Python History and Syntax
date: Sep 7, 2022
metad: Python beginner course, Python basics
---

<script>
  import 'prism-themes/themes/prism-shades-of-purple.css'
  import CodeBox from '$lib/components/CodeBox.svelte'
  import Note from '$lib/components/Note.svelte'
  import Breaker from '$lib/components/Breaker.svelte'
  import pythonInter from './assets/python-interpreter.jpg'
</script>


<div style="box-shadow: 0 5px 12px 0 rgba(255,255,255,0.4); padding: 5px; border-radius: 13px; margin-bottom: 25px">
This is small introduction on most easy to learn programming language <strong>Python</strong>, developed by Guido van Rossum, and released in 1991. It is known for it's easy to read code. 
</div>

### So let's start!!!

<Breaker />

# History of Python 

**Python** widely used general-purpose, high-level programming language, which is most of the known for simplicity a programming language can give.

The creator of **Python** , Guido Van Rossum started to work on it in CWI at Netherland. As he already contrubute to **ABC** programming language which has *Exception Handling* (error tackling) feature and has good iterface with *Amoeba Operating System* .

So he think why not we use **ABC**'s syntax and it's amazing feature to create a unique, easy to express programming language. At first there are too many promblems with this new programming language, but he solve them and give us most loved programming language.

<Note>
Note that Python is influced by ABC and Modula-3.</Note>

<br>
<Breaker />

## So why name it Python?

To known why?, let's go to 1991 when it is going to realease. At that time it's creator Guido Van Rossum want a unique, sort and mysterious name for it's most amazing invention. At that time he come across a popular BBC comedy series called **Monty Python's Flying Circus** and he decided to use *Python* as name.

<Breaker />

It's application is seen in a lot of field, some of them are: 

 - Data Analysis and Processing
 - Artificial Intelligence
 - Games
 - Hardware/Sensor/Robots
 - Desktop Applications

<Breaker />

# Installing Python 

### For Windows and Mac:

  Go to Python's official [site](https://www.python.org) and download the binary (.exe). After that install on computer like any other program.


### For Linux:

  Most of linux distros comes with python already installed. If you don't have installed don't worry!, by typing following command in terminal you have this amazing programming language.

<CodeBox />

  ```linux
sudo apt-get update && sudo apt-get upgrade
sudo apt-get install python3

  ```

After installing Python, you can check it by executing 

<CodeBox />

  ```linux
python3 --version
  ```

<Note>
Kindely see the Python documentation or research on google for any error you get.
</Note>

<br>

<Breaker />

# Hello, World!

Open terminal/command prompt and type following sentences.

<CodeBox />

```
 python3
```

You can see bunch of information  like python version, Clang version and other stuffs. Feel free to explore things on your own!.

Now type,

<CodeBox />

```
>>> print("Hello, World!")
```

this will print Hello, World! to terminal, and that's it!. You write your first Python program.

<Note>
Python remove all unwanted boilerplate code and allow us to write much less code than any other programming language. But to keep in mind that this amazing feature has it's drawback, which is <strong>Slow</strong> runtime compare to any other language.
</Note>


<br>

<Breaker />

# Python Interpreter

Above code you write is in Python's interpreter. Interpreter are allow you to write and execute each line of code quickly without you need to run program manually each time.

This is a similar to Google Colab or Jupyter Notebook.


<Breaker />

# Syntax

Python is famous for it's easy to ready syntax. In Hello, World!
example you can see that, you don't need any boilercode (e.g. java code) to write simple program like this.

Insted Python realy on indentation block means, some fix number of spaces/tabs are necessary for indicating each block of code.

<CodeBox />

```python 
def main():
  print("Hi!") // see before print there is some spaces!

main() // calling function
```

above code will run without error, now for below... try to run it and see what happen

<div style="border-left: 2px solid red; background-color: lightred">

```python
def main():
print("Oh no! it's broke.")
```

</div>

when running this code you get an error saying, 

<div style="background-color: #FFCCCB; border: 2px solid #FFCCCB; padding: 4px; border-radius: 10px; color: black;">
IndentationError: unexpected indent
</div>

telling you have miss indentation or you accidentally type an extra space/tab. As a beginner you can get frustrated, but cool you mind and see error closely and get what and where things go out of wild.

<Breaker />

# Comments

Usually comments are helpfull for programmers rather than computer. This lines are ignored by Python. To take note comments tell other programmer detail of function/program or what this thing do and sometime how this do.


In Python there are two types of comments

  - Single line comment (#)
  - Multi line comment ('''  ''')

1. Single line comment

This comment start with pound (#) symbol at front of line. Python simply ignore this line.


2. Multi line comment

Some time you have to explain things in multiple line, in that case you can use multi-line comment by putting ''' start and ''' end of line.

<CodeBox />

```python
# Single line comment, this line ignored by python
print("What's up!")

'''
this also ignored!!
Multi
line 
comment.
below function add 'a' and 'b'
a: number
b: number
'''
def add(a,b):
  return a + b
```
