const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const cors = require('cors')

const app = express();
app.use(cors());
const api = require('./routes/api');

app.use(bodyParser.json());
app.use('/api', api);
//app.use('/', require('./routes/api'));


app.get('/', (req, res) => {
    console.log(`Server On`);
    res.send(`Landing Page / Server On!!`)
})
app.listen(PORT, (req, res) => {
    console.log(`Server started at ${PORT}`);
})