// Currency quote of the day.
const USD = 5.64
const EUR = 6.14
const GBP = 7.26

// Getting the form elements.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")


// Manipulate the input value to receive only numbers.
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturing the form submit event.
form.onsubmit = () => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}

// Function to convert currency.
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${price}`


        // Applying the class that displays the footer to show the result.
        footer.classList.add("show-result")

    } catch (error) {
        // Removing the footer class that is hidden.
        footer.classList.remove("show-result")

        console.log(error)
        alert("Unable to convert!")
        
    }
}