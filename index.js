const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet"); 
const morgan = require("morgan");   
const accRoute = require("./routes/account");
const payRoute = require("./routes/payment");
const depRoute = require("./routes/deposit");
const witRoute = require("./routes/withdraw");
const aciRoute = require("./routes/accounting");

dotenv.config();
 
mongoose.connect(
    process.env.MONGO_URL, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch(err => {
        console.log("Error connecting to MongoDB", err);
});

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