// Document elements
var filenameBox = document.getElementById("filename")
var newB = document.getElementById("new")
var loadB = document.getElementById("load")
var saveB = document.getElementById("save")
var saveAsB = document.getElementById("saveAs")
var contentBox = document.getElementById("editor")
var currFile = File

// Look an arrow function!
var filename = () => filenameBox.value;

loadB.addEventListener("input", function() {
    currFile = loadB.files[0]
    var fr = new FileReader()
    fr.onload = function(e) {
        // e.target.result should contain the text
        contentBox.value = e.target.result
    }
    fr.readAsText(currFile)
    console.log("loaded file")
})