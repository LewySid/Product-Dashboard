// Step 1: Create JS, HTML/CSS folders
// Step 2: Make HTML

// API URL
const url = "https://www.course-api.com/javascript-store-products";

// Step 3: Create Function to Retrieve Data

function fetchProductsThen() {
    fetch(url)
    .then((response) => response.json()) // Changes the Respoonse to JSON
    .then((products) => {
        products.forEach((products) => { // Logs Each Product Name
            console.log(products.fields.name);
        });
    })
    .catch((error) => {
        console.log("Fetch Error:", error);
    });
}

// Step 4: Create Function to Retrieve Product Data

async function fetchProductsAsync() {
try {
    const response = await fetch(url);
    const products = await response.json();
    displayProducts(products); // Sends Data to Display Function
} catch (error) {
    handleError(Error);
    }
}

// Step 5: Display Function 

function displayProducts(products) {
    const container = document.getElementById("product-container");

// Gets the First Five Products
const firstFive = products.slice(0, 5);

firstFive.forEach(product => {
    // Creates Div for Card
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Gets Product Name
    const name = document.createElement("h2");
    name.textContent = product.fields.name;

    // Gets Product Image
    const image = document.createElement("img");
    image.src = product.fields.image[0].url;
    image.alt = product.fields.name;

    // Gets Product price and Converts Cents to Dollars
    const price = document.createElement("p");
    price.textContent = `$${(product.fields.price / 100).toFixed(2)}`;

    // Adds Elements to the Cards
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);

    // Adds Cards to the Page
    container.appendChild(card);
});
}

// Step 6: Add Error Function

function handleError(error) {
    console.log(`An Error Occured: ${error.message}`);
}

// Step 7: Call Both Function

fetchProductsThen();
fetchProductsAsync();

// Step 8: Add Hover Affects to Products Cards in style.css