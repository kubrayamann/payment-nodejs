const router = require("express").Router();

  router.get('/', (req, res) => {
    res.send('Hello Payment!')
  }); 

module.exports = router;