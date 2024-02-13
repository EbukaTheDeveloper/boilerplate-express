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
    let response = ''
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        response = {"message": "HELLO JSON"};
    } else {
        response = {"message": "Hello json"}
    }
    res.json(response)
})




































 module.exports = app;
