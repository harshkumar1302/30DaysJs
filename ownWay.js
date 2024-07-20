// // Check if the Number is Positive / Negative / Zero


function checkNumber() {
    const number = parseFloat(document.getElementById("numberInput").value);


    if (isNaN(number)) {
        console.log("Enter a Valid number.")
    } else if (number > 0) {
        console.log("It's an Positive Number.")
    } else if (number < 0) {
        console.log("It's an Negative Number.")
    } else {
        console.log("It's Zero.")
    }
}

document.getElementById("checkButton").addEventListener("click", checkNumber);

document.getElementById("numberInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        checkNumber();
    }
});

function clearInput() {
    document.getElementById("numberInput").value = "";
}

document.getElementById("clearButton").addEventListener("click", clearInput)