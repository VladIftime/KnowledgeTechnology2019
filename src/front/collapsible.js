/*
    This file controls collapsibles.
    When one card is folded out, the other ones close.
*/

// Collect all elements of the class collapsible and initialize them.
let initialized = 0
if (initialized == 0) {
    initialized = 1
    var coll = document.getElementsByClassName("collapse")
    initialize()
}


// Set all cards to closed
function closeAll() {
    for (let i = 0; i < coll.length; i++) {
        coll[i].nextElementSibling.style.display = "none"
    }
}

// Add event listeners and a function to all elements of the class collapsible
function initialize() {
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {     // coll[i] can be targeted with "this" inside anonymous function
            this.classList.toggle("collapse-active")        //TODO: Fix this
            if (this.nextElementSibling.style.display === "block") {
                this.nextElementSibling.style.display = "none"
            } else {
                closeAll()                                  // Close all cards, then open current one
                this.nextElementSibling.style.display = "block"
            }
        })
    }
}