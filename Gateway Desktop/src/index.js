var express = require('express');
var cors = require('cors');
var routes = require('./routes');

const app = express();
app.use(cors());
app.use(routes);

const serverApp = app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor Instanciado Gateway');
});