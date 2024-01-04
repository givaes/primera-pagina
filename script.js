




function toggleMenu() {
  var menu = document.getElementById('menu');
  var overlay = document.getElementById('overlay');

  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
    overlay.style.display = 'none';
    overlay.style.zIndex = -1; 
  } else {
    menu.classList.add('show');
    overlay.style.display = 'block';
    overlay.style.zIndex = 1;
  }
}




window.onclick = function (event) {
  var menu = document.getElementById("menu");
  var overlay = document.getElementById("overlay");
  var menuIcon = document.querySelector(".menu-icon");
  
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.classList.remove("show");
    overlay.style.display = 'none';
    overlay.style.zIndex = -1;
  }
}

function toggleMenu() {
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('overlay');

    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        overlay.style.display = 'none';
        overlay.style.zIndex = -1;
    } else {
        menu.classList.add('show');
        overlay.style.display = 'block';
        overlay.style.zIndex = 1;
    }
}


function sortProductsByPrice(order) {
  const productsContainer = document.querySelector(".products-section");
  const productItems = [...productsContainer.querySelectorAll(".product-item")];

  productItems.sort((a, b) => {
      const priceA = parseFloat(a.querySelector(".price-value").innerText.replace("$", ""));
      const priceB = parseFloat(b.querySelector(".price-value").innerText.replace("$", ""));

      if (order === "asc") {
          return priceA - priceB;
      } else {
          return priceB - priceA;
      }
  });

  productsContainer.innerHTML = "";


  productItems.forEach(item => {
      productsContainer.appendChild(item);
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const priceFilter = document.getElementById("price-filter");
  priceFilter.addEventListener("change", () => {
      const selectedOrder = priceFilter.value;
      sortProductsByPrice(selectedOrder);
  });
});
