---
title: Binary search in python
date: "Oct 7, 2022"
metad: Implementing it in Python language
recent: true
time: "4min read"
draft: true
---

<script>
  import 'prism-themes/themes/prism-shades-of-purple.css'
  import Code from '$lib/components/Code.svelte'
  import Note from '$lib/components/Note.svelte'
  import Breaker from '$lib/components/Breaker.svelte'
  import AlsoLike from '$lib/components/youMayAlsoLike.svelte'
</script>

Let's talk about searching algorithm called **Binary Search**, and it's applications. Usually it is used to find index of element from '*sorted* ' array.

<br />


<Note>
This algorithm only work on sorted array, if array is not sorted then we have to sort it before using binary search.
</Note>

<br />
<Breaker />
<br />



<h1 class="text-3xl"> How it works!</h1>
<br />

Binary search uses divide-and-conqure method. In this method you divide whole array in two equal part, and check for key element.

<br />
<h1 class="text-3xl">Steps: </h1>
<br />

<Code>

<span slot="list">

 - 1) Calculate mid of array. 

<br />

2) Check if desire element is same as mid (middle) element. Create two equal length array from it.

<br />

3) Or if desire element is greater than mid, then discard left side of array. Change mid = mid + 1 and repeat all steps again.

<br />

4) Otherwise discard right side of array and change mid = mid - 1. Repeat all steps again.

</span>
</Code>
