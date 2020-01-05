const db = require("../data/dbConfig");

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findBy({ id }).first();
}

function findBy(filter) {
  return db("users")
    .select("id", "username", "email")
    .where(filter);
}

function findByLogin(filter) {
  return db("users").where(filter);
}

function find() {
  return db("users").select("id", "username");
}

module.exports = {
  add,
  findBy,
  find,
  findByLogin
};
