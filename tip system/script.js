function calculateTip() {
    var billAmt = document.querySelector('.billamt').value;
    var serviceQual = document.querySelector('.serviceQual').value;
    var numOfPeople = document.querySelector('.peopleamt').value;
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
    if (numOfPeople === "" || numOfPeople <= 1) {
      numOfPeople = 1;
      document.querySelector('.each').style.display = "none";
    } else {
      document.querySelector('.each').style.display = "block";
    }
    var total = (billAmt * serviceQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(0);
    document.querySelector('.totalTip').style.display = "block";
    document.querySelector('.tip').innerHTML = total;
  }
  document.querySelector('.totalTip').style.display = "none";
  document.querySelector('.each').style.display = "none";
  document.querySelector('.calculate').addEventListener('click',calculateTip);