const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

router.post("/", (req, res) => {
    console.log("POST req.body", req.body);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding",
                    "support", "comments") VALUES ($1, $2, $3, $4);`;
    let { feeling, understanding, support, comments } = req.body;

    pool.query(queryText, [feeling, understanding, support, comments])
    .then((results) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;