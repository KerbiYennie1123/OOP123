
// Insert products dito kelangan customized ung shoe and dapat akma sa brand name natin...

const products = [

 // banner 

  {
  type: "banner",
  image: "../img1/new.png",
  alt: "Ad Banner"
},




 {
    name: "Curry Fox 1",
    image: "../img/curryfox1.png",
    id:1,
    price: 8395,
    description: "Sleek black design with lightweight support, responsive cushioning, and superior traction.",
    size: "7, 8, 9",
    color: "Black / Steel - 001",
    category: "Under Armour",
    rating: 4.5,
    discount: 20, 
    newProduct: true
  },

  {
  name: "Luka 4",
  image: "../img/luka4f.png",
  price: 7595,
  description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
  size: "6, 7, 8, 9",
  color: " Black/Summit White/Anthracite/Bright Crimson",
  newProduct: true 
},


   {
    name: "Curry 12 'Saturn'",
    image: "../img/curry12s.png",
    price: 9695,
    description: "Sleek black design with lightweight support, responsive cushioning, and superior traction.",
    size: "7, 8, 9",
    color: "Black / Steel - 001",
    category: "Under Armour",
    rating: 4.4,
    newProduct: true
  },

{
  name: "WILLMELIA Flora",
  image: "../img/wm-fp.png",
  price: 7595,
  description: "New release! Crafted with durable materials and a vibrant floral design, offering excellent grip and comfort for all-day wear.",
  size: "6, 7, 8, 9",
  color: "Floral | Blue",
  newProduct: true,
  category: "willmelia"
},




 {
  type: "banner",
  image: "../img/uaban.png",
  alt: "Ad Banner",
  id: "sc30"
},

{
    name: "Curry 1 Charge",
    image: "../img1/curryone.png",
    price: 8395,
    description: "Sleek black design with lightweight support, responsive cushioning, and superior traction.",
    size: "7, 8, 9",
    color: "Black / Steel - 001",
    category: "Under Armour",
    rating: 4.5,
    discount: 20, 
    newProduct: true
  },

  {
    name: "Curry 2 NM",
    image: "../img1/curry2.png",
    price: 9195,
    description: "Sleek black design with lightweight support, responsive cushioning, and superior traction.",
    size: "7, 8, 9",
    color: "Black / white / red - 00143",
    category: "Under Armour",
    rating: 5,
    discount: 30, 
    newProduct: true
  },

  {
    name: "Curry 3",
    image: "../img1/curry3.png",
    price: 8395,
    description: "Sleek black design with lightweight support, responsive cushioning, and superior traction.",
    size: "7, 8, 9",
    color: "Black / Steel - 001",
    category: "Under Armour",
    rating: 4.5,
    discount: 20, 
    newProduct: true
  },

  {
    name: "Curry 8",
    image: "../img1/curry8.png",
    price: 8395,
    description: "Sleek black design with lightweight support, responsive cushioning, and superior traction.",
    size: "7, 8, 9",
    color: "Black / Steel - 001",
    category: "Under Armour",
    rating: 4.5,
    discount: 20, 
    newProduct: true
  },

  {
    name: "Curry Fox 1",
    image: "../img/curryfox1.png",
    price: 8395,
    description: "Sleek black design with lightweight support, responsive cushioning, and superior traction.",
    size: "7, 8, 9",
    color: "Black / Steel - 001",
    category: "Under Armour",
    rating: 4.5,
    discount: 20, 
    newProduct: true
  },

  {
    name: "Curry 12 'Pisces'",
    image: "../img/curry12.png",
    price: 4200,
    description: "Bold blue and gold design with responsive cushioning, lightweight support, and superior traction.",
    size: "6, 7, 8, 9",
    color: "Stream / Metallic Gold - 224",
    category: "Under Armour",
    discount: 45,
    rating: 4.7,  
    newProduct: false 
  },

  {
    name: "Curry 3Z Suede",
    image: "../img/curry3z.png",
    price: 5195,
    description: "Premium suede design with responsive cushioning, lightweight support, and durable traction.",
    size: "6, 7, 8, 9",
    color: "Halo Gray / Black - 100",
    category: "Under Armour",
    discount: 35,
    rating: 4.2,   
    newProduct: false 
  },

  {
    name: "Curry 11",
    image: "../img/curry11.png",
    price: 9195,
    description: "",
    size: "6, 7, 8, 9",
    color: "Black / Halo Gray - 001",
    category: "Under Armour",
    discount: 15,
    rating: 5,    
    newProduct: false 
  },

  {
    name: "Curry 12 'Saturn'",
    image: "../img/curry12s.png",
    price: 9695,
    description: "Sleek black design with lightweight support, responsive cushioning, and superior traction.",
    size: "7, 8, 9",
    color: "Black / Steel - 001",
    category: "Under Armour",
    rating: 4.4,
    newProduct: true
  },

  {
    name: "Curry Splash 24",
    image: "../img/currys24.png",
    price: 56720,
    description: "Bold blue and gold design with responsive cushioning, lightweight support, and superior traction.",
    size: "6, 7, 8, 9",
    color: "Stream / Metallic Gold - 224",
    category: "Under Armour",
    rating: 4.9,   
    newProduct: false 
  },

  {
    name: "Curry 3Z7",
    image: "../img/curry327.png",
    price: 4254,
    description: "Premium suede design with responsive cushioning, lightweight support, and durable traction.",
    size: "6, 7, 8, 9",
    color: "Halo Gray / Black - 100",
    category: "Under Armour",
    discount: 35, 
    rating: 3.9,  
    newProduct: false 
  },

  {
    name: "Curry 5",
    image: "../img/curry5.png",
    price: 3325,
    description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
    size: "6, 7, 8, 9",
    color: "Black / Halo Gray - 001",
    discount: 25,
    category: "Under Armour",
    rating: 4.5,
    newProduct: false 
  },

  // banner 

  {
  type: "banner",
  image: "../img/nikeban.png",
  alt: "Ad Banner",
  id: "nike"
},




 {
  name: "LeBron XXII",
  image: "../img/lebronxxii.png",
  price: 7295,
  description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
  size: "6, 7, 8, 9",
  color: "Black/Dark Grey/Field Purple/Laser Fuchsia",
  discount: 29,  
  newProduct: false,
  category: "nike" 
},
  {
  name: "Luka 4",
  image: "../img/luka4f.png",
  price: 7595,
  description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
  size: "6, 7, 8, 9",
  color: " Black/Summit White/Anthracite/Bright Crimson",
  newProduct: true,
  category: "nike" 
},
  {
  name: "Freak 5 EP",
  image: "../img/freak5.png",
  price: 7095,
  description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
  size: "6, 7, 8, 9",
  color: "Blue/Metallic Silver/Barely Volt/Black",
  discount: 35,  
  newProduct: false,
  category: "nike" 
},
  {
  name: "KD17 EP",
  image: "../img/kd17.png",
  price: 8395,
  description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
  size: "6, 7, 8, 9",
  color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
  discount: 29,  
  newProduct: false,
  category: "nike"
},

{
  name: "KD17 EP V2",
  image: "../img1/nike5.png",
  price: 9095,
  description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
  size: "6, 7, 8, 9",
  color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
  newProduct: false,
  category: "nike"
},

{
  name: "Tatum 3 PF",
  image: "../img1/nike6.png",
  price: 7095,
  description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
  size: "6, 7, 8, 9",
  color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
  newProduct: false,
  category: "nike"
},


{
  name: "LeBron XXII EP",
  image: "../img1/nike8.png",
  price: 9895,
  description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
  size: "6, 7, 8, 9",
  color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
  newProduct: false,
  category: "nike"
},


{
  name: "Zion 4 'Sharonda'",
  image: "../img1/nike7.png",
  price: 5295,
  description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
  size: "6, 7, 8, 9",
  color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
  newProduct: false,
  category: "nike"
},



 // banner 

  {
  type: "banner",
  image: "../img/anta-ban.png",
  alt: "Ad Banner",
  id: "anta"
},

{
    name: "ANTA KAI 2",
    image: "../img1/anta6.png",
    price: 8395,
    description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
    size: "6, 7, 8, 9",
    color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
    discount: 29,  
    newProduct: true,
    category: "anta"
  },
  {
    name: "ANTA KT9",
    image: "../img1/anta11.png",
    price: 9895,
    description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
    size: "6, 7, 8, 9",
    color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
    discount: 39,  
    newProduct: false,
    category: "anta"
  },
  {
    name: "Game Shockwave",
    image: "../img1/anta12.png",
    price: 8967,
    description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
    size: "6, 7, 8, 9",
    color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
    discount: 28,  
    newProduct: false,
    category: "anta"
  },
  {
    name: "Anta KAI 1 V2",
    image: "../img1/anta1.png",
    price: 8967,
    description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
    size: "6, 7, 8, 9",
    color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
    discount: 28,  
    newProduct: false,
    category: "anta"
  },
  {
    name: "Anta KAI 1 V2.1",
    image: "../img1/anta4.png",
    price: 8967,
    description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
    size: "6, 7, 8, 9",
    color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
    discount: 28,  
    newProduct: false,
    category: "anta"
  },
  {
    name: "Anta Muske Pro",
    image: "../img1/anta7.png",
    price: 8967,
    description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
    size: "6, 7, 8, 9",
    color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
    discount: 28,  
    newProduct: false,
    category: "anta"
  },
  {
    name: "ANTA KAI 1 V3",
    image: "../img1/anta8.png",
    price: 8967,
    description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
    size: "6, 7, 8, 9",
    color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
    discount: 28,  
    newProduct: false,
    category: "anta"
  },
  {
    name: "ANTA KT Splash 7",
    image: "../img1/anta10.png",
    price: 8967,
    description: "Sleek design with FloTro technology, responsive cushioning, and superior traction for elite performance.",
    size: "6, 7, 8, 9",
    color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
    discount: 28,  
    newProduct: false,
    category: "anta"
  },







 // banner 

  {
  type: "banner",
  image: "../img/ban.png",
  alt: "Ad Banner"
},
 {
  name: " WILLMELIA V Pro ",
  image: "../img/wm-pb.png",
  price: 7295,
  description: "New release! The WILLMELIA Floral Bloom combines vibrant style with top-tier performance for those who stand out.",
  size: "6, 7, 8, 9",
  color: "Purple / Blue",
  discount: 29,  
  newProduct: false,
  category: "willmelia"

},
  {
  name: "WILLMELIA Flora",
  image: "../img/wm-fp.png",
  price: 7595,
  description: "New release! Crafted with durable materials and a vibrant floral design, offering excellent grip and comfort for all-day wear.",
  size: "6, 7, 8, 9",
  color: " Floral | Blue",
  newProduct: true,
  category: "willmelia"
},
  {
  name: "WILLMELIA 'DH'",
  image: "../img/wm-bp.png",
  price: 7095,
  description: "Back in stock! Designed with premium materials for maximum durability, featuring advanced traction and a secure fit for all conditions.",
  size: "6, 7, 8, 9",
  color: "Navy Blue/ /Barely Volt/Black",
  discount: 35,  
  newProduct: false,
  category: "willmelia" 
},
  {
  name: "WILLMELIA X",
  image: "../img/wm-ob.png",
  price: 8395,
  description: "Restocked! Built for speed and stability, with breathable mesh and a cushioned sole for optimal comfort and performance.",
  size: "6, 7, 8, 9",
  color: "Deep Royal Blue/Black/Laser Fuchsia/Opti Yellow",
  discount: 29,  
  newProduct: false,
  category: "willmelia" 
},

 {
  name: "WILLMELIA Baige",
  image: "../img1/baige-w.png",
  price: 7590,
  description: "Designed for a better performance not just to your game but also for your ootd.",
  size: "6, 7, 8, 9",
  color: "Sand like Baige",
  discount: 19,  
  newProduct: false,
  category: "willmelia" 
},

 {
  name: "WILLMELIA Fairy",
  image: "../img1/fairyodd-w.png",
  price: 7890,
  description: "New Stock! Built for a non sliping game, to ensure your victory with the help of our Oddly Fairy Parents! ",
  size: "6, 7, 8, 9",
  color: "White/Magenta/Purple/Blue/Light Colors",
  discount: 29,  
  newProduct: false,
  category: "willmelia"
},

 {
  name: "WILLMELIA Nrto",
  image: "../img1/naruto-w.png",
  price: 9890,
  description: " New Stock! Enter the world of ninjas using our Newly arrived Willmelia Naruto shoes. Build for a better swift run for the Game!",
  size: "6, 7, 8, 9",
  color: "Orange/Black",
  discount: 38,  
  newProduct: false,
  category: "willmelia" 
},

 {
  name: "WILLMELIA Avtr",
  image: "../img1/avatar-w.png",
  price: 8890,
  description: "New Stock! Behold the world of avatars, where you can experience a swift move and jumps using our New Willmelia Avatar Shoes.",
  size: "6, 7, 8, 9",
  color: "Blue/Black/Lime Green",
  discount: 30,  
  newProduct: false,
  category: "willmelia" 
},
];



