const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    senderAccount: {
      type: Number,
      required: true,
      max: 20,
      unique: true,
    }, 
    receiverAccount: {
      type: Number,
      required: true,
      max: 20,
      unique: true,
    }, 
    amount: {
      type: Number,  
      required: true,  
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);