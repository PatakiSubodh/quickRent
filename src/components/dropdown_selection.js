// Toggle dropdown menu
document.querySelector('.dropdown-btn').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
});

// Update the dropdown button text with the selected category
const dropdownLinks = document.querySelectorAll('.dropdown-content a');
dropdownLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default link behavior
        e.preventDefault();
        
        // Update the dropdown button text with the selected option
        const selectedCategory = this.textContent;
        document.querySelector('.dropdown-btn').textContent = selectedCategory;

        // Close the dropdown after selection
        document.querySelector('.dropdown-content').classList.remove('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const dropdownLinks = document.querySelectorAll('.dropdown-content a');
    const catalogueGrid = document.querySelector('.catalogue-grid');

    // Sample product data for different categories
    const products = {
        laptops: [
            { name: 'Laptop 1', price: '$1000', description: 'Description for Laptop 1', image: '/src/assets/images/laptop1.jpg' },
            { name: 'Laptop 2', price: '$1200', description: 'Description for Laptop 2', image: '/src/assets/images/laptop2.jpg' },
            { name: 'Laptop 3', price: '$1500', description: 'Description for Laptop 3', image: '/src/assets/images/laptop3.jpg' },
        ],
        cameras: [
            { name: 'Camera 1', price: '$800', description: 'Description for Camera 1', image: '/src/assets/images/camera1.png' },
            { name: 'Camera 2', price: '$1000', description: 'Description for Camera 2', image: '/src/assets/images/camera2.png' },
            { name: 'Camera 3', price: '$1300', description: 'Description for Camera 3', image: '/src/assets/images/camera3.png' },
        ],
        gaming: [
            { name: 'Gaming Console 1', price: '$300', description: 'Description for Gaming Console 1', image: '/src/assets/images/console1.png' },
            { name: 'Gaming Console 2', price: '$400', description: 'Description for Gaming Console 2', image: '/src/assets/images/console2.png' },
            { name: 'Gaming Console 3', price: '$500', description: 'Description for Gaming Console 3', image: '/src/assets/images/console3.png' },
        ]
    };

    // Function to update product cards
    function updateCatalogue(category) {
        // Clear the existing product cards
        catalogueGrid.innerHTML = '';

        // Get products for the selected category
        const selectedProducts = products[category];

        // Create new product cards
        selectedProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">${product.price}</p>
                <p class="description">${product.description}</p>
                <a href="#" class="view-details">Rent gadget</a>
            `;
            catalogueGrid.appendChild(productCard);
        });
    }

    // Add event listeners to the dropdown links
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            updateCatalogue(category);
        });
    });

    // Initial catalogue load (default category)
    updateCatalogue('laptops');
});


const compareButton = document.getElementById('compare-btn');
dropdownLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        const selectedCategory = event.target.getAttribute('data-category');

        if (selectedCategory) {
            compareButton.disabled = false; // Enable the button
            compareButton.style.cursor = "pointer"; // Change the cursor to pointer
        }
    });
});