const cart = [];
const selectedSizes = {};


// https://www.w3schools.com/jsref/jsref_join.asp

function renderProducts(category = "all") {
  const section = document.getElementById("productSection");
  section.innerHTML = ''; 

products.forEach((product, index) => {
 if (product.type === 'banner') {
  const bannerElement = document.createElement("div");
  bannerElement.className = "dynamic-banner";

    if (product.id) bannerElement.id = product.id;


  bannerElement.innerHTML = `
    <img src="${product.image}" alt="${product.alt}">
  `;
  section.appendChild(bannerElement);
  return;
}





    const productElement = document.createElement("div");
    productElement.className = "product";

    let discountedPrice = product.price;
    let originalPrice = product.price;

    if (product.discount > 0) {
      discountedPrice = product.price - (product.price * product.discount / 100);
    }

    let cartMnuClass = '';
    let discountPriceColor = '';
    if (product.discount > 40) {
      cartMnuClass = 'discount-badge-red';
      discountPriceColor = 'red';
    } else if (product.discount > 0) {
      cartMnuClass = 'discount-badge-orange';
      discountPriceColor = 'orange';
    }

    productElement.innerHTML = `
      <div class="product-badge">
        <img src="${product.image}" alt="${product.name}">
        ${product.discount > 0 ? `<span class="discount-badge ${cartMnuClass}">Up to ${product.discount}% off</span>` : ''}
        ${product.newProduct ? `<span class="new-badge">New</span>` : ''}
      </div>
      <h4>${product.name}</h4>
      <p>
        ${product.discount > 0 ? 
`<span class="original-price" style="color: #888; text-decoration: line-through;">₱${Number.isInteger(originalPrice) ? originalPrice : originalPrice.toFixed(2)}</span>
   <span class="discounted-price" style="color: ${discountPriceColor};">₱${Number.isInteger(discountedPrice) ? discountedPrice : discountedPrice.toFixed(2)}</span>` : 
  `<strong>₱${Number.isInteger(discountedPrice) ? discountedPrice : discountedPrice.toFixed(2)}</strong>`
}
      </p>
      ${starS(product.rating || 4.5)}
      <div class="product-detailss">
        <p class="des"><strong>Description:</strong> ${product.description}</p>
        <p><strong>Color:</strong> ${product.color}</p>
        <div class="size-select" id="size-${index}">
          <strong>Size:</strong><br>
          ${product.size.split(',').map(size => `
            <button onclick="selectSize(${index}, '${size}')" class="size-btn">${size}</button>
          `).join('')}
        </div>
        <br>  <strong> QTY </strong> 
        <div class="qty-control">
          <button onclick="lamanQty(${index}, -1)">-</button>
          <span id="qty-${index}">1</span>
          <button onclick="lamanQty(${index}, 1)">+</button>
        </div>
        <button id="addToCartBtn-${index}" class="add-to-cart-btn" onclick="addToCart(${index})" disabled>Add to Cart</button>
      </div>
    `;

    section.appendChild(productElement);
  });
}





