require("dotenv").config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const connectDB = require("./config/db");
const flash = require("connect-flash");
const session = require("express-session");
const app = express();
const port = 3010;

// Connect to Database
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Template Engine
app.use(expressLayout);
app.set("layout", "layouts/main");
app.set("view engine", "ejs");

//Express Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
  }),
);

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  }),
);

// Flash Messages
app.use(flash({ sessionKeyName: "flashMessage" }));

// Routes
app.use("/", require("./routes/customer.js"));

// Handle 404
app.get("*", (req, res) => {
  res.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
