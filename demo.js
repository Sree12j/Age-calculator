const values = document.querySelector(".value");
const btn = document.getElementById("btn");
const rs = document.querySelector(".result");

function calculateAge() {
    const birthdayvaluee = values.value;
    if (birthdayvaluee === "") {
        alert("Please select your date of birth");
    } else {
        const ageValue = getAge(birthdayvaluee);
        rs.innerText = `Your age is ${ageValue} ${ageValue > 1 ? "years" : "year"} old.`;
    }
}

function getAge(birthdayvaluee) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayvaluee);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }
    return age;
}

btn.addEventListener("click", calculateAge);
