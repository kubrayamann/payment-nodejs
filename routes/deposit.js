const router = require("express").Router();

  router.get('/', (req, res) => {
    res.send('Hello Deposit!')
  }); 

module.exports = router;