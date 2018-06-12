const express = require('express')
var bodyParser = require('body-parser')

const app = express()
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.json())

let jsOb = {
    nm: 'android',
    ad: 78
}
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/app', (req, res) => res.send('You hit the app'))
app.get('/json', (req, res) => res.json(jsOb))

app.post('/flDt', (req, res) => {
    console.log(req.body.dt)
    res.json(req.body)
})

app.get('/rtPrm/:usId', (req, res) => {
    console.log(req.params.usId)
    res.json(req.params)
})

app.listen(
    3000,
    () => console.log('Example app listening on port 3000!')
)