// size part heree to be displayed and disable ang button if hindi nakaka pili pa

function selectSize(index, size) {
  selectedSizes[index] = size;

  const buttons = document.querySelectorAll(`#size-${index} .size-btn`);
  buttons.forEach(btn => {
    btn.classList.remove('selected');
    if (btn.textContent === size) btn.classList.add('selected');
  });

  document.getElementById(`addToCartBtn-${index}`).disabled = false;
}


// star ratingss here


function starS(rating) {
  let fullStars = Math.floor(rating);
  let halfStar = rating % 1 >= 0.5;
  let emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  let starsHTML = '';

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star" class="star-rate"></i>';
  }

  if (halfStar) {
    starsHTML += '<i class="fas fa-star-half-alt" style="color: gray;"></i>';
  }

  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star" style="color: gray;"></i>';
  }

  return `<div class="star-rating">${starsHTML} <span class="rating-number">(${rating.toFixed(1)})</span></div>`;
}

function filterAndSearchProducts() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryDropdown").value;

  const filteredProducts = products.filter((product) => {
    if (product.type === "banner") return true;

    const nameMatch = product.name.toLowerCase().includes(searchInput);
    const categoryMatch = category === "All" || product.name.toLowerCase().includes(category.toLowerCase());

    return nameMatch && categoryMatch;
  });

  renderFilteredProducts(filteredProducts);
}

