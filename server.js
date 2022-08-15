const express = require('express');
const app = express();
const port = 3000

app.set('view engine', 'ejs')

app.get("/fullcapacity", (req, res) => {
    res.render("capacity")
})

app.get("/normal", (req, res) => {
    res.render("normal")
})

app.get("/password", (req, res) => {
    res.render("password")
})

app.get("/email", (req, res) => {
    res.render("email")
})

app.listen(process.env.PORT || port, () => console.log(`Server running at http://localhost:${port}`))