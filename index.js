const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());

app.get('/api', (req, res)=>{
    const user = req.query.user || "vishaljangid1729";
    console.log("request made")
    axios.get(`https://api.github.com/users/${user}`)
        .then(response =>{
            res.json({user: response.data});
        })
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static('client/buid'));
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    })
}

const PORT = process.env.PORT || 4000;
app.listen(PORT,()=> console.log(`Listen on port ${PORT}`) );

