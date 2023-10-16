const express = require("express");
const morgan = require("morgan");
const app = express();

const port = 4000;

app.use(morgan("tiny"));
app.get("/", (req, res) => {
	res.send("Hello from server2");
});

app.listen(port, () => {
	console.log(`Server2 listening on port ${port}`);
});
