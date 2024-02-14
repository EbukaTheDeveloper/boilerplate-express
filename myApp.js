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
    const messageStyle = process.env.MESSAGE_STYLE || 'normal';

    // Define the base message
    let message = 'Hello json';
  
    // Transform the message based on MESSAGE_STYLE
    if (messageStyle === 'uppercase') {
      message = message.toUpperCase();
    }
  
    // Send the response object
    res.json({ message });
  });





































 module.exports = app;
