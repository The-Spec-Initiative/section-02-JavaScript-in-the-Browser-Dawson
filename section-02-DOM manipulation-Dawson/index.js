
// 9. DOM Manipulation
// Goal:
//  Interact with HTML elements using JavaScript.
// Key Concepts:
// document.querySelector
// innerText vs innerHTML
// Adding and removing classes
// Lab Challenge:
//  Build a button that changes the text of a paragraph when clicked.

const btn = document.querySelector("button")

btn.addEventListener("click", function(){
    const p = document.querySelector("p")
    let newTExt = "Hey I'm a new Text"
    p.innerText = newTExt
})