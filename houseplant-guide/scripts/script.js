const plantList = [
  { name: "Snake Plant", light: "low", pet: "no" },
  { name: "Spider Plant", light: "medium", pet: "yes" },
  { name: "Areca Palm", light: "bright", pet: "yes" },
  { name: "Pothos", light: "low", pet: "no" },
  { name: "Calathea", light: "medium", pet: "yes" }
];

  // Set the current year dynamically
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // Display the last modified date
  document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

const dailyPlant = plantList[Math.floor(Math.random() * plantList.length)];
const output = document.getElementById("plant-output");
if (output) {
  output.textContent = `Today's pick: ${dailyPlant.name}`;
  localStorage.setItem("plantOfDay", dailyPlant.name);
}

const form = document.getElementById("plant-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const light = document.getElementById("light").value;
    const pet = document.getElementById("pet").value;

    const match = plantList.find(p => p.light === light && p.pet === pet);
    const recommendation = document.getElementById("recommendation");

    if (match) {
      recommendation.textContent = `Recommended Plant: ${match.name}`;
    } else {
      recommendation.textContent = "No matching plant found. Try different options.";
    }
  });
}
