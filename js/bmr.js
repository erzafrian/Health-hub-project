function calculate() {
    if (age.value == '' || height.value == '' || weight.value == '' || (document.getElementById("m").checked == false && document.getElementById("f").checked == false)) {
      alert("All fields are required!");
    } else {
      calculateBMR();
    }
  }

  function calculateBMR() {
    var weightInKg = Number(weight.value);
    var heightInCm = Number(height.value);
    var ageInYears = Number(age.value);
  
    var bmr = 0;
  
    if (document.getElementById("m").checked) {
      bmr = 12 * weightInKg + 5.5 * heightInCm - 5 * ageInYears + 10;
    } else if (document.getElementById("f").checked) {
      bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * ageInYears - 161;
    }
  
    document.querySelector("#result").innerHTML = bmr.toLocaleString("en-US");
  }