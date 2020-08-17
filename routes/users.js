var express = require("express");
var router = express.Router();

const Project = require("../models/project");
const Standup = require("../models/standup");
const Team = require("../models/team");

router.get("/project", function (req, res) {
  Project.find({ name: { $regex: "Aman" } })
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error in the request" }, err);
    });
});

router.post("/project", function (req, res) {
  let project = new Project(req.body);
  project.save(function (err, project) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(project);
    }
  });
});

router.get("/standup", (req, res) => {
  Standup.find()
    .sort({ teamMember: 1 })
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error in the request" }, err);
    });
});

router.post("/standup", (req, res) => {
  let note = new Standup(req.body);
  note.save((err, note) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(note);
    }
  });
});

router.get("/team", function (req, res) {
  Team.find()
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error in the request" }, err);
    });
});

router.post("/team", function (req, res) {
  let team = new Team(req.body);
  team.save(function (err, team) {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).json(team);
    }
  });
});

module.exports = router;