function renderFilteredProducts(filtered) {
  const section = document.getElementById("productSection");
  section.innerHTML = '';

  filtered.forEach((product, index) => {
    if (product.type === "banner") {
      const banner = document.createElement("div");
      banner.className = "dynamic-banner";
      banner.innerHTML = `<img src="${product.image}" alt="${product.alt}">`;
      section.appendChild(banner);
      return;
    }

    const productElement = document.createElement("div");
    productElement.className = "product";

    let discountedPrice = product.price;
    let originalPrice = product.price;

    if (product.discount > 0) {
      discountedPrice = product.price - (product.price * product.discount / 100);
    }

    let cartMnuClass = '';
    let discountPriceColor = '';
    if (product.discount > 40) {
      cartMnuClass = 'discount-badge-red';
      discountPriceColor = 'red';
    } else if (product.discount > 0) {
      cartMnuClass = 'discount-badge-orange';
      discountPriceColor = 'orange';
    }

    productElement.innerHTML = `
      <div class="product-badge">
        <img src="${product.image}" alt="${product.name}">
        ${product.discount > 0 ? `<span class="discount-badge ${cartMnuClass}">Up to ${product.discount}% off</span>` : ''}
        ${product.newProduct ? `<span class="new-badge">New</span>` : ''}
      </div>
      <h4>${product.name}</h4>
      <p>
        ${product.discount > 0 ?
        `<span class="original-price" style="color: #888; text-decoration: line-through;">₱${originalPrice.toFixed(2)}</span>
         <span class="discounted-price" style="color: ${discountPriceColor};">₱${discountedPrice.toFixed(2)}</span>` :
        `<strong>₱${discountedPrice.toFixed(2)}</strong>`
      }
      </p>
      ${starS(product.rating || 4.5)}
      <div class="product-detailss">
        <p class="des"><strong>Description:</strong> ${product.description}</p>
        <p><strong>Color:</strong> ${product.color}</p>
        <div class="size-select" id="size-${index}">
          <strong>Size:</strong><br>
          ${product.size.split(',').map(size => `
            <button onclick="selectSize(${index}, '${size}')" class="size-btn">${size}</button>
          `).join('')}
        </div>
        <br>  <strong> QTY </strong>
        <div class="qty-control">
          <button onclick="lamanQty(${index}, -1)">-</button>
          <span id="qty-${index}">1</span>
          <button onclick="lamanQty(${index}, 1)">+</button>
        </div>
        <button id="addToCartBtn-${index}" class="add-to-cart-btn" onclick="addToCart(${index})" disabled>Add to Cart</button>
      </div>
    `;
    section.appendChild(productElement);
  });
}





function lamanQty(index, change) {
  const qtySpan = document.getElementById(`qty-${index}`);
  let currentQty = parseInt(qtySpan.innerText);
  currentQty = Math.max(1, currentQty + change);
  qtySpan.innerText = currentQty;
}

function addToCart(index) {
  const qty = parseInt(document.getElementById(`qty-${index}`).innerText);
  const size = selectedSizes[index];

  if (!size) return;

  let discountedPrice = products[index].price;
  if (products[index].discount > 0) {
    discountedPrice = products[index].price - (products[index].price * products[index].discount / 100);
  }

  const existing = cart.find(item => item.name === products[index].name && item.size === size);
  alert(`Added ${qty}x ${products[index].name} to cart!`);
  
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ 
      ...products[index], 
      qty, 
      size,
      discountedPrice
    });
  }

  cartMenu();
}


function bukasCart() {
  const cartMnu = document.getElementById("cartMnu");
  cartMnu.style.display = cartMnu.style.display === "block" ? "none" : "block";
}

