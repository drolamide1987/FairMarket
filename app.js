// Example: Product card generation
const productList = document.querySelector ('.product-list');

// Sample product data
const products = [
    {
        name: 'Jebra Ear Pod',
        price: 15000,
        image: '../assets/jebra.svg'
    },
    {
        name: 'Binatone Electrical Fan',
        price: 20000,
        image: '../assets/Electrical Fan.svg'
    },
    {
        name: 'Apple Airpods',
        price: 50000,
        image: '../assets/Airpods.svg'
    },
    {
        name: 'Calvin Klein Wristwatch',
        price: 80000,
        image: '../assets/Wrist-watch.svg'
    },
    {
        name: 'Hardcover Book',
        price: 3000,
        image: '../assets/Hardcover Book.svg'
    },
    {
        name: 'Nike Sneaker',
        price: 35000,
        image: '../assets/Sneaker.svg'
    },
    {
        name: 'HP Laptop',
        price: 500000,
        image: '../assets/Laptop.svg'
    },
    {
        name: 'JBL Headset',
        price: 20000,
        image: '../assets/Headset.jpg'
    },
    {
        name: 'Gucci Sweater',
        price: 55000,
        image: '../assets/Sweater.svg'
    },
    {
        name: 'Makeup Brush',
        price: 2000,
        image: '../assets/Makeup brush.svg'
    },
    {
        name: 'Beats Headset',
        price: 80000,
        image: '../assets/White Headset.svg'
    },
    {
        name: 'LG Refrigerator',
        price: 350000,
        image: '../assets/Refrigerator.svg'
    },
        // Add more products here
];

// Function to create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">₦${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
    `;
    return card;
}

// Render product cards
products.forEach(product => {
    const card = createProductCard(product);
    productList.appendChild(card);
});

// Add more functionality as needed, such as cart management, checkout process, etc.


const searchInput = document.querySelector('.search-input input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

function handleSearch() {
    const searchQuery = searchInput.value.trim();
    if (searchQuery) {
        // Perform search logic here
        console.log('Search query:', searchQuery);
        // You can redirect the user to the search results page or fetch search results dynamically
    }
}

// Close dropdowns when clicking outside
window.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(function(dropdown) {
        if (!event.target.matches('.dropdown-toggle') && !dropdown.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});

// Get modal elements
const loginModal = document.getElementById('login-modal');
const contactModal = document.getElementById('contact-modal');

// Get form elements
const loginForm = document.getElementById('login-form');
const contactForm = document.getElementById('contact-form');

// Get modal close buttons
const closeButtons = document.querySelectorAll('.close-btn');

// Open login modal
const loginLink = document.querySelector('header .nav-links a:nth-child(2)');
loginLink.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Open contact modal
const contactLink = document.querySelector('footer .link-group ul li:nth-child(1) a');
contactLink.addEventListener('click', () => {
    contactModal.style.display = 'block';
});

// Close modals
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        contactModal.style.display = 'none';
    });
});

// Handle form submissions
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = loginForm.elements[0].value;
    const password = loginForm.elements[1].value;

  ***  // Basic Validation 
    if (!email || !password) {
        alert('please fill in all fields.');
        return; ***
    }
    // Add login logic here
    console.log('Login:', email, password);

    *** // Simulate successful login with feedback to the user
    setTimeout(() => {
        alert('Login successful!');
        loginModal.style.display = 'none'; // Close the modal after successful login
    }, 1000); ***
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.elements[0].value;
    const email = contactForm.elements[1].value;
    const message = contactForm.elements[2].value;
    // Add contact form submission logic here
    console.log('Contact:', name, email, message);
   ***  // Simulate successful contact submission with feedback to the user
    setTimeout(() => {
        alert('Message sent successfully!');
        contactModal.style.display = 'none'; // Close the modal after successful submission
    }, 1000); ***
});
