const plantList = [
    { name: "Snake Plant", light: "low", pet: "no", image: "images/snake_plant.jpg" },
    { name: "Spider Plant", light: "medium", pet: "yes", image: "images/spider_plant.jpg" },
    { name: "Areca Palm", light: "bright", pet: "yes", image: "images/areca_palm_plant.jpg" },
    { name: "Pothos", light: "low", pet: "no", image: "images/pothos_plant.jpg" },
    { name: "Calathea", light: "medium", pet: "yes", image: "images/calathea_plant.jpg" },
    { name: "Peace Lily", light: "medium", pet: "no", image: "images/peace_lily_plant.jpg" }
  ];
  
  // Footer logic
  const yearSpan = document.getElementById("currentyear");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  
  const mod = document.getElementById("lastModified");
  if (mod) mod.textContent = "Last modified: " + document.lastModified;
  
  // Plant of the Day
  const dailyPlant = plantList[Math.floor(Math.random() * plantList.length)];
  const output = document.getElementById("plant-output");
  const plantImage = document.getElementById("plant-image");
  if (output && plantImage) {
    output.textContent = `Today's pick: ${dailyPlant.name}`;
    plantImage.src = dailyPlant.image;
    plantImage.alt = dailyPlant.name;
    localStorage.setItem("plantOfDay", dailyPlant.name);
  }
  
  // Picker logic
  const form = document.getElementById("plant-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const light = document.getElementById("light").value;
      const pet = document.getElementById("pet").value;
  
      const match = plantList.find(p => p.light === light && p.pet === pet);
      const recommendation = document.getElementById("recommendation");
      const imageContainer = document.getElementById("plant-image-container");
  
      if (match) {
        recommendation.textContent = `Recommended Plant: ${match.name}`;
        if (imageContainer) {
          imageContainer.innerHTML = `<img src="${match.image}" alt="${match.name}" loading="lazy" style="width:100%; max-width:400px; border-radius:8px; margin-top:1rem;">`;
        }
      } else {
        recommendation.textContent = "No matching plant found. Try different options.";
        if (imageContainer) {
          imageContainer.innerHTML = "";
        }
      }
    });
  }  