function cartMenu() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  const cartCountBadge = document.getElementById("cartCountBadge");
  const placeOrderBtn = document.querySelector('.place-order-btn');

  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;  

  if (cart.length === 0) {
    cartItems.innerHTML = `<p style="text-align:center; padding: 1rem;">You have no items in your shopping cart.</p>`;
    totalPrice.innerText = "₱0.00";
    cartCountBadge.innerText = "0";
  
    if (placeOrderBtn) placeOrderBtn.style.display = "none";
    return;
  }

  if (placeOrderBtn) placeOrderBtn.style.display = "block";

  count = cart.length;

  cart.forEach((item, index) => {
    let priceToDisplay = item.discountedPrice || item.price;
let originalPrice = item.discount > 0 
  ? `<span class="original-price" style="color: #888; text-decoration: line-through;">₱${Number.isInteger(item.price) ? item.price : item.price.toFixed(2)}</span>` 
  : '';

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" width="50" height="40" style="vertical-align: middle;">
        <div class="cart-info">
          <strong>${item.name}</strong><br>
          ${originalPrice} 
          <span class="discounted-price" style="color: ${item.discount > 0 ? 'orange' : 'black'};">₱${Number.isInteger(priceToDisplay) ? priceToDisplay : priceToDisplay.toFixed(2)}</span>
<br>
          SIZE: ${item.size}
          <div class="qty-control"> 
            <span class="qty">QTY </span>
            <button onclick="changeCartQty(${index}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeCartQty(${index}, 1)">+</button>
          </div>
        </div>
        <button onclick="removeItem(${index})" class="remove-btn">remove</button>
      </div>
    `;
  });

  document.getElementById("cartItemCount").innerText = `${count}`;
  lahatTotal();
}

function lahatTotal() {
  const totalPrice = document.getElementById("totalPrice");
  const placeOrderBtn = document.querySelector('.place-order-btn');
  const cartCountBadge = document.getElementById("cartCountBadge");

  let total = 0;

  cart.forEach((item) => {
    let priceToUse = item.discountedPrice || item.price;
    total += priceToUse * item.qty;
  });

  totalPrice.innerText = `₱${Number.isInteger(total) ? total : total.toFixed(2)}`;
  cartCountBadge.innerText = cart.reduce((sum, item) => sum + item.qty, 0);

  if (placeOrderBtn) {
    placeOrderBtn.disabled = cart.length === 0;
  }

  const cartTotalContainer = totalPrice.closest('p');
  if (cart.length === 0) {
    cartTotalContainer.style.display = "none";
  } else {
    cartTotalContainer.style.display = "block";
  }
}




  function changeCartQty(index, change) {
    cart[index].qty = Math.max(1, cart[index].qty + change);
    cartMenu();
  }



  function removeItem(index) {
    cart.splice(index, 1);
    cartMenu();
  }



function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  openCheckout();




  if (confirmOrder) {
    let orderDetails = "Order Summary:\n\n";
    let total = 0;

    cart.forEach(item => {
      const subtotal = item.price * item.qty;
      total += subtotal;
      orderDetails += `${item.name} - SIZE ${item.size} - ₱${item.price} x ${item.qty} = ₱${subtotal}\n`;
    });

    orderDetails += `\nTotal: ₱${total}`;
    alert(orderDetails);

    cart.length = 0;
    cartMenu();
  } else {
    alert("Order not placed.");
  }
}


// search here


let cachedSuggestions = null;

function searchProducts(event) {
  const queryInput = document.getElementById('searchInput');
  const query = queryInput.value.toLowerCase();
  const category = document.getElementById('categoryFilter').value;
  const section = document.getElementById("productSection");
  const isQueryCleared = query.trim() === '';

  if (isQueryCleared) {
    cachedSuggestions = null;
  }

  section.innerHTML = '';
  let matchFound = false;

  const displayedProducts = new Set(); 

  products.forEach((product, index) => {
    const isSearching = query.trim() !== '' || category !== 'all';

    if (product.type === 'banner') {
      if (!isSearching) {
        const bannerElement = document.createElement("div");
        bannerElement.className = "dynamic-banner";
        bannerElement.innerHTML = `<img src="${product.image}" alt="${product.alt}">`;
        section.appendChild(bannerElement);
      }
      return;
    }

    const nameMatch = product.name.toLowerCase().includes(query);
    const categoryMatch = category === 'all' || (product.category && product.category.toLowerCase() === category.toLowerCase());

    if (nameMatch && categoryMatch && !displayedProducts.has(product.name)) {
      matchFound = true;
      displayedProducts.add(product.name);

      const productElement = makeProductItem(product, index);
      section.appendChild(productElement);
    }
  });

  if (!matchFound) {
    const noMatch = document.createElement("div");
    noMatch.className = "no-match";
    noMatch.innerHTML = `
      <p style="text-align:center; font-size:18px; margin: 40px 0;">
        No matching products found.<br>
        Try searching something else or reset filters.
      </p>
      <h3 style="text-align:center; margin-top: 20px;">You may also like:</h3>
    `;
    section.appendChild(noMatch);

    if (!cachedSuggestions) {
      const filtered = products.filter(p => p.type !== 'banner');
      const shuffled = filtered.sort(() => 0.5 - Math.random());
      const seen = new Set();
      cachedSuggestions = [];

      for (let i = 0; i < shuffled.length && cachedSuggestions.length < 4; i++) {
        const prodName = shuffled[i].name;
        if (!seen.has(prodName) && !displayedProducts.has(prodName)) {
          cachedSuggestions.push(shuffled[i]);
          seen.add(prodName);
          displayedProducts.add(prodName);
        }
      }
    }

    cachedSuggestions.forEach((product, i) => {
      const index = i + 1000;
      const productElement = makeProductItem(product, index);
      section.appendChild(productElement);
    });
  }

  if (matchFound) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function makeProductItem(product, index) {
  let discountedPrice = product.price;
  if (product.discount > 0) {
    discountedPrice = product.price - (product.price * product.discount / 100);
  }

  let cartMnuClass = '';
  let discountPriceColor = '';
  if (product.discount > 40) {
    cartMnuClass = 'discount-badge-red';
    discountPriceColor = 'red';
  } else if (product.discount > 0) {
    cartMnuClass = 'discount-badge-orange';
    discountPriceColor = 'orange';
  }

  const element = document.createElement("div");
  element.className = "product";
  element.innerHTML = `
    <div class="product-badge">
      <img src="${product.image}" alt="${product.name}">
      ${product.discount > 0 ? `<span class="discount-badge ${cartMnuClass}">Up to ${product.discount}% off</span>` : ''}
      ${product.newProduct ? `<span class="new-badge">New</span>` : ''}
    </div>
    <h4>${product.name}</h4>
    <p>
      ${product.discount > 0 ?
        `<span class="original-price" style="color: #888; text-decoration: line-through;">₱${product.price.toFixed(2)}</span>
         <span class="discounted-price" style="color: ${discountPriceColor};">₱${discountedPrice.toFixed(2)}</span>` :
        `<strong>₱${product.price.toFixed(2)}</strong>`}
    </p>
    ${starS(product.rating || 4.5)}
    <div class="product-detailss">
      <p class="des"><strong>Description:</strong> ${product.description}</p>
      <p><strong>Color:</strong> ${product.color}</p>
      <div class="size-select" id="size-${index}">
        <strong>Size:</strong><br>
        ${product.size.split(',').map(size => `
          <button onclick="selectSize(${index}, '${size.trim()}')" class="size-btn">${size.trim()}</button>
        `).join('')}
      </div>
      <br>  <strong> QTY </strong>
      <div class="qty-control">
        <button onclick="lamanQty(${index}, -1)">-</button>
        <span id="qty-${index}">1</span>
        <button onclick="lamanQty(${index}, 1)">+</button>
      </div>
      <button id="addToCartBtn-${index}" class="add-to-cart-btn" onclick="addToCart(${index})" disabled>Add to Cart</button>
    </div>
  `;
  return element;
}







// checkout heree




function formatPeso(amount) {
  amount = Number(amount); 
  return Number.isInteger(amount)
    ? `₱${amount}`
    : `₱${amount.toFixed(2)}`;
}




function openCheckout() {
  const checkoutItemsEl = document.getElementById("checkoutItems");
  checkoutItemsEl.innerHTML = "";

  let merchandiseSubtotal = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.qty * item.discountedPrice;
    merchandiseSubtotal += itemTotal;

    checkoutItemsEl.innerHTML += `
      <tr id="checkoutItem-${index}">
        <td>
          <div style="display: flex; align-items: center;">
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
          </div>
        </td>
        <td>${formatPeso(item.discountedPrice)}</td>
        <td>${item.qty}</td>
        <td>${formatPeso(itemTotal)}</td>
      </tr>
    `;
  });

  document.getElementById("merchandiseSubtotal").innerText = formatPeso(merchandiseSubtotal);

  const shippingOption = document.getElementById("shippingOption").value;
  const shippingMethod = shippingOption === "pickup" ? "Pick Up" : "Standard Local (3-5 days)";
  const shippingFee = shippingOption === "pickup" ? 0 : 36;

  document.getElementById("shippingMethodLabel").innerText = shippingMethod;
  document.getElementById("shippingFee").innerText = formatPeso(shippingFee);
  document.getElementById("shippingSubtotal").innerText = formatPeso(shippingFee);

  const deliveryTimeEl = document.getElementById("deliveryTime");
  if (shippingOption === "standard") {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() + 3);

    const end = new Date(today);
    end.setDate(today.getDate() + 5);

    deliveryTimeEl.innerText = `Estimated Delivery Date: ${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;
  } else {
    deliveryTimeEl.innerText = "";
  }

  const pickupDetails = document.getElementById("pickupDetails");
  if (shippingOption === "pickup") {
    const today = new Date();
    const deadline = new Date(today);
    deadline.setDate(today.getDate() + 5);

    const now = new Date();
    const expired = now > deadline;

   const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: 'numeric',
      day: 'numeric',
      year: '2-digit'
    });
  };


    if (expired) {
      pickupDetails.innerHTML = `<span style="color:red;">Pickup window expired! Please choose another method.</span>`;
      document.getElementById("shippingOption").value = "standard";
    } else {
      pickupDetails.innerHTML = `
        Pick up available at: <strong>Malolos Branch, 123 Main St</strong><br>
        Pickup Window: <strong>${formatDate(today)} - ${formatDate(deadline)} (5 days)</strong><br>
        Please pick up within this time to avoid cancellation.
      `;
    }
    pickupDetails.style.display = "block";
  } else {
    pickupDetails.innerHTML = "";
    pickupDetails.style.display = "none";
  }

  const paymentMethod = document.getElementById("paymentMethod").value;
  const gcashFee = paymentMethod === "gcash" ? 7 : 0;

  document.getElementById("codNote").style.display = paymentMethod === "cod" ? "block" : "none";
  document.getElementById("gcashNote").style.display = paymentMethod === "gcash" ? "block" : "none";

  if (paymentMethod === "cod") {
    document.getElementById("codNote").innerText = "You will pay in cash upon delivery. Prepare the exact amount.";
  } else if (paymentMethod === "gcash") {
    document.getElementById("gcashNote").innerText = "After submitting, you will be shown how to pay via GCash.";
  }

