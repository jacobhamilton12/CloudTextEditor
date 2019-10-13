# CloudTextEditor
For Aggie Coding Club (ACC)

## Style

Please read this style guide in full.

Indentation should consist of four spaces (not tabs). If you don't know how to configure your text editor to do this. Please talk to Sullivan.

Lines should not exceed 80 characters.

Semicolons should be avoided [except where necessary.](http://inimino.org/~inimino/blog/javascript_semicolons)

The following syntax should be used to define functions and anonymous functions respectively:

```javascript
function hello() {
    console.log("hello")
}

var hello = function() { console.log("hello") }
```

If the function is particularly short:

```javascript
var helloString = () => "hello"
```

If you are using arrow functions, keep in mind that they [don't behave exactly the same way](https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html) as normal functions.

For other style considerations, use your best judgements and try to stick to the same style as the rest of the code.

## Some useful links:

- [Markdown Cheatsheet (For READMEs on Github)](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Javascript fundamentals](https://javascript.info/first-steps)
- [Arrow functions](https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html)
- [When are semicolons unnecessary?](http://inimino.org/~inimino/blog/javascript_semicolons)