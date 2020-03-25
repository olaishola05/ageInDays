let date = new Date();
let currentYear = date.getFullYear();
let ageDiff = 0;

let getAge = (document.getElementById("ageBtn").onclick = function age() {
    let userAge = document.getElementById("ageYear").value;
    ageDiff = currentYear - userAge;

    alert("my age is " + ageDiff);
});

document.getElementById("ageBtn").addEventListener("click", OurAge);

function OurAge(picks) {
    if (picks.selection.value == "") {
        alert("Please select an Option");
        picks.selection.focus();
        return false;
    }
    if (picks.selection.value == "days") {
        let days = ageDiff * 365;
        alert("my age in " + days + " days");
        picks.selection.focus();
        return false;
    }
    if (picks.selection.value == "weeks") {
        let weeks = ageDiff * 52;
        alert("your age in " + weeks + " weeks");
        picks.selection.focus();
        return false;
    }
    if (picks.selection.value == "months") {
        let months = ageDiff * 12;
        alert("my age in " + months + " months");
        picks.selection.focus();
        return false;
    }
}

document.getElementById("ageBtn").addEventListener("click", clearInput);

function clearInput() {
    document.getElementById("selectOptions").value = "";
    document.getElementById("ageYear").value = "";
}
