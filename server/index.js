require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
routes = require("./routes/routes");
// const path = require("path");
const app = express();
// app.use(express.static(__dirname+ '/../build'))
app.use(cors());
app.use(json());

routes(app);
const port = process.env.port || 3001;
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, ">./build/index.html"));
//   });
app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
