const router = require("express").Router();

  router.get('/', (req, res) => {
    res.send('Hello Account!')
  });
  
  router.get('/:id', (req, res) => {
    res.send('Hello Account Info!')
  }); 

module.exports = router;