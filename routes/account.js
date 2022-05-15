const router = require("express").Router();
const Account = require("../models/Account");

  //Create Acoount
  router.post('/', async (req, res) => { 
    try{
      const newAccount = new Account({
        ownerName: req.body.ownerName,
        accountNumber: req.body.accountNumber,
        currencyCode: req.body.currencyCode,
        accountType: req.body.accountType,
        balance: req.body.balance,
      });
      const accountCheck = await Account.findOne({accountNumber: req.body.accountNumber});
      if(accountCheck){
        res.status(500).json("Account already exists");
      }else{
        const account = await newAccount.save();
        res.status(200).json(account);
      }
    }catch(err){
      res.status(500).json(err);
    }
  }); 
  //Get Accounts
  router.get('/:accountNumber', async (req, res) => {
    try{
      const account = await Account.findOne({accountNumber: req.params.accountNumber});
      if(account){
        const {_id,__v,updatedAt,createdAt, ...other} = account.toObject();
        res.status(200).json(other);
      }
    }catch(err){
      res.status(500).json(err);
    }
  }); 
  

module.exports = router;