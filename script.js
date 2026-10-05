const cartDropdown = document.querySelector(".cart-dropdown");
const cartBtn = document.querySelector(".cart-btn");

const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const quantitySpan = document.querySelector(".quantity");

const buyBtn = document.querySelector(".btn-buy");
const cartContent = document.querySelector(".cart-content");
const cartQuantitySpan = document.querySelector(".cart-quantity");
const cartTotalSpan = document.querySelector(".cart-total");

const deleteBtn = document.querySelector(".cart-delete-btn");
const cartCounter = document.querySelector(".cart-counter");

const imgPrevious = document.querySelector("#img-previous");
const imgNext = document.querySelector("#img-next");
const mainImg = document.querySelector("#mainImg");

const lightbox = document.querySelector(".lightbox");
const overlay = document.querySelector(".overlay");
const lightboxImg = document.querySelector("#lightboxImg");
const closeImg = document.querySelector(".btn-img");

const lightboxPrevious = document.querySelector("#lightbox-previous");
const lightboxNext = document.querySelector("#lightbox-next");

const thumbnailContainer = document.querySelectorAll(".image-thumbnail");

const menuBtn = document.querySelector(".btn-menu");
const menuList = document.querySelector(".menu-list");

const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

let currentImageIndex = 1;

const price = 125;
let total = 0;
let currentQuantity = 0;

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  menuList.classList.toggle("active");
  const expandido = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", !expandido);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1000) {
    menuBtn.classList.remove("active");
    overlay.classList.remove("active");
    menuList.classList.remove("active");
  }
});

cartBtn.addEventListener("click", () => {
  console.log("boton clickeado");
  cartDropdown.classList.toggle("active");
});

minusBtn.addEventListener("click", () => {
  if (currentQuantity > 0) {
    currentQuantity--;
    quantitySpan.textContent = currentQuantity;
  }
});

plusBtn.addEventListener("click", () => {
  currentQuantity++;
  quantitySpan.textContent = currentQuantity;
});

buyBtn.addEventListener("click", () => {
  if (currentQuantity > 0) {
    cartContent.classList.add("active");
    cartQuantitySpan.textContent = currentQuantity;
    total = currentQuantity * price;
    cartTotalSpan.textContent = "$" + total + ".00";
    cartCounter.textContent = currentQuantity;
    cartCounter.classList.add("active");
  }
});

deleteBtn.addEventListener("click", () => {
  cartContent.classList.remove("active");
  cartCounter.classList.remove("active");
  cartCounter.textContent = "0";
  total = 0;
  currentQuantity = 0;

  quantitySpan.textContent = currentQuantity;
});

imgPrevious.addEventListener("click", () => {
  previousImg();
});

imgNext.addEventListener("click", () => {
  nextImg();
});

lightboxPrevious.addEventListener("click", () => {
  previousImg();
});

lightboxNext.addEventListener("click", () => {
  nextImg();
});

mainImg.addEventListener("click", () => {
  lightbox.classList.add("active");
  overlay.classList.add("active");
});

closeImg.addEventListener("click", () => {
  lightbox.classList.remove("active");
  overlay.classList.remove("active");
});

function imgChange(index) {
  const selectedImage = images[index - 1];
  mainImg.src = selectedImage;
  lightboxImg.src = selectedImage;
}

function nextImg() {
  currentImageIndex = (currentImageIndex % 4) + 1;
  imgChange(currentImageIndex);
}

function previousImg() {
  currentImageIndex = ((currentImageIndex - 2 + 4) % 4) + 1;
  imgChange(currentImageIndex);
}

thumbnailContainer.forEach((container) => {
  container.addEventListener("click", (event) => {
    const thumbnail = event.target.closest(".thumbnail-item");
    if (!thumbnail) return;
    currentImageIndex = Number(thumbnail.dataset.item);
    imgChange(currentImageIndex);
  });
});
