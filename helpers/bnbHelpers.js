const db = require("../data/dbConfig");

const addbnb = data => {
  return db("bnb").insert(data, "id");
};

const getbnb = () => {
  return db("bnb");
};

const getuserbnb = id => {
  return db("bnb")
    .where("planner_id", "=", id)
    .select(
      "bnb.id",
      "bnb.planner_id",
      "bnb.bath_number",
      "bnb.zip",
      "bnb.address",
      "bnb.city",
      "bnb.state",
      "bnb.email",
      "bnb.sqft",
      "bnb.price",
      "bnb.reserved",
      "bnb.date"
    );
};

function findBy(filter) {
  return db("bnb").where(filter);
}

function update(changes, id) {
  return db("bnb")
    .where({ id })
    .update(changes);
}
const remove = id => {
    return db("bnb")
      .where({ id })
      .delete();
  };

  module.exports = {
    addbnb,
    getbnb,
    getuserbnb,
    update,
    findBy,
    remove
  };
  