const express = require('express');
const app = express();

const port = 3000;
app.listen(3000, ()=> {
    console.log('listening is succesffull');
} );


app.get('/',(req,res)=> {
    console.log('Hello World');
    res.send('Hello....');
});
