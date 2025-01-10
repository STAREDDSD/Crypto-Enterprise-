const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const { cryptoType, walletAddress, email, amount } = req.body;
    const price = calculatePrice(cryptoType, amount);

    // Send email logic (simulating SendGrid or Nodemailer)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
        }
    });

    let mailOptions = {
        from: 'youremail@gmail.com',
        to: email,
        subject: 'Crypto Payment Details',
        text: `Booking confirmed!\nCrypto: ${cryptoType}\nPrice: $${price}\nPlease make payment to account: 12345678`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Booking successful and email sent.');
        }
    });
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
    const markup = 0.05;
    return (basePrice + basePrice * markup).toFixed(2);
}

app.listen(3000, () => {
    console.log('Server running on port 3000');
});