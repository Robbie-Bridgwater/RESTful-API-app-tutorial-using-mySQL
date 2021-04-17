// DEPENDENCIES
const router = require("express").Router();
// ASSIGN ROUTES TO VARIABLE
const homeRoutes = require("./homeRoutes");
// MAKE APP USE THE ROUTES YOU HAVE ASSIGNED
router.use("/", homeRoutes);
// EXPORT IT FOR YOUR SERVER TO USE
module.exports = router;