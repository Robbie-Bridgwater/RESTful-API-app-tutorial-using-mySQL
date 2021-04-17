const router = require("express").Router();

// ROUTE FOR LANDING PAGE (WHERE YOU SEE ALL POSTS)
router.get("/", async(req, res) => {
    // WHAT IS LOADED ON LANDING PAGE
    // "try" this method
    try {
        res.json({ message: "Getting the homepage" });
    }
    // if your "try" doesn't work, "catch" the mistake and do this instead
    catch (err) {
        res.status(500).json(err);
    }
});

// ROUTE FOR SIGN-UP PAGE
router.get("/signup", async(req, res) => {
    // WHAT IS LOADED ON SIGNUP PAGE
    // "try" this method
    try {
        res.json({ message: "Getting the Signup Page" });
    }
    // if your "try" doesn't work, "catch" the mistake and do this instead
    catch (err) {
        res.status(500).json(err);
    }
});

// ROUTE FOR LOGIN PAGE
router.get("/login", async(req, res) => {
    // WHAT IS LOADED ON LOGIN PAGE
    // "try" this method
    try {
        res.json({ message: "Getting the login page" });
    }
    // if your "try" doesn't work, "catch" the mistake and do this instead
    catch (err) {
        res.status(500).json(err);
    }
});

// ROUTE FOR DASHBOARD (WHERE YOU MAKE POSTS)
router.get("/dashboard", async(req, res) => {
    // WHAT IS LOADED ON DASHBOARD PAGE
    // "try" this method
    try {
        res.json({ message: "Getting the dashboard page where you make new posts" });
    }
    // if your "try" doesn't work, "catch" the mistake and do this instead
    catch (err) {
        res.status(500).json(err);
    }
});

// ROUTE TO EDIT SPECIFIC POST
router.get("/dashboard/:id", async(req, res) => {
    // WHAT IS LOADED ON DASHBOARD WITH A SPECIFIC ID (THIS WILL ALLOW US TO EDIT A PRE-EXISTING POST)
    // "try" this method
    try {
        res.json({ message: "Getting the dashboard page where you can edit existing posts" });
    }
    // if your "try" doesn't work, "catch" the mistake and do this instead
    catch (err) {
        res.status(500).json(err);
    }
});

// ROUTE FOR VIEWING SPECIFIC POST
router.get("/post/:id", async(req, res) => {
    // WHAT IS LOADED ON POST WITH A SPECIFIC ID (THIS WILL LET US VIEW A SPECIFIC POST AND COMMENT ON SAID POST)
    // "try" this method
    try {
        res.json({ message: "Getting the page for a specific post (to look at and also to comment on)" });
    }
    // if your "try" doesn't work, "catch" the mistake and do this instead
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;