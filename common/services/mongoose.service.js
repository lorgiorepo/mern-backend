const mongoose = require('mongoose');
require('dotenv').config();

console.log('process.env.MONGODB_URI: ', process.env.MONGODB_URI);
const uri = process.env.MONGODB_URI || "mongodb://rokket:rokket2020@ds053300.mlab.com:53300/heroku_app31438493";

if (!uri) {
    throw new Error('MONGODB_URI is required')
}

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

exports.mongoose = mongoose;