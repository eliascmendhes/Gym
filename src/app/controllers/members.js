const { age, date } = require("../../lib/date");
module.exports = {
  index(req, res) {
    return res.render("members/index");
  },
  show(req, res) {
    return;
  },
  create(req, res) {
    return res.render("members/create");
  },
  post(req, res) {
    const keys = Object.keys(req.body);
    // ["avatar_url","name","birth","gender","services"]

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }

    return;
  },
  edit(req, res) {
    return;
  },
  put(req, res) {
    return;
  },
  delete(req, res) {
    return;
  },
};
