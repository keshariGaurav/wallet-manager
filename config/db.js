const mongoose=require('mongoose');
const connectDB=async ()=>{
    try{
     const db=await  mongoose.connect(process.env.DB,{
            useCreateIndex:true,
            useFindAndModify:true,
            useUnifiedTopology:true
        });
        console.log(`Database connected with host ${db.connection.host}`.yellow.underline.bold);
    }catch(err)
    {
        console.log(`Error:${err.message}`.red.bold);
    }
    
}
module.exports=connectDB;