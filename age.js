let date = new Date();
let currentYear = date.getFullYear();
let ageDiff = 0;

// let inputVerify = (document.getElementById("ageBtn").onclick = function() {
//     let userInput = document.getElementById("ageYear");

//     if (userInput == "") {
//         alert("enter age year in Numeric values");
//         userInput.focus();
//         return false;
//     }
//     if (userInput == null) {
//         alert("input cannot be empty");
//     }
// });

let getAge = (document.getElementById("ageBtn").onclick = function age() {
    let userAge = document.getElementById("ageYear").value;
    ageDiff = currentYear - userAge;

    // alert("my age is " + ageDiff);
});

document.getElementById("ageBtn").addEventListener("click", ourAge);

function ourAge() {
    let sel = document.getElementById("selectOptions");

    if (sel.value == "") {
        alert("Please select an Option");
        sel.focus();
        return false;
    }
    if (sel.value == "days") {
        let days = ageDiff * 365;
        alert("my age in " + days + " days");
        sel.focus();
        return false;
    }
    if (sel.value == "weeks") {
        let weeks = ageDiff * 52;
        alert("your age in " + weeks + " weeks");
        sel.focus();
        return false;
    }
    if (sel.value == "months") {
        let months = ageDiff * 12;
        alert("my age in " + months + " months");
        sel.focus();
        return false;
    }
}

document.getElementById("ageBtn").addEventListener("click", clearInput);

function clearInput() {
    document.getElementById("selectOptions").value = "";
    document.getElementById("ageYear").value = "";
}
