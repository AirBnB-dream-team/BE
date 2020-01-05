const server = require("express").Router();
const helpers = require("../helpers/bnbHelpers");

server.post("/:id", (req, res) => {
  const bnb = {
    planner_id: req.params.id,
    bath_number: req.body.bath_number,
    bed_number: req.body.bed_number,
    zip: req.body.zip,
    address: req.body.date,
    city: req.body.city,
    state: req.body.state,
    email: req.body.email,
    sqft: req.body.sqft,
    date: req.body.date,
    price: req.body.price
  };

  if (
    bnb.planner_id &&
    bnb.bath_number &&
    bnb.bed_number &&
    bnb.zip &&
    bnb.address &&
    bnb.city &&
    bnb.state &&
    bnb.email &&
    bnb.sqft &&
    bnb.date &&
    bnb.price
  ) {
    helpers
      .addbnb(bnb)
      .then(bnbmade => {
        res.status(201).json(bnbmade);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Failed to create new rental" });
      });
  } else {
    res.status(500).json({ message: "Missing required feild" });
  }
});

server.delete("/:id", (req, res) => {
  const { id } = req.params;

  helpers
    .remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: `deleted rental with id ${id}` });
      } else {
        res
          .status(404)
          .json({ message: "Could not find rental with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete rental" });
    });
});

server.get("/", (req, res) => {
  helpers
    .getbnb()
    .then(rentals => {
      res.status(200).json(rentals);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching rentals", error: err });
    });
});

server.get("/:id", (req, res) => {
  const { id } = req.params;
  helpers
    .getuserbnb(id)
    .then(rentals => {
      res.status(200).json(rentals);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching rentals", error: err });
      console.log(err);
    });
});

server.get("/reserved/:id", (req, res) => {
  const { id } = req.params;
  helpers
    .getreservedbnb(id)
    .then(rentals => {
      res.status(200).json(rentals);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching rentals", error: err });
      console.log(err);
    });
});
server.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  helpers
    .update(changes, id)
    .then(updated => {
      res.status(200).json(updated);
    })

    .catch(err => {
      res.status(500).json({ message: "Failed to update rental" });
      console.log(err);
    });
});
module.exports = server;
