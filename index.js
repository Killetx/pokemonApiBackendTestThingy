console.log("e");
const { default: axios } = require('axios');
var express = require('express');
var app = express();
app.get('/', (req, res) => {

    res.send("e");
    

});
app.get('/api/:id', (req, res) => {
    const id = req.params.id;

    
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => {
        console.log('Success!\n', data);    
        res.send(`<img height="100%" src="${data.data.sprites.front_default}" />`);
        
    }).catch(er => {
        res.send(er);
    });


});









app.listen(3000);
