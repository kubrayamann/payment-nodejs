const express = require("express");
const router = express();
const helmet = require("helmet"); 
const morgan = require("morgan");   

router.use(express.json());
router.use(helmet());
router.use(morgan("common"));

router.get('/', (req, res) => {
  res.send('Hello World!')
});

router.get('/account', (req, res) => {
  res.send('Hello Account!')
});

router.get('/account/:id', (req, res) => {
  res.send('Hello Account Info!')
});

router.get('/account/:id', (req, res) => {
  res.send('Hello Payment!')
});

router.get('/payment', (req, res) => {
  res.send('Hello Payment!')
});

router.get('/deposit', (req, res) => {
  res.send('Hello Deposit!')
});

router.get('/withdraw', (req, res) => {
  res.send('Hello Withdraw!')
});

router.get('/accounting/:id', (req, res) => {
  res.send('Hello Transaction History!')
});

router.listen(5050, () => { 
  console.log("Backend Server is running on port 5050");
}); 