updateAmountDue(merchandiseSubtotal, shippingFee, gcashFee);

  const gcashFeeEl = document.getElementById("gcashFee");
  if (paymentMethod === "gcash") {
    gcashFeeEl.style.display = "block";
    document.getElementById("gcashFeeAmount").innerText = formatPeso(gcashFee);
  } else {
    gcashFeeEl.style.display = "none";
  }

  const fullName = document.getElementById("wm-fname").value || "Cheesy Kimbapu";
  document.getElementById("recipientName").textContent = fullName;

  document.getElementById("checkoutPopup").style.display = "block";
  document.getElementById("paymentDetails").innerHTML = ""; 
}

function updateCheckoutTotal() {
  openCheckout();
}

function submitCheckout() {
  const method = document.getElementById("paymentMethod").value;

  if (method === "cod") {
    showReceipt();
    cart.length = 0;
    cartMenu();
    document.getElementById("cartItemCount").innerText = "0";
    closeCheckout();
  } else if (method === "gcash") {
    showGCashInstructions();
    openGCashPopup();
  }
}


function showGCashInstructions() {
  const paymentDetails = document.getElementById("paymentDetails");
  const referenceNumber = `ORDER-${Date.now()}`;
  
  document.getElementById("gcashNote").style.display = "none";
  
  paymentDetails.innerHTML = `
    <div>
      <ol>
        <li>A GCash payment screen will pop up in a moment.</li>
        <li>Simply tap <strong>"Pay Now"</strong>.</li>
        <li>In the reference field, ensure the reference number is <span class="reference-number">${referenceNumber}</span>.</li>
       <li><strong>Ensure you complete the payment within 10 minutes to confirm the order.</strong>.</li>

      </ol>
    </div>
  `;
}









