// ****************************************************************************
// Server.js
// This file is the initial starting point for the Node/Express server.
// ****************************************************************************

// Dependencies
// =============================================================
const express = require("express");

// Requiring our models for syncing to the MySQL database
// Remember: This syntax imports the `db` object exported from the
// `./models/index.js` module.
const db = require("./models");

// Sets up the Express App
// =============================================================
const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Allow Express to automatically serve static resource like the
// HTML, CSS and JavaScript for the frontend client application.
app.use(express.static("./public"));

// Routes
// =============================================================
app.use("/api", require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
