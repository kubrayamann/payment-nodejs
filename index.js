const express = require("express");
const router = express();
const helmet = require("helmet"); 
const morgan = require("morgan");   

router.use(express.json());
router.use(helmet());
router.use(morgan("common"));

router.get('/', (req, res) => {
  res.send('Merhaba Dünya!')
});

router.listen(5050, () => { 
  console.log("Backend Server is running on port 5050");
}); 