const express = require("express");
const app = express();
const helmet = require("helmet"); 
const morgan = require("morgan");   

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get('/', (req, res) => {
  res.send('Merhaba Dünya!')
});

app.listen(5050, () => { 
  console.log("Backend Server is running on port 5050");
}); 