---
sidebar_position: 2
---

# Good To Have      
Extracted from [Reference](https://medium.com/gojekengineering/the-basics-of-writing-clean-code-39ed770b626d)
## Functions
1. Avoid using `if-else` expressions. Having too many if-else could lead to creating a lot of conditional branch predictions which leads to misprediction - causing potential bugs.
2. Avoid passing in `boolean` values, having `boolean` hints that you have an `if-else` expression somewhere in the method.
3. Functions should either return a value or change a value, not both. This is to minimize side effects of the logic implementations.
4. Code should always be separated with blank lines to club logical blocks together. Think of different lines of code as thoughts and then always think of organising similar thoughts together.
5. Don’t return null
6. As much as possible, stay within 5 - 15 lines of code. It fits your screen more easily and it's about the conceptual size that you can hold in your head. If you are writing less than 5 lines, you might be breaking up the code too much. 

## Comments
1. Always comment your code to explain what it does.
2. Comment if your code has a `bad smell`
3. Link the articles and tutorials you referenced for your code in the comments.
4. Link the articles, tutorials, Stack Overflow forum you referenced to fix bugs.
5. Don’t use a comment when you can use a well named Function or a Variable 