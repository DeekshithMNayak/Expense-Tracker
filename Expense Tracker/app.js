const form = document.getElementById("expense-form");
const description = document.getElementById("description");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

let total = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const desc = description.value;
  const amt = parseFloat(amount.value);
  const cat = category.value;

  if (!desc || !amt || amt <= 0) {
    alert("Please enter a valid description and amount.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${desc} - ₹${amt} [${cat}]`;

  expenseList.appendChild(li);

  total += amt;
  totalDisplay.textContent = total;

  // Reset form
  description.value = "";
  amount.value = "";
  category.value = "Food";
});
