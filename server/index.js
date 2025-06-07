require('dotenv').config();
const express = require("express");
const connectDb = require("./utilities/db.js");
const app = express();
const port = process.env.PORT || 8080;
const router = require("./router/route.js");
const contactRouter = require("./router/contactRoute.js");
const errorFunction = require("./middlewares/error-func.js");
const cors = require("cors");

const corsOption = {
    origin: "https://codeandcosmos.onrender.com",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true
}

app.use(express.json());
app.use(cors(corsOption));

app.use("/", router);
app.use("/form", contactRouter);

app.use(errorFunction);

connectDb().then(() => {
    app.listen(port, () => {
        console.log("listening...");
    })
})
