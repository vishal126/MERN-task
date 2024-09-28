const axios = require('axios');

// Define the API endpoint for updating a product
const API_URL = 'https://api.example.com/products/101'; // Use the product's ID

// Define the updated product data (partial update using PATCH)
const updatedData = {
    price: 89.99,             // Updated price
    stock_quantity: 60        // Updated stock quantity
};

// Function to update the product
const updateProduct = async () => {
    try {
        // Sending a PATCH request to the API
        const response = await axios.patch(API_URL, updatedData);

        // If successful, log the updated response
        if (response.status === 200) {
            console.log('Product updated successfully:', response.data);
        } else {
            console.log('Failed to update product:', response.status);
        }
    } catch (error) {
        console.error('Error updating product:', error.response ? error.response.data : error.message);
    }
};

// Call the function to update the product
updateProduct();
