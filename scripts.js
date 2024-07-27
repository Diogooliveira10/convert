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
const result = document.getElementById("result")


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
        // Displaying the quote for the selected currency.
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calculating the total.
        let total = amount * price

        // Displaying the result.
        result.textContent = total

        // Applying the class that displays the footer to show the result.
        footer.classList.add("show-result")
    } catch (error) {
        // Removing the footer class that is hidden.
        footer.classList.remove("show-result")

        console.log(error)
        alert("Unable to convert!")
        
    }
}

// Format the currency in Brazilian Real.
function formatCurrencyBRL(value) {
    // Convert to number to use toLocaleString to format in the BRL standard. (R$ 00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}