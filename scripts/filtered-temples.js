const temples = [
    {
    templeName: "Londrina Brazil",
    location: "Londrina, Brazil",
    dedicated: "2022, September, 18",
    area: 23000,
    imageUrl: "images/temple1.JPG"
    },
    {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "images/temple2.JPG"
    },
    {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 45683,
    imageUrl: "images/temple3.JPG"
    },
    {
    templeName: "Manhattan New York",
    location: "Manhattan, New York, USA",
    dedicated: "2004, June, 13",
    area: 20632,
    imageUrl: "images/temple4.JPG"
    },
    {
    templeName: "Belém Brazil",
    location: "Belém, Brazil",
    dedicated: "2018, November, 18",
    area: 28475,
    imageUrl: "images/temple5.JPG"
    },
    {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19828,
    imageUrl: "images/temple6.JPG"
    },
    {
    templeName: "Gilbert Arizona",
    location: "Gilbert, Arizona, USA",
    dedicated: "2014, March, 2",
    area: 85000,
    imageUrl: "images/temple7.JPG"
    },
    {
    templeName: "Santo Domingo Dominican Republic",
    location: "Santo Domingo, Dominican Republic",
    dedicated: "2000, September, 17",
    area: 67000,
    imageUrl: "images/temple8.JPG"
    },
    {
    templeName: "Jacksonville Florida",
    location: "Jacksonville, Florida, USA",
    dedicated: "2023, April, 2",
    area: 29000,
    imageUrl: "images/temple9.JPG"
    },
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    }
  ];
  
  // Get references
  const container = document.querySelector('.grid-container');
  const navLinks = document.querySelectorAll('nav a');
  
  // Convert "YYYY, Month, Day" string to year
  function getYear(dateStr) {
    return parseInt(dateStr.split(',')[0]);
  }
  
  // Render temple cards
  function displayTemples(templeArray) {
    container.innerHTML = ''; // Clear container
    templeArray.forEach(temple => {
      const figure = document.createElement('figure');
  
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = "lazy";
  
      const caption = document.createElement('figcaption');
      caption.innerHTML = `
        <strong>${temple.templeName}</strong><br>
        Location: ${temple.location}<br>
        Dedicated: ${temple.dedicated}<br>
        Size: ${temple.area.toLocaleString()} sq ft
      `;
  
      figure.appendChild(img);
      figure.appendChild(caption);
      container.appendChild(figure);
    });
  }
  
  // Handle filtering
  function filterTemples(filter) {
    let filtered;
    switch (filter) {
      case 'Old':
        filtered = temples.filter(t => getYear(t.dedicated) < 1900);
        break;
      case 'New':
        filtered = temples.filter(t => getYear(t.dedicated) > 2000);
        break;
      case 'Large':
        filtered = temples.filter(t => t.area > 90000);
        break;
      case 'Small':
        filtered = temples.filter(t => t.area < 10000);
        break;
      default:
        filtered = temples;
    }
    displayTemples(filtered);
  }

  const menuButton = document.getElementById("menu-button");
  const navMenu = document.getElementById("nav-menu");
  
  menuButton.addEventListener("click", function () {
      navMenu.classList.toggle("show");
      menuButton.classList.toggle("close");
  });
  
  // Add click listeners to nav
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const filter = link.textContent.trim();
      filterTemples(filter);
    });
  });
  
  // Footer updates
  document.getElementById("copyright-year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
  
  // Initial display
  displayTemples(temples);  