const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let workItems = [];
let listItems = ["buy food", "cook food", "eat!"];

app.get("/", function (req, res) {
  var today = new Date();

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  var day = today.toLocaleDateString("hi-IN", options);

  res.render("list", {
    listTitle: day,
    items: listItems,
  });
});

app.get("/work", function (req, res) {
  res.render("list",{listTitle: "Work List", items:workItems})
})

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work")
})

app.post("/", function (req, res) {
  let item = req.body.newItem;

  listItems.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("The server is running on port 3000.");
});

// switch (currentDay) {
//   case 0:
//     day = "Sunday"
//     break;

//     case 1:
//       day = "Monday"
//     break;

//     case 2:
//       day = "Tuesday"
//     break;
//     case 3:
//       day = "Wednesday"
//     break;
//     case 4:
//       day = "Thursday"
//     break;

//     case 5:
//       day = "Friday"
//     break;

//     case 6:
//       day = "Saturday"
//       break;

//   default:
//     console.log("There is a error.")
// }
