const express = require("express");

const db = require("../dbconfig");

const router = express.Router();

router.get("/", (req, res) => {
  db("cohorts")
    .then(cohorts => {
      res.status(200).json(cohorts);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  db("cohorts")
    .where({ id: req.params.id })
    .first()
    .then(cohort => {
      res.status(200).json(cohort);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id/students", (req, res) => {
  db('students')
    .where({ cohort_id: req.params.id })
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  db("cohorts")
    .insert(req.body)
    .then(created => {
      res.status(201).json(created);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  db("cohorts")
    .where({ id: req.params.id })
    .update(req.body)
    .then(updates => {
      if (updates > 0) {
        res.status(200).json({ message: `${updates} updated` });
      } else {
        res.status(404).json({ message: "Not Found" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  db("cohorts")
    .where({ id: req.params.id })
    .del()
    .then(deleted => {
      if (deleted > 0) {
        res.status(200).json({ message: `${deleted} updated` });
      } else {
        res.status(404).json({ message: "Not Found" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
