let express = require('express');
let app = express();
const path = require('path');
require('dotenv').config();

const appPath = __dirname
const staticFolderPath = appPath + '/public';

app.use('/public', express.static(staticFolderPath));

app.get('/',(req,res) => {
    const absolutePath = path.join(appPath, 'views', 'index.html');
    res.sendFile(absolutePath);
});

app.get('/json',(req,res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({"message": "HELLO JSON"})
    } else {
        res.json({"message": "Hello json"})
    }

})




































 module.exports = app;
