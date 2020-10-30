const express = require('express');
const cors = require('cors');
require('dotenv').config();

const ArtistRouter = require('./artists/routes.config');

const app = express();
const port = process.env.PORT || 3000;

console.log('log level:', process.env.LOG_LEVEL);

app.use(cors());
app.use(express.json());

ArtistRouter.routesConfig(app);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});