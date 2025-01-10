document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const cryptoType = document.getElementById('crypto-type').value;
    const walletAddress = document.getElementById('wallet-address').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    const price = calculatePrice(cryptoType, amount);

    // Simulate sending email with payment details and price
    alert(`Booking confirmed!\nCrypto: ${cryptoType}\nPrice: $${price}\nPayment details sent to: ${email}`);
});

function calculatePrice(crypto, amount) {
    const currentPrice = {
        bitcoin: 50000,
        ethereum: 3000,
        ton: 6,
        usdt: 1,
        litecoin: 200
    };

    const basePrice = currentPrice[crypto.toLowerCase()] * amount;
    const markup = 0.05; // 5% markup
    return (basePrice + basePrice * markup).toFixed(2);
}

// Admin login logic
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const password = document.getElementById('admin-password').value;
    
    if (password === 'admin') {
        alert('Login successful!');
        document.getElementById('admin-dashboard').style.display = 'block';
        document.getElementById('admin-login').style.display = 'none';
    } else {
        alert('Incorrect password.');
    }
});

// View orders logic
document.getElementById('view-orders').addEventListener('click', function () {
    const ordersList = document.getElementById('orders-list');
    ordersList.innerHTML = 'No orders yet. (This will be populated dynamically from the backend)';
});