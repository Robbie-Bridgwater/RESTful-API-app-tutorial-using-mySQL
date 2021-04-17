// DEPENDENCIES 
const express = require("express");
const routes = require("./controllers");

// SET-UP EXPRESS APP
const app = express();
const PORT = process.env.PORT || 3000;

// ROUTING
app.use(routes);

// SETS UP DATA FOR THE EXPRESS APP
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// INITIATE SERVER LISTENING
app.listen(PORT, () => console.log(`Now listening on https://locahost:${PORT}`));