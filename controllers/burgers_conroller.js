var express = require("express"); 
var router = express.Router();
var burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) {
    console.log(req.body);
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    console.log(result);
    res.json({ id: result.insertId });
  });
});
router.put("/", function(req, res) {
  var condition = "id = " + req.body.burger_id;
  console.log("condition", condition);
  burger.updateOne({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
//router.delete("/api/burger/:id", function(req, res) {
//   var condition = "id = " + req.params.id;
//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });
// Export routes for server.js to use.
module.exports = router;