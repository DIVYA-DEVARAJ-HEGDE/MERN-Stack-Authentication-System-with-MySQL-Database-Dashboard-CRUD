const db = require("../config/db");

exports.getItems = (req, res) => {
  db.query("SELECT * FROM items WHERE user_id=?", [req.user.id], (err, result) => {
    res.json(result);
  });
};

exports.addItem = (req, res) => {
  const { title, description } = req.body;

  db.query(
    "INSERT INTO items (user_id, title, description) VALUES (?, ?, ?)",
    [req.user.id, title, description],
    () => res.send("Item Added")
  );
};

exports.deleteItem = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM items WHERE id=?", [id], () => {
    res.send("Deleted");
  });
};