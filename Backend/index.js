const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8181;

app.use(express.json());
app.use(cors());

app.post('/sendtickets', async (req, res) => {
    const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'abhinandanwadhwa5@outlook.com',
        pass: process.env.outlookPassword
    }
    });

    const options = {
        from: 'abhinandanwadhwa5@outlook.com',
        to: req.body.email,
        subject: 'Spooky Halloween Event Confirmation',
        html: `Hi <strong>${req.body.name}</strong>, here's your ticket for the event. <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Click Here</a> to view your ticket.`
    };

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
        }
        console.log(info);
    });

    return res.status(200).json({ success: "The Ticket has been successfully sent to your email!!" });

});

app.listen(PORT, () => {
    console.log(`The App is running at http://localhost:${PORT}`);
});