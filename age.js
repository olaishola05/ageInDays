let date = new Date();

let year = date.getFullYear();

let ageDiff = 0;

let getAge = document.getElementById("ageBtn").onclick = function age(){
    let userAge = document.getElementById("ageYear").value;
    ageDiff = year - userAge;

    alert("my age is " + ageDiff);
}

document.getElementById("ageBtn").addEventListener("click", OurAge);

function OurAge(){
    let value = document.getElementById("options").options[0, 1, 2].text
    if(value[0]){
        let days = ageDiff * 365;  
        alert("my age in " + days+" days")
    }
    else if(value[0]){
        let weeks = ageDiff * 52;
        alert("your age in " + weeks + " weeks");
    }
    else{
        alert("my age in " + option3+ " months");
    }
}



//add clear features after the button has been clicked

document.getElementById("ageBtn").addEventListener("click", clearInput);


function clearInput() {
    document.getElementById("options").value = "";
    document.getElementById("ageYear").value = "";
}
