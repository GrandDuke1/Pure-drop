// Array to store past orders
let pastOrders = [];

// Array to store users
let users = [];

// Order Form Submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const waterType = document.getElementById('waterType').value;
    const quantity = document.getElementById('quantity').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Create an order object
    const order = {
        waterType: waterType,
        quantity: quantity,
        paymentMethod: paymentMethod,
        date: new Date().toLocaleString()
    };

    // Add the order to past orders
    pastOrders.push(order);

    // Update the past orders list
    updatePastOrders();

    alert(`Order placed successfully!\nWater Type: ${waterType}\nQuantity: ${quantity}L\nPayment Method: ${paymentMethod}`);
    document.getElementById('orderForm').reset();
});

// Function to update past orders list
function updatePastOrders() {
    const pastOrdersList = document.getElementById('pastOrdersList');
    pastOrdersList.innerHTML = ''; // Clear the list

    pastOrders.forEach((order, index) => {
        const orderItem = document.createElement('div');
        orderItem.classList.add('order-item');
        orderItem.innerHTML = `
            <p><strong>Order ${index + 1}:</strong></p>
            <p>Water Type: ${order.waterType}</p>
            <p>Quantity: ${order.quantity}L</p>
            <p>Payment Method: ${order.paymentMethod}</p>
            <p>Date: ${order.date}</p>
            <hr>
        `;
        pastOrdersList.appendChild(orderItem);
    });
}

// Sign Up Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const phone = document.getElementById('signupPhone').value;
    const password = document.getElementById('signupPassword').value;

    // Create a user object
    const user = {
        username: username,
        email: email,
        phone: phone,
        password: password
    };

    // Add the user to the users array
    users.push(user);

    alert('Sign up successful! Please login.');
    document.getElementById('signupForm').reset();
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Find the user in the users array
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Login successful!');
        document.getElementById('welcomeMessage').textContent = `Welcome back, ${user.username}!`;
        document.getElementById('loginForm').reset();
    } else {
        alert('Invalid username or password.');
    }
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (name && email && phone && message) {
        alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});