const  express = require('express');
const fs = require('fs');

const app = express();
const filePath = 'devices.json'
const jsonParser = express.json()

app.use(express.static(__dirname + '/public'));

// загружаем все девайсы
app.get('/api/devices', (req, res) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let devices = JSON.parse(content);
    res.send(devices);
});
// получаем один девайс
app.get('/api/devices/:id', (req, res) => {
    let id = req.params.id;
    let content = fs.readFileSync(filePath, 'utf8');
    let devices = JSON.parse(content);
    let device = null;

    for (let i = 0; i < devices.length; i++) {
        if(devices[i].id === id) {
            device = devices[i];
            break;
        }
    }
    if (device) {
        res.send(device);
    } else {
        res.status(404).send();
    }
});
// добавлем пользователя

app.post('/api/devices', jsonParser, (req, res) => {
    if (!req.body) res.sendStatus(400);

    let deviceBrand = req.params.brand;
    let deviceModel = req.params.model;
    let deviceSerial = req.params.serial;
    let device = {brand: deviceBrand, model: deviceModel, serial: deviceSerial};

    let data = fs.readFileSync(filePath, 'utf8');
    let devices = JSON.parse(data);

    let id = Math.max(devices.map((device) => device.id));
    if (Number.isFinite(id)) {
        device.id = id + 1;
    } else {
        device.id = 1;
    }

    devices.push(device);
    data = JSON.stringify(devices);
    fs.writeFileSync(filePath, data);
    res.send(device);
})

app.listen(3000, () => console.log('Server has been started'));