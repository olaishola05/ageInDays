let date = new Date();

let year = date.getFullYear;

function name(userName){
    userName = prompt("which year were you born? ");

    console.log("I was born in the " + userName);
    // return userName;
}
name();


//calculating the age 

function AgeInYear(userAge){
    userAge = year - name(userName);
    console.log(userAge);
}
AgeInYear();
// console.log(date);
// console.log(name());