const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dbConnect = require("./config/db.js");
var cors = require("cors");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const userRoute = require("./routes/api/users.js");
const postRoute = require("./routes/api/posts.js");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
const PORT = process.env.PORT || 5000;
const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours
///====================================================connect to db
dbConnect();
const mongoStore = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySessions",
});
app.use(
  session({
    name: "usersession", //name to be put in "key" field in postman etc
    secret: "abcd",
    resave: true,
    saveUninitialized: false,
    store: mongoStore,
    cookie: {
      maxAge: MAX_AGE,
      secure: true,
    },
  })
);
//=====================================================route path

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(PORT, (req, res) => {
  console.log("My second Server is running at port: ", PORT);
});
