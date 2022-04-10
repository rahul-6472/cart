let cartsData = JSON.parse(localStorage.getItem("cartsData"));


let cartCount = cartsData.length;
document.querySelector("#cartCount").innerText = "cart count: " + cartCount;

let cartTotal = cartsData.reduce(function (sum, ele) {
  return sum + Number(ele.price);
}, 0);

document.querySelector("#cartTotal").innerText = "Cart Total: " + "Rs" + " " +  cartTotal

document.querySelector("#applyPromo").addEventListener("click", () => {
  let enteredPromo = document.querySelector("#promo").value;

  if (enteredPromo == "masai30") {
    let discountedTotal = cartTotal - 0.3 * cartTotal;
    document.querySelector("#discount").innerText =
      "Discounted price: " + "Rs"+ " " + discountedTotal.toFixed(2);
  }
});
cartsData.forEach((product, cartIndex) => {
  let card = document.createElement("div");

  let image = document.createElement("img");
  image.src = product.image_url;

  let name = document.createElement("p");
  name.textContent = product.name;

  let price = document.createElement("p");
  price.textContent = product.price;

  let removeFromCart = document.createElement("button");
  removeFromCart.textContent = "Remove From Cart";

    removeFromCart.addEventListener("click", () => {
       cartsData.splice(cartIndex, 1)
       localStorage.setItem("cartsData", JSON.stringify(cartsData))
       window.location.reload()
    })

  card.append(image, name, price, removeFromCart);
  document.querySelector("#container").append(card);
});