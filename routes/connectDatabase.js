const mongoose = require('mongoose');
require('dotenv').config();


// const connectDatabase = () => {
//     mongoose.connect('mongodb://localhost:27017/express-mongoose', { useNewUrlParser: true, useUnifiedTopology: true })
//         .then(() => console.log('Database connected'))
//         .catch(err => console.log(err));
// }


mongoPass = process.env.MONGO_PASS


const uri = `mongodb+srv://Copilot:${mongoPass}@cluster0.zbdn0ly.mongodb.net/?retryWrites=true&w=majority`

const connectDatabase = () => {
    mongoose.set("strictQuery", true);
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Database connected'))
        .catch(err => console.log(err));
}



module.exports = connectDatabase;
