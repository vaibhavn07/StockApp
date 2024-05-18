const express = require('express');
const userRoute = require('./routes/userRoutes')
require('dotenv').config();
const app = express();
const cors = require('cors')
app.use(cors('http://localhost:5173'));
const PORT = 3000 || process.env.PORT;

const arr = {
    "IBM":"IBM",
    "TCS":"TCS"
};
app.use(express.json())
app.use('/api/v1/user',userRoute);

app.get('/companies',(req,res)=>{
    return res.json(arr);
})
//LISTENING ON PORT 
app.listen(PORT,()=>{
    console.log(`Server Running On PORT ${PORT}`)
});