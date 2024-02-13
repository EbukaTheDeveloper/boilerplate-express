let express = require('express');
let app = express();
const path = require('path');

const appPath = __dirname
const staticFolderPath = path.join(appPath, 'public');
console.log(staticFolderPath);
app.use(express.static(staticFolderPath));

app.get("/",(req,res) => {
    const absolutePath = path.join(appPath, 'views', 'index.html');
    res.sendFile(absolutePath);
})




































 module.exports = app;
