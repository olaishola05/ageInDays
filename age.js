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
    // let option1 = document.getElementById("options").options[0].text
    // let option2 = document.getElementById("options").options[1].text
    // let option3 = document.getElementById("options").options[2].text
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

// let day = function ageInDays(days){
//     let option = document.getElementById("options").options[0].text
//     if(option){
//     days = ageDiff * 365;
//     // alert("my age in " + days+" days");
//     }
// }

// let week = function ageinWk(weeks) {
//   let option = document.getElementById("options").options[1].text;
//   if (option) {
//     weeks = ageDiff * 52;
//     // alert("your age in " + weeks + " weeks");
//   }
// };

// let month = function ageInMonth(months){
//     let option = document.getElementById("options").options[2].text
//    if(option){
//     months = ageDiff * 12;
//     // alert("my age in " + month+ " months");
//    }
// }


// function ageinWk(weeks){
//     document.getElementById("options").options[1].text
//    weeks = ageDiff * 52

//     // alert("your age in " + weeks + " weeks");
// }


// function ageInMonth(month){
//     document.getElementById("options").options[2].text
//     month = ageDiff * 12;
//     // alert("my age in " + month+ " months");
// }

// document.getElementById("ageBtn").addEventListener("click", OurAge);



// function OurAge(ageInDays, ageinWk, ageInMonth){

//     if (document.getElementById("options").options[0].text == ageInDays){
//         ageIndays = ageInDays();
//         alert("my age in " + ageInDays)
//     }
// // ageType.forEach(element => {
// //     if (element == OurAge(ageType[0])){
// //         alert("my age in " + )
// //     } 
// //     else if(element === ageType[1]) {
// //         alert("my age in " + ageType[1])
// //     } 
// //     else {
// //         alert("my age in " + ageType[2])
// //     }
// // });
// }


//add clear features after the button has been clicked

