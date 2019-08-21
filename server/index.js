require("dotenv").config();
const express = require("express");
const massive = require("massive");
const cors = require("cors");
const { json } = require("body-parser");
routes = require("./routes/routes");

const app = express();
const port = process.env.port || 3001;

app.use(cors());
app.use(json());

routes(app);

app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
