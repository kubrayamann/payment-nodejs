const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    accountNumber: {
      type: Number,
      required: true,
      max: 20,
      unique: true,
    },
    currencyCode: {
        type: String,
        enum: ["TRY", "USD", "EUR"],
    },
    accountType: {
        type: String, 
        enum: ["individual", "corporate"] ,
    },
    balance: {
        type: Number,   
        default: 0, 
        required: true,  
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", AccountSchema);