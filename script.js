// Get input elements
const wifeSalaryInput = document.getElementById("wife-salary");
const husbandSalaryInput = document.getElementById("husband-salary");
const mortgageAmountInput = document.getElementById("mortgage-amount");
const calculateButton = document.getElementById("calculate-button");
const outputLabel = document.getElementById("output");

// Calculate mortgage split
function calculateMortgageSplit() {
  const wifeSalary = parseFloat(wifeSalaryInput.value);
  const husbandSalary = parseFloat(husbandSalaryInput.value);
  const mortgageAmount = parseFloat(mortgageAmountInput.value);

  const totalSalary = wifeSalary + husbandSalary;
  const mortgagePercentage = mortgageAmount / (wifeSalary + husbandSalary);
  const wifeSplit = mortgagePercentage * wifeSalary;
  const husbandSplit = mortgagePercentage * husbandSalary;

  // Update output label
  outputLabel.innerHTML = `Wife's share: $${wifeSplit.toFixed(2)}<br>Husband's share: $${husbandSplit.toFixed(2)}`;
}

// Add event listener to calculate button
calculateButton.addEventListener("click", calculateMortgageSplit);
