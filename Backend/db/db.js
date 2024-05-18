const mongoose = require('mongoose');
require('dotenv').config(); 

const URI  = "mongodb://127.0.0.1:27017/STOCKWEBAPP?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1";
mongoose.connect(URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("DB connected");
})
.catch((e)=>{
    console.log("ERROR OCCURED",e);
});
