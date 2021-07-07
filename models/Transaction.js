const mongoose=require('mongoose');

const TransactionSchema=new mongoose.Schema({
text:{
    type:String,
    trim:true,
    required:[true,'Please enter some text'],
},
amount:{
    type:Number,
    required:[true,'Please enter positive or negative value']
},
date:{
    type:Date,
    default:Date.now()
}
});
module.exports=mongoose.model('Transaction',TransactionSchema);