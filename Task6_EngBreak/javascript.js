
function calculateTip() {
  var billamount = document.getElementById("billamount").value;
  var service = document.getElementById("service").value;
  var numOfPeople = document.getElementById("numofpeople").value;

  if (billamount === "" || service == 0 ||numOfPeople<1 || numOfPeople=="") {
    alert("Please enter valid values");
    return;
  }

  var total = (billamount * service) / numOfPeople;
  total = total.toFixed(2);

  document.getElementById("totalTip").innerHTML = "Tip amount<br>$"+total+"<br> each";

}



