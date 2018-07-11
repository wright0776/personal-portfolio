const express = require("express");
const contactsRouter = express.Router();
const Contact = require("../models/contact");
const nodeMailer = require('nodemailer');


contactsRouter.get("/", (req, res) => {
    Contact.find((err, contacts) => {
        if (err) return res.status(500).send(err);
        return res.send(contacts);
    });
});

contactsRouter.post("/", (req, res) => {
    const newContact = new Contact(req.body);
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMEM,
            pass: process.env.EMPW
        }
    })
    const mailOptions = {
        from: `${req.body.email}`,
        to: process.env.EMEM,
        subject: `${req.body.name}`,
        text:  `Someone contacted you! 
                Name: ${req.body.name},
                Phone: ${req.body.phone},
                Email: ${req.body.email},
                Message: ${req.body.message}`,
        replyTo: `${req.body.email}`
    }
    transporter.sendMail(mailOptions, function(err, res) {
        if (err) {
            console.log('there was an error: ', err);
        } else {
            console.log('here is the res: ', res)
        }
    })
    newContact.save(err => {
        if (err) return res.status(500).send(err);
        return res.send(newContact);
    });
});

contactsRouter.get("/:id", (req, res) => {
    Contact.findById(req.params.id, (err, contact) => {
        if (err) return res.status(500).send(err);
        return res.send(contact);
    });
});

contactsRouter.put("/:id", (req, res) => {
    Contact.findyByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedContact) => {
        if (err) return res.status(500).send(err);
        return res.send(updatedContact);
    });
});

contactsRouter.delete("/:id", (req, res) => {
    Contact.findByIdAndRemove(req.params.id, (err, removedContact) => {
        if (err) return res.status(500).send(err);
        return res.send(removedContact);
    });
});

module.exports = contactsRouter;