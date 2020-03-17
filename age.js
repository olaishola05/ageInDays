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
    let value = document.getElementById("options");

    for(let i = 0; i < value.length; i++){
        if(value.options[0].text == "Days"){
            let days = ageDiff * 365;  
            alert("my age in " + days+" days")
        }
        else if(value.options[1].text == "Weeks"){
            let weeks = ageDiff * 52;
            alert("your age in " + weeks + " weeks");
        }
        else{
            let months = ageDiff * 12
            alert("my age in " + months+ " months");
        }
    }
    
}



//add clear features after the button has been clicked

document.getElementById("ageBtn").addEventListener("click", clearInput);


function clearInput() {
    document.getElementById("options").value = "";
    document.getElementById("ageYear").value = "";
}
