const read = require("readline-sync");
const products = [
  {
    name: "apple",
    category: "Fruit",
    price: 500,
  },
  {
    name: "banana",
    category: "Fruit",
    price: 200,
  },
  {
    name: "orange",
    category: "Fruit",
    price: 300,
  },
  {
    name: "mango",
    category: "Fruit",
    price: 600,
  },
  {
    name: "grapes",
    category: "Fruit",
    price: 450,
  },
  {
    name: "pineapple",
    category: "Fruit",
    price: 700,
  },
  {
    name: "watermelon",
    category: "Fruit",
    price: 800,
  },
  {
    name: "papaya",
    category: "Fruit",
    price: 350,
  },
  {
    name: "strawberry",
    category: "Fruit",
    price: 900,
  },
  {
    name: "kiwi",
    category: "Fruit",
    price: 1000,
  },
];

read.question("Enter the product name: ");
//Function to Show Items 
function showItems(productName) { }


//Function to Add Product
function addProduct(productName, category, price) { 
console.log("New Product Details:");
const name = read.question("Enter the product name: ");
const category = read.question("Enter the product category: ");
const price = read.questionInt("Enter the product price: ");
const newProduct = {
  name: name,
  category: category,
  price: price,
};
products.push(newProduct);
console.log("Product added successfully!");
}

//method: Filter product from Inventory
function filterProductsByCategory() {
  const categoryName = read.question("Enter Category: ");
  const filteredProducts = products.filter((item) =>{
    return item.category === categoryName.toLowerCase();
  });
console.log("Filtered Products:\n");
filteredProducts.forEach((item) => {
  console.log(item.name, item.category, item.price);
})
}

while (true) {
 console.log("Methods Menu");
 console.log("1. Add Product");
 console.log("2. Filter Product");
console.log("3. Exit");
 const choice = read.questionInt("Enter your choice: ");

 // Switch Implementation
 switch (choice) {
   case 1:
     addProduct();
     break;
   case 2:
     filterProductsByCategory();
     break;
   case 3:
     console.log("Exiting...");
     process.exit(0);
   default:
     console.log("Invalid choice!");
 }
}











//Function to Remove Product
function removeProduct(productName) { 
  console.log("Product to be removed:");
  const name = read.question("Enter the product name to remove: ");
  const productIndex = products.findIndex((product) => product.name === name);
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    console.log("Product removed successfully!");
  } else {
    console.log("Product not found!");
  }
}

//Function to Update Product
function updateProduct(productName, category, price) { }

//Function to Show All Products
function showAllProducts() { }
  