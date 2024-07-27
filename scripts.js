const amount = document.getElementById("amount")


// Manipulate the input value to receive only numbers.
amount.addEventListener("input", () => {
    console.log(amount.value)
})