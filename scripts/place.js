function calculateWindChill(tempF, speedMph) {
    return (
      35.74 + 0.6215 * tempF -
      35.75 * Math.pow(speedMph, 0.16) +
      0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const temp = parseFloat(document.getElementById("temp").textContent);
    const speed = parseFloat(document.getElementById("speed").textContent);
    const windchill = document.getElementById("windchill");
  
    if (temp <= 50 && speed > 3) {
      windchill.textContent = `${calculateWindChill(temp, speed)} °F`;
    } else {
      windchill.textContent = "N/A";
    }
  
    // Footer year and modified date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("modified").textContent = document.lastModified;
});  