let TicketModel = require("../model/ticket.model.js");

let raiseTicket = (req, res) => {
    let ticket = new TicketModel({
        _id: req.body.username,
        reason: req.body.reason
    });

    ticket.save((err, result) => {
        if (!err) {
            res.send("Ticket raised successfully");
        }

        else {
            res.send("Error with Ticket "+ err);
        }
    })
}

module.exports = {raiseTicket};