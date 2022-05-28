const router = require("express").Router();
const Payment = require("../models/Payment");
const Account = require("../models/Account");

  //Create Payment
  router.post('/', async (req, res) => { 
    try{
      const saac = req.body.senderAccount;
      const rac = req.body.receiverAccount;
      const ant = req.body.amount;

      const newPayment = new Payment({
        senderAccount: saac,
        receiverAccount: rac,
        amount: ant, 
      });

      const sCheck = await Account.findOne({accountNumber: saac});
      const rCheck = await Account.findOne({accountNumber: rac});

      if(!sCheck || !rCheck){
        res.status(500).json("Account does not exist");
      }else{
          const bFind = await Account.findOne({accountNumber: saac});
          if(bFind){
            const accBalance = bFind.balance; 
            //ant = 10
            //accBalance = 50
            if(accBalance >= ant){
                
                const payment = await newPayment.save();
                const update = await Account.findOneAndUpdate({accountNumber: saac}, {balance: a});
                res.status(200).json(payment);
            }
            else{
              res.status(500).json(b);
            }
          }else{
            res.status(500).json("Account does not exist");
          }
        
      }
    }catch(err){
      res.status(500).json(err);
    }
  }); 

module.exports = router;