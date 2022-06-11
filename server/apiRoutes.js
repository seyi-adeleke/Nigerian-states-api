var States = require("../models/states");
var Country = require("../models/country");

module.exports = function (app) {
  app.get("/api/v1", function (req, res) {
    Country.find({}, "-_id -__v", (err, country) => {
      if (err) {
        res.status(404).json({
          info: "error returning data",
          error: err,
        });
      } else {
        res.status(200).json({
          info: "Basic information about Nigeria",
          data: country,
          states: "/api/v1/states/",
          api: "V1",
        });
      }
    });
  });

  app.get("/api/v1/states", (req, res) => {
    States.find({}, "-_id -__v", (err, states) => {
      if (err) {
        res.status(404).json({
          info: "error finding states",
          error: err,
        });
      } else {
        res.status(200).json({
          info: "All states found",
          data: states,
        });
      }
    }).sort({ Name: "ascending" });
  });

  app.get("/api/v1/states/:name", (req, res) => {
    States.findOne({ Name: req.params.name }, "-_id -__v", (err, state) => {
      if (err) {
        res.status(400).json({
          info: "error during find state",
          error: err,
        });
      }
      if (state) {
        res.status(200).json({
          info: "state found successfully",
          data: state,
        });
      } else {
        res.status(404).json({
          info: "state not found",
        });
      }
    });
  });

  //404
  app.use((req, res) => {
    res.status(404).json({
      error: "route not found",
    });
  });
};
