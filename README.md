# CloudTextEditor
For ACC

## Style

Please read this style guide in full.

Indentation should consist of four spaces (not tabs). If you don't know how to configure your text editor to do this. Please talk to Sullivan.

Lines should not exceed 80 characters.

Semicolons should be avoided except where necessary.

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