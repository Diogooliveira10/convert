// Currency quote of the day.
const USD = 5.64
const EUR = 6.14
const GBP = 7.26

// Getting the form elements.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")


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
    console.log(amount, price, symbol)
}