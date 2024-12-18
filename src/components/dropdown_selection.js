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
    const catalogueGrid = document.querySelector('.catalogue-grid');
    const compareBtn = document.querySelector('#compare-btn'); // Compare button
    const comparisonTable = document.querySelector('#comparison-table'); // Comparison table

    // Sample product data for different categories
    const products = {
        laptops: [
            { name: 'Macbook M1 Air', price: '&#8377 3000', description: 'Sleek, lightweight, and powered by the Apple M1 chip for performance and battery life.', image: '/src/assets/images/laptop1.jpg' },
            { name: 'HP Pavillion', price: '&#8377 1500', description: 'Versatile and reliable, perfect for everyday computing and multimedia tasks.', image: '/src/assets/images/laptop3.jpg' },
            { name: 'Rog Strix G15', price: '&#8377 2500', description: 'High-performance gaming laptop with stunning visuals and seamless gameplay.', image: '/src/assets/images/laptop2.jpg' },
        ],
        cameras: [
            { name: 'Sony a7 III', price: '&#8377 8000', description: 'Professional-grade mirrorless camera with exceptional image quality and advanced features.', image: '/src/assets/images/camera1.png' },
            { name: 'Canon EOS 6D', price: '&#8377 10000', description: 'Full-frame DSLR for stunning photos and videos with robust build quality.', image: '/src/assets/images/camera3.png' },
            { name: 'Sony Alpha', price: '&#8377 13000', description: 'Compact and versatile camera for photography enthusiasts and professionals alike.', image: '/src/assets/images/camera2.png' },
        ],
        gaming: [
            { name: 'Xbox controller zen5', price: '&#8377 300', description: 'Ergonomic design with responsive controls for an immersive gaming experience.', image: '/src/assets/images/console1.png' },
            { name: 'Nintendo switch', price: '&#8377 400', description: 'Hybrid gaming console for ultimate portability and fun multiplayer experiences.', image: '/src/assets/images/console3.png' },
            { name: 'Xbox controller zen3', price: '&#8377 500', description: 'Precision-crafted for seamless gameplay and maximum comfort during long sessions.', image: '/src/assets/images/console2.png' },
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
            productCard.setAttribute('data-category', category); // Add the category to the product card for filtering

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="price">${product.price}</p>
                <p class="description">${product.description}</p>
                <button class="select-btn" style="display: none;">Select</button> <!-- Hidden initially -->
                <a href="/src/pages/success.html" class="view-details">Rent gadget</a>
            `;
            catalogueGrid.appendChild(productCard);
        });
    }

    // Function to toggle select buttons visibility
    compareBtn.addEventListener('click', function() {
        const selectButtons = document.querySelectorAll('.select-btn');
        selectButtons.forEach(button => {
            button.style.display = button.style.display === 'none' ? 'block' : 'none'; // Toggle visibility
        });
    });

    // Function to add the selected product description to the comparison table
    function addToComparison(productName, productDescription) {
        // Check if two products are already selected
        if (comparisonTable.rows.length < 3) { // Rows include header row
            const row = comparisonTable.insertRow();
            const nameCell = row.insertCell(0);
            const descriptionCell = row.insertCell(1);
            nameCell.textContent = productName;
            descriptionCell.textContent = productDescription;
        } else {
            alert("You can compare only 2 products at a time.");
        }
    }

    // Add event listeners to the dropdown links
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            updateCatalogue(category);
        });
    });

    // Event listener for selecting products
    catalogueGrid.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('select-btn')) {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h2').textContent;
            const productDescription = productCard.querySelector('.description').textContent;
            addToComparison(productName, productDescription);
        }
    });

    // Initial catalogue load (default category)
    updateCatalogue('gaming');
});
