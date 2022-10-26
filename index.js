const { default: axios } = require('axios');
var express = require('express');
var app = express();
const cors = require('cors');
const { request } = require('express');

const port = process.env.PORT || 8080;

const corsoptions = {
    origin: ["*"],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
};

app.use(cors(corsoptions));



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



app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});

//https://pokemonapithingy.onrender.com/api/squirtle
//https://dashboard.render.com/web/srv-cdcerrg2i3msb944omug/deploys/dep-cdcers82i3msb944on6g
