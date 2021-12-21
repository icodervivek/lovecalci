const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("lovecalci");
});

// app.post("/", (req, res) => {
//     res.send(`
//     ${req.body.firstPerson}
//     and ${req.body.secondPerson},
//     your love percentage is ${Math.floor(Math.random() * 100) + 1};
//     `);
// })

app.post("/", (req, res) => {
    let firstPerson = req.body.firstPerson;
    let secondPerson = req.body.secondPerson;
    let lovePercentage = Math.floor(Math.random() * 100) + 1;

    function successLove() {
        if (lovePercentage <= 100 && lovePercentage >= 80) {
            return "You both are made for each other 🤗";
        } else if (lovePercentage <= 80 && lovePercentage >= 50) {
            return "You both moves like Oil and Water moves together 😖";
        } else if (lovePercentage <= 50 && lovePercentage >= 1) {
            return "Someone has to perform some extra effort to make things work  💔";
        }
    }

    let userData = {
        firstPer: firstPerson,
        secondPer: secondPerson,
        lovePer: lovePercentage,
        successL: successLove(),
    };

    console.log(userData);
    res.render("calcipercent", {
        user: userData
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is up and running`);
});