function openGCashPopup() {
  setTimeout(function() {
    document.getElementById("gcashPopup").style.display = "flex";

    const merchandiseSubtotal = cart.reduce((sum, item) => sum + (item.discountedPrice || item.price) * item.qty, 0);
    const shippingOption = document.getElementById("shippingOption").value;
    const shippingFee = shippingOption === "pickup" ? 0 : 36;
    const paymentMethod = document.getElementById("paymentMethod").value;
    const gcashFee = paymentMethod === "gcash" ? 7 : 0;

    updateAmountDue(merchandiseSubtotal, shippingFee, gcashFee);
  }, 2000);
}


function closeAllPopups() {
  closeGCashPopup();  
  closeCheckout();    
}

function closeGCashPopup() {
  document.getElementById("gcashPopup").style.display = "none";
  document.getElementById("gcashPhone").value = "";
  document.getElementById("authCode1").value = "";
  document.getElementById("authCode2").value = "";
  document.getElementById("authCode3").value = "";
  document.getElementById("authCode4").value = "";
  document.getElementById("authCode5").value = "";
  document.getElementById("authCode6").value = "";
  document.querySelector(".login-section").style.display = "block";
  document.getElementById("verificationSection").style.display = "none";
  document.getElementById("mpinSection").style.display = "none";
  document.getElementById("thankyouSection").style.display = "none";
  document.getElementById("verifyNumber").innerText = "";
  document.getElementById("gcashFee").style.display = "none";
  document.getElementById("gcashNote").style.display = "none";

}



 const mpinDots = document.querySelectorAll('.mpin-dot');

  mpinDots.forEach((input, index) => {
    input.addEventListener('input', () => {
      input.classList.toggle('filled', input.value !== "");
      if (input.value && index < mpinDots.length - 1) {
        mpinDots[index + 1].focus();
      }
    });

    input.addEventListener('keydown', e => {
      if (e.key === 'Backspace' && !input.value && index > 0) {
        mpinDots[index - 1].focus();
      }
    });
  });

function closeCheckout() {
  const checkoutPopup = document.getElementById("checkoutPopup");
  if (checkoutPopup) {
    checkoutPopup.style.display = "none";
  }
}


function resetForNewOrder() {
  cart.length = 0;
  cartMenu();
  document.getElementById("cartItemCount").innerText = '0';
  lahatTotal();
  document.getElementById("checkoutTotal").innerText = "₱0.00";
  document.getElementById("amountDue").innerText = "₱0.00";
}


function updateAmountDue(merchandiseSubtotal, shippingFee, gcashFee) {
  const checkoutTotal = merchandiseSubtotal + shippingFee + gcashFee;
  const formattedTotal = formatPeso(checkoutTotal);
  document.getElementById("amountDue").innerText = formattedTotal;
  document.getElementById("checkoutTotal").innerText = formattedTotal;
}


function formatPeso(amount) {
  return `₱${Number(amount).toFixed(2)}`;
}

function showVerification() {
  const phoneNumber = document.getElementById("gcashPhone").value;
  if (!phoneNumber || phoneNumber.length !== 10) {
    alert("Please enter a valid GCash mobile number.");
    return;
  }
  document.querySelector(".login-section").style.display = "none";
  document.getElementById("verificationSection").style.display = "block";
  document.getElementById("verifyNumber").innerText = "+63" + phoneNumber;
}

function resendCode() {
  alert("Resend code coming soon!");
}

function goToStep2() {
  const authCode = Array.from({ length: 6 }, (_, i) => document.getElementById(`authCode${i + 1}`).value).join('');
  if (authCode !== "654321") {
    alert("Invalid authentication code. Please enter 654321.");
    return;
  }
  document.getElementById("verificationSection").style.display = "none";
  document.getElementById("mpinSection").style.display = "block";
}

function moveFocus(currentInput, nextInputId) {
  if (currentInput.value.length == currentInput.maxLength) {
    const nextInput = document.getElementById(nextInputId);
    if (nextInput) nextInput.focus();
  }
}

function processGCashPayment() {
  const mpinInputs = document.querySelectorAll('.mpin-dot');
  const mpin = Array.from(mpinInputs).map(input => input.value).join('');

  if (mpin !== "1123") {
    alert("Invalid MPIN.");
    return;
  }

  document.getElementById("mpinSection").style.display = "none";
  document.getElementById("thankyouSection").style.display = "block";

  setTimeout(() => {
    showReceipt();

    cart.length = 0;
    cartMenu();
    document.getElementById("cartItemCount").innerText = '0';
    lahatTotal();

    closeCheckout();
    closeGCashPopup();

    setTimeout(() => {
      resetForNewOrder();
    }, 300);
  }, 3000);
}




