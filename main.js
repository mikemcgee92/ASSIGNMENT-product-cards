const cardContainer = document.querySelector("#card-container")
const soldOut = "soldOut.png"

const products = [
  {
    id: 1,
    name: "House Blend",
    image: "house.jpg",
    description: "Our specially crafted house blend, with South American and East African beans",
    availability: true,
    size: "Single bag",
    weight: "12oz",
    price: 14.99,
    priceInfo: "Priced by weight and seasonal availability"
  },
  {
    id: 2,
    name: "Dark Roast Blend",
    image: "dark.jpg",
    description: "Artisinally roasted coffee with caramel and toffee notes and a smoky finish.",
    availability: true,
    size: "Single bag",
    weight: "12oz",
    price: 16.99,
    priceInfo: "Priced by weight and seasonal availability"
  },
  {
  id: 3,
    name: "Medium Roast Blend",
    image: "medium.jpg",
    description: "Medium roasted blend of Guatemalan and Colombian coffee beans",
    availability: true,
    size: "Single bag",
    weight: "12oz",
    price: 15.99,
    priceInfo: "Priced by weight and seasonal availability"
  },
  {
    id: 4,
    name: "Light Roast Blend",
    image: "light.jpg",
    description: "Gently roasted blend of Ethiopian and Kenyan coffee beans",
    availability: false,
    size: "Single bag",
    weight: "12oz",
    price: 17.99,
    priceInfo: "Priced by weight and seasonal availability"
  }
]

//product card template
const generateCard = (product) => {
  //set availability string
  let isAvailable = "Available!"
  let soldOutString = " "
  if (product.availability === true) {
    isAvailable = "Available!"
    soldOutString = " "
  } else {
    isAvailable = "Sold out - check back soon!"
    soldOutString = `<img src="${soldOut}" id="sold-out" alt="SOLD OUT">`
  }
  
  //card template html
  let cardText = `
    <div class="card" style="width: 18rem;">
      <div class="card-header">
        <h2>${product.name}</h2>
      </div>
      <img src="${product.image}" class="card-img-top" alt="${product.name}">
      ${soldOutString}
      <div class="card-body">
        <p class="card-text">${product.description}</p>
      </div>
      <div class="card-body">
        <h6 class="card-text" id="available-header-${product.availability}">${isAvailable}</h6>
        <h3>Specifications</h3>
        <ul>
          <li>Size: ${product.size}</li>
          <li>Weight: ${product.weight}</li>
        </ul>
        <p class="spec-info">Valid until 12/31/2024</p>
      </div>
      <div class="card-body">
        <h3>Pricing</h3>
        <ul>
          <li>12oz: $${product.price}</li>
          <li>5lb: $${(product.price * 4)}</li>
          <li>50lb: $${(product.price * 8)}</li>
        </ul>
      </div>
    </div>
  `

  //append text to div
  cardContainer.innerHTML += cardText
}

//generate cards dynamically
for (product of products) {
  generateCard(product)
}
