const { age, date } = require("../../lib/date");


const instructor = require("../models/instructor")
module.exports = {
  index(req, res) {

    instructor.all(function(instructors) {
      return res.render("instructors/index", {instructors})
    })

  },
  show(req, res) {
    instructor.find(req.params.id,function(instructor){
      if(!instructor) return res.send("Instructor not found!")
      instructor.age = age(instructor.birth)
      instructor.services = instructor.services.split(",")
      instructor.created_at = date(instructor.created_at).format
      return res.render("instructors/show", {instructor})
    })
  },
  create(req, res) {
    return res.render("instructors/create");
  },
  post(req, res) {
    const keys = Object.keys(req.body);
    // ["avatar_url","name","birth","gender","services"]

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields");
      }
    }
    instructor.create(req.body, function(instructor) {
      return res.redirect(`/instructors/${instructor.id}`)
    })
  },
  edit(req, res) {
    instructor.find(req.params.id,function(instructor){
      if(!instructor) return res.send("Instructor not found!")
      instructor.birth = date(instructor.birth).iso

      return res.render("instructors/edit", {instructor})
    });
  },
  put(req, res) {
    return;
  },
  delete(req, res) {
    return;
  },
};
