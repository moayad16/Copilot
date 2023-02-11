const mongoose = require('mongoose');
require('dotenv').config();




const uri = `mongodb+srv://Copilot:${process.env.MONGO_PASS}@cluster0.zbdn0ly.mongodb.net/?retryWrites=true&w=majority`

const connectDatabase = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Database connected'))
        .catch(err => console.log(err));
}



module.exports = connectDatabase;
