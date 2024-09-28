// Import axios
const axios = require('axios');

// Define the API endpoint
const API_URL = 'https://api.example.com/products';

// Define the product data in JSON format
const productData = {
    id: 101,
    name: "Wireless Bluetooth Headphones",
    description: "Over-ear, noise-canceling, long battery life.",
    price: 99.99,
    category: "Electronics",
    stock_quantity: 50,
    brand: "AudioMax",
    color: "Black",
    weight: "300g",
    dimensions: {
        length: "7 inches",
        width: "6 inches",
        height: "3 inches"
    },
    features: [
        "Bluetooth 5.0",
        "Active Noise Cancellation",
        "40-hour battery life"
    ],
    images: [
        {
            url: "https://example.com/images/product101-front.jpg",
            alt: "Front view of Wireless Bluetooth Headphones"
        },
        {
            url: "https://example.com/images/product101-side.jpg",
            alt: "Side view of Wireless Bluetooth Headphones"
        }
    ]
};

// Function to create a new product
const createProduct = async () => {
    try {
        // Sending a POST request to the API
        const response = await axios.post(API_URL, productData);

        // If successful, log the response
        if (response.status === 201) {
            console.log('Product created successfully:', response.data);
        } else {
            console.log('Failed to create product:', response.status);
        }
    } catch (error) {
        console.error('Error creating product:', error.response ? error.response.data : error.message);
    }
};

// Call the function to create a product
createProduct();
