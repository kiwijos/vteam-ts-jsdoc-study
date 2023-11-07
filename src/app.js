import express from "express";
import indexRouter from "./routes/index.js";

const app = express();

app.use(express.json()); // parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // parses the URL-encoded data with the querystring library (when false) or the qs library (when true)

app.use("/", indexRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
