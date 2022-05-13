const router = require("express").Router();

  router.get('/', (req, res) => {
    res.send('Hello Withdraw!')
  }); 

module.exports = router;