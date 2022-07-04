const express = require('express');
const path = require('path');

const app = express();

//Route for the index page
//With every route, we will have access to the req and res objects
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, 'public', '/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
