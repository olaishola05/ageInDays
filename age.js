let date = new Date();
let year = date.getFullYear();
let ageDiff = 0;

let getAge = (document.getElementById("ageBtn").onclick = function age() {
  let userAge = document.getElementById("ageYear").value;
  ageDiff = year - userAge;

  alert("my age is " + ageDiff);
});

document.getElementById("ageBtn").addEventListener("click", OurAge);

function OurAge() {
  let value = document.getElementById("options").options;
  let picks;

  for (let i = 0; i < value.length; i++) {
    picks = value[i];
    if (picks.selected === true) {
      let days = ageDiff * 365;
      alert("my age in " + days + " days");
      break;
    } else if ((picks.value = "weeks")) {
      let weeks = ageDiff * 52;
      alert("your age in " + weeks + " weeks");
      break;
    } else if ((picks.text = "Months")) {
      let months = ageDiff * 12;
      alert("my age in " + months + " months");
      break;
    }
  }
  return picks;
}
//   for (let i = 0; i < value.options.length; i++) {
//     // ourPick = value[i];
//     if (value.options[i].text == "Days") {
//       let days = ageDiff * 365;
//       alert("my age in " + days + " days");
//     } else if (value.options[i].text == "Weeks") {
//       let weeks = ageDiff * 52;
//       alert("your age in " + weeks + " weeks");
//     } else {
//       let months = ageDiff * 12;
//       alert("my age in " + months + " months");
//     }
//   }

document.getElementById("ageBtn").addEventListener("click", clearInput);

function clearInput() {
  document.getElementById("options").value = "";
  document.getElementById("ageYear").value = "";
}
