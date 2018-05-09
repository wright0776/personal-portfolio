const express = require("express");
const contactsRouter = express.Router();
const Contact = require("../models/contact");

contactsRouter.get("/", (req, res) => {
    Contact.find((err, contacts) => {
        if (err) return res.status(500).send(err);
        return res.send(contacts);
    });
});

contactsRouter.post("/", (req, res) => {
    const newContact = new Contact(req.body);
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