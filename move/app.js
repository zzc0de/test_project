const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/warehouse', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection;

app.post('/singup', (req, res) => {
    let deviceBrand = req.body.brand;
    let deviceModel = req.body.model;
    let deviceSerial = req.body.serial;
    let deviceInventory = req.body.inventory;
    let deviceUser = req.body.user;

    let deviceData = {
        'brand': deviceBrand,
        'model': deviceModel,
        'serial': deviceSerial,
        'inventory': deviceInventory,
        'user': deviceUser,
    }

    db.collection('devices').insertOne(deviceData, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log('Data was sended');
    });

    return res.redirect('/index.html');
})


app.get('/', (req, res) => {
    res.set({
        'Allow-access-Allow-Origin': '*'
    })
    return res.redirect('/index.html')
});




app.listen(3000, () => console.log('Server has been started'));