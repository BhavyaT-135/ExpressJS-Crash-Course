const express = require('express');

const app = express();

//Route for the index page
//With every route, we will have access to the req and res objects
app.get('/', function(req,res){
    res.send('<h1>Hello World</h1>');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
