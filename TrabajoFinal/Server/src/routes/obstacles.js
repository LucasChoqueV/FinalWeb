const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database.js');
 // GET all
router.get('/obstacles/:levelId', (req, res) => {
    const { levelId } = req.params;
    const { spriteName } = req.query;
    mysqlConnection.query('SELECT * FROM obstacles WHERE level_id=? AND spriteName=?', [levelId, spriteName],(err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


module.exports = router;
