const shoe1 = document.querySelector(".shoe1");
const container = document.querySelector(".container");
const row = document.querySelector(".column");
const f = document.querySelector(".f");
const s = document.querySelector(".s");
const t = document.querySelector(".t");
const fourth = document.querySelector(".fourth");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const qnt = document.querySelector(".qnt");
const addToCart = document.querySelector(".addToCart");
const cart = document.querySelector(".cart");
const side = document.querySelector(".side");

//create image
const img = document.createElement("img");
img.id = "newImage";
img.src = "images/image-product-2.jpg";
shoe1.appendChild(img);
//changing images on click
f.addEventListener("click", () => {
  img.src = "images/image-product-1.jpg";
  console.log("done");
});
s.addEventListener("click", () => {
  img.src = "images/image-product-2.jpg";
  console.log("done");
});
t.addEventListener("click", () => {
  img.src = "images/image-product-3.jpg";
  console.log("done");
});
fourth.addEventListener("click", () => {
  img.src = "images/image-product-4.jpg";
  console.log("done");
});

//event listener on shoe1
shoe1.addEventListener("click", () => {
  shoe1.style.opacity = "0.5";
  f.style.opacity = "0.5";
  s.style.opacity = "0.5";
  t.style.opacity = "0.5";
  fourth.style.opacity = "0.5";
  side.style.opacity = "0.5";

  const largeShoe = document.createElement("div");
  const largeShoeImg = document.createElement("img");
  largeShoeImg.className = "largeShoeImg";

  // close large image on clicking close button
  const imgClose = document.createElement("img");
  imgClose.classList.add("imgClose");
  imgClose.src = "images/icon-close.svg";
  largeShoe.appendChild(imgClose);

  largeShoe.classList.add("largeShoe");
  row.appendChild(largeShoe);
  // //adding backward button
  // const backward = document.createElement("img");
  // backward.className = "backward";
  // backward.src = "images/icon-previous.svg";
  // largeShoe.appendChild(backward);
  // backward.addEventListener("click", () => {
  //   console.log("done");
  // });
  largeShoeImg.setAttribute("src", "images/image-product-1.jpg");
  largeShoe.appendChild(largeShoeImg);

  //adding forward button

  // const forward = document.createElement("img");
  // forward.className = "forward";
  // forward.src = "images/icon-next.svg";
  // largeShoe.appendChild(forward);
  // forward.addEventListener("click", () => {
  //   console.log("done");
  // });

  // putting the extra four images in the large format
  const list = document.createElement("div");
  list.className = "list";
  const first = document.createElement("img");
  const sec = document.createElement("img");
  const third = document.createElement("img");
  const last = document.createElement("img");
  largeShoe.appendChild(list);
  list.appendChild(first);
  list.appendChild(sec);
  list.appendChild(third);
  list.appendChild(last);
  first.src = "images/image-product-1.jpg";
  sec.src = "images/image-product-2.jpg";
  third.src = "images/image-product-3.jpg";
  last.src = "images/image-product-4.jpg";

  //adding event listener on the list
  first.addEventListener("click", () => {
    largeShoeImg.src = "images/image-product-1.jpg";
    console.log("done");
  });
  sec.addEventListener("click", () => {
    largeShoeImg.src = "images/image-product-2.jpg";
    console.log("done");
  });
  third.addEventListener("click", () => {
    largeShoeImg.src = "images/image-product-3.jpg";
    console.log("done");
  });
  last.addEventListener("click", () => {
    largeShoeImg.src = "images/image-product-4.jpg";
    console.log("done");
  });

  //removing other event listeners

  // operating the close button
  imgClose.addEventListener("click", () => {
    shoe1.style.opacity = "1";
    f.style.opacity = "1";
    s.style.opacity = "1";
    t.style.opacity = "1";
    fourth.style.opacity = "1";
    side.style.opacity = "1";
    largeShoe.style.display = "none";
  });
});

// quantity button
let res = 0;

add.addEventListener("click", () => {
  res++;
  qnt.innerHTML = res;
});
sub.addEventListener("click", () => {
  res--;
  qnt.innerHTML = res;
  if (res <= 1) res = 1;
});
//creating the notification
const notify = document.createElement("div");
notify.className = "notify";
notify.style.display = "none";
container.appendChild(notify);

// cart array for add to cart button
var cartArr;
addToCart.addEventListener("click", () => {
  cartArr = res;
  console.log(cartArr);
  if (cartArr > 0) {
    notify.style.display = "block";
    notify.textContent = cartArr;
    console.log("done");
  } else {
    notify.style.display = "none";
    console.log("none");
  }
});

//adding mouseover on the cart icon through its div
const box = document.createElement("div");
box.classList.add("box");

// creating a span for the box
const boxSpan = document.createElement("span");
boxSpan.innerHTML = "Card <hr> ";
box.appendChild(boxSpan);

//creating the text content for the box as a paragraph
const boxPara = document.createElement("p");
boxPara.innerHTML = "Your cart is empty ";
box.appendChild(boxPara);

//creating checkout button for the box
const checkout = document.createElement("button");
checkout.classList.add("checkoutBtn");
checkout.textContent = "CheckOut";
box.appendChild(checkout);

//creating a delete button to remove the added items in the cart
const del = document.createElement("img");
del.setAttribute("src", "images/icon-delete.svg");
del.className = "delete";
box.appendChild(del);

del.addEventListener("click", () => {
  boxPara.innerHTML = "";
  console.log("deleting");
});

// setting the display and position of box
box.style.display = "none";
box.style.position = "absolute";
cart.appendChild(box);

cart.addEventListener("click", () => {
  if (box.style.display === "none") {
    box.style.display = "block"; // Change to the desired display value, e.g., "block" or "absolute"
    console.log("Display set to block");
    if (cartArr === 0) {
      boxPara.innerHTML = "Your cart is empty ";
      console.log("empty cart");
    } else if (cartArr > 0) {
      boxPara.innerHTML =
        "Fall Limited Addition Sneakers <br> $.215.00 x " +
        cartArr +
        "<b> $" +
        cartArr * 215;
      console.log("not empty");
    }
  } else {
    box.style.display = "none";
    notify.innerHTML = cartArr;
    console.log("Display set to none");
  }
});

// Close the box if user clicks outside of it
document.addEventListener("click", (event) => {
  if (
    box.style.display === "block" &&
    !cart.contains(event.target) &&
    !box.contains(event.target)
  ) {
    box.style.display = "none";
    console.log("Display set to none");
  }
});
