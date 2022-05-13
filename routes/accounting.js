const router = require("express").Router();
 
  router.get('/:id', (req, res) => {
    res.send('Hello Account Info!')
  });  

module.exports = router;