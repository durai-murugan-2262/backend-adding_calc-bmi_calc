const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send("The calculated result is " + result);
});

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  let height = parseFloat(req.body.height);
  let weight = parseFloat(req.body.weight);
  let bmiResult = weight / (height * height);
  res.send("Your BMI is " + bmiResult);
});

app.listen(port, () => {
  console.log("listening on port: " + port);
});
