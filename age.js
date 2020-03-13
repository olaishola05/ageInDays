let date = new Date();

let year = date.getFullYear();

let ageDiff = 0;

let getAge = document.getElementById("ageBtn").onclick = function name(){
    let userAge = document.getElementById("ageYear").value;
    alert("I was born in the year " + userAge);
    ageDiff = year - userAge;

    alert("my age is " + ageDiff);
}

document.getElementById("ageBtn").addEventListener("click", ageInDays);

function ageInDays(days){
    days = ageDiff * 365;
    alert("my age in " + days+" days");
}

function ageinWk(){
    let weeks = ageDiff * 52

    alert("your age in " + weeks + " weeks");
}


function ageInMonth(){
    let month = ageDiff * 12;

    alert("my age in " + month+ " months");
}