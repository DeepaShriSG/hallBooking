const express = require("express");
const app = express();
app.use(express.json())

const Approutes = require("./src/routes");

app.use("/", Approutes);

app.listen(8000, () => console.log("App is listening to port 8000"));
