let allTotal = 0;

// DODAVANJE U KORPU
function addToCart(element) {
  let mainEl = element.closest(".single-item");
  let price = mainEl.querySelector(".price").innerText;
  let name = mainEl.querySelector("h3").innerText;
  let quantity = mainEl.querySelector("input").value;

  let cartItems = document.querySelector(".cart-items");

  price = price.substring(1);
  price = parseInt(price);

  let total = price * parseInt(quantity);

  allTotal += total;

  if (parseInt(quantity) > 0) {
    cartItems.innerHTML += `<div class='cart-single-item'>
    <h3>${name}</h3>
    <p>${quantity} komada  </p> <h3> <span> ${total} $ </span> </h3>
    <button onclick='removeFromCart(this)' class='remove-item'>Ukloni</button> </div> `;

    document.querySelector(".total").innerText = `Ukupna cena: ${allTotal}$`;

    element.innerText = "Dodato";
    element.setAttribute("disabled", "true");
  } else {
    alert("Odaberi kolicinu");
  }
}

// BRISANJE IZ KORPE

function removeFromCart(element) {
  let mainEl = element.closest(".cart-single-item");
  let price = mainEl.querySelector("span").innerText;
  price = parseInt(price);

  allTotal -= price;

  document.querySelector(".total").innerText = `Ukupna cena: ${allTotal}$`;

  mainEl.remove();
}
