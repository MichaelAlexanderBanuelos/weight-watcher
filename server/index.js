/* eslint-disable quotes */
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const PORT = 3000;

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../client/dist/")));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on PORT ${PORT}`);
});
