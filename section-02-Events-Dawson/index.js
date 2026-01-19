
// 10. Events
// Goal:
//  Respond to user actions.
// Key Concepts:
// Event listeners

// Click, input, submit events

// Event handlers

// Lab Challenge:
//  Create a login form that validates input when the submit button is clicked.

const form = document.querySelector('form')
form.addEventListener("submit", function(e){
    e.preventDefault()
    // fake logins
    let username = "Sammy@PhD"
    let password = "GodIs8"

    // accepting the input from the users
    let user = document.getElementById("user").value
    let pass = document.getElementById("pass").value
    console.log(user)
    console.log(pass)
    // checking if the user's  login 
    if(user === username && pass === password){
        console.log("Well Done")
    }
    else{
        console.log("Oh brother.. why")
    }
})
