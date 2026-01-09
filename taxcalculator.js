function calculate() {
  const income = document.getElementById("income").value;
  let tax = 0;

  if (income <= 250000) tax = 0;
  else if (income <= 500000) tax = income * 0.05;
  else if (income <= 1000000) tax = income * 0.2;
  else tax = income * 0.3;

  document.getElementById("result").innerText =
    "Calculated Tax: ₹" + tax;
}

