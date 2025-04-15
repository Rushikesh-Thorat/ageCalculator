let userInput = document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result")
let calculate = document.getElementById("calculate")

function calculateAge(){
    let birthDate = new Date(userInput.value)

    let today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months = 12 + months;
        days = getDaysInMonth(birthDate.getMonth(), birthDate.getFullYear()) + days;
    }

    result.innerHTML = `You are ${years} years, ${months} months, ${days} days old.`
}

function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

calculate.addEventListener("click",calculateAge);
