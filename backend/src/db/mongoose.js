const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:mongo@'+process.env.MONGODB_SERVICE_HOST+':27017/todoApp', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("connected to database");
}).catch(error => {
    console.log("unable to connect to database",error);
})