function cartMenu() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  const cartCountBadge = document.getElementById("cartCountBadge");
  const placeOrderBtn = document.querySelector('.place-order-btn');
  cartItems.innerHTML = "";
  let total = 0;
  let count = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p style="text-align:center; padding: 1rem;">You have no items in your shopping cart.</p>`;
    totalPrice.innerText = "₱0.00";
    cartCountBadge.innerText = "0";
    if (placeOrderBtn) placeOrderBtn.style.display = "none";
    return;
  }

  if (placeOrderBtn) placeOrderBtn.style.display = "block";
  count = cart.length;

  cart.forEach((item, index) => {
    let priceToDisplay = item.discountedPrice || item.price;
    let originalPrice = item.discount > 0
      ? `<span class="original-price" style="color: #888; text-decoration: line-through;">₱${Number.isInteger(item.price) ? item.price : item.price.toFixed(2)}</span>`
      : '';
    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" width="50" height="40" style="vertical-align: middle;">
        <div class="cart-info">
          <strong>${item.name}</strong><br>
          ${originalPrice}
          <span class="discounted-price" style="color: ${item.discount > 0 ? 'orange' : 'black'};">₱${Number.isInteger(priceToDisplay) ? priceToDisplay : priceToDisplay.toFixed(2)}</span>
          <br>
          SIZE: ${item.size}
          <div class="qty-control">
            <span class="qty">QTY </span>
            <button onclick="changeCartQty(${index}, -1)">-</button>
            <span>${item.qty}</span>
            <button onclick="changeCartQty(${index}, 1)">+</button>
          </div>
        </div>
        <button onclick="removeItem(${index})" class="remove-btn">remove</button>
      </div>
    `;
  });

  document.getElementById("cartItemCount").innerText = `${count}`;
  lahatTotal();
}

function lahatTotal() {
  const totalPrice = document.getElementById("totalPrice");
  const placeOrderBtn = document.querySelector('.place-order-btn');
  const cartCountBadge = document.getElementById("cartCountBadge");
  let total = 0;
  cart.forEach((item) => {
    let priceToUse = item.discountedPrice || item.price;
    total += priceToUse * item.qty;
  });
  totalPrice.innerText = `₱${Number.isInteger(total) ? total : total.toFixed(2)}`;
  cartCountBadge.innerText = cart.reduce((sum, item) => sum + item.qty, 0);
  if (placeOrderBtn) {
    placeOrderBtn.disabled = cart.length === 0;
  }
  const cartTotalContainer = totalPrice.closest('p');
  if (cart.length === 0) {
    cartTotalContainer.style.display = "none";
  } else {
    cartTotalContainer.style.display = "block";
  }
}

function changeCartQty(index, change) {
  cart[index].qty = Math.max(1, cart[index].qty + change);
  cartMenu();
}

function removeItem(index) {
  cart.splice(index, 1);
  cartMenu();
}

function showReceipt() {
  const receiptItems = document.getElementById("receiptItems");
  const shippingMethodSpan = document.getElementById("receiptShippingMethod");
  const shippingFeeSpan = document.getElementById("receiptShippingFee");
  const paymentMethodSpan = document.getElementById("receiptPaymentMethod");
  const gcashFeeContainer = document.getElementById("receiptGcashFeeContainer");
  const gcashFeeSpan = document.getElementById("receiptGcashFee");
  const totalDueSpan = document.getElementById("receiptTotalDue");

  document.getElementById("receiptClientName").textContent = document.getElementById("wm-fname-display").textContent;
  document.getElementById("receiptClientAddress").textContent = document.getElementById("wm-location-display").textContent;
  document.getElementById("receiptClientPhone").textContent = document.getElementById("wm-phone-display").textContent;
  document.getElementById("receiptClientEmail").textContent = document.getElementById("wm-email-display").textContent;


  receiptItems.innerHTML = "";
  let merchandiseSubtotal = 0;

  cart.forEach(item => {
    const price = item.discountedPrice;
    const subtotal = price * item.qty;
    merchandiseSubtotal += subtotal;

    receiptItems.innerHTML += `
  <tr>
    <td><img src="${item.image}" alt="${item.name}" class="wm-receipt-img" /></td>
    <td>${item.name}</td>
    <td>${item.qty}</td>
    <td>${formatPeso(subtotal)}</td>
  </tr>
`;

  });

  document.querySelector(".wm-receipt-thankyou").innerHTML =
  "Thank you for shopping with <strong>Willmelia</strong>! We appreciate your trust and hope to see you again soon.";


  const shippingOption = document.getElementById("shippingOption").value;
  const shippingMethod = shippingOption === "pickup" ? "Pick Up" : "Standard Local (3-5 days)";
  const shippingFee = shippingOption === "pickup" ? 0 : 36;
  shippingMethodSpan.innerText = shippingMethod;
  shippingFeeSpan.innerText = formatPeso(shippingFee);

  const paymentMethod = document.getElementById("paymentMethod").value;
  const methodText = paymentMethod === "gcash" ? "GCash" : "Cash on Delivery";
  const gcashFee = paymentMethod === "gcash" ? 7 : 0;

  paymentMethodSpan.innerText = methodText;
  if (paymentMethod === "gcash") {
    gcashFeeContainer.style.display = "block";
    gcashFeeSpan.innerText = formatPeso(gcashFee);
  } else {
    gcashFeeContainer.style.display = "none";
  }

  const totalDue = merchandiseSubtotal + shippingFee + gcashFee;
  totalDueSpan.innerText = formatPeso(totalDue);

  document.getElementById("receiptHere").style.display = "flex";
alert("Thank you for purchasing with Willmelia! Your order is now confirmed.");

}









renderProducts();
