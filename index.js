const express = require("express");
const app = express();
const helmet = require("helmet"); 
const morgan = require("morgan");   
const accRoute = require("./routes/account");
const payRoute = require("./routes/payment");
const depRoute = require("./routes/deposit");
const witRoute = require("./routes/withdraw");
const aciRoute = require("./routes/accounting");

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use("/account", accRoute);
app.use("/payment", payRoute);
app.use("/deposit", depRoute);
app.use("/withdraw", witRoute);
app.use("/accounting", aciRoute);

app.listen(5050, () => { 
  console.log("Backend Server is running on port 5050");
}); 