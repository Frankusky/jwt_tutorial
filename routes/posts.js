const router = require("express").Router();
const verify = require("./verifyToken");
router.get("/", verify, (req, res) => {
    res.json({
        post: {
            title: "my first post",
            description: "random data you shouldnt see"
        }
    })
})


module.exports = router;
