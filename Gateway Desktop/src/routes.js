var express = require('express');
var httpProxy = require ('express-http-proxy');
var urlStatusCode = require('url-status-code');

const router = express.Router();

const servers = [
    {uri: process.env.AUTH, 'resource': '/auth', name: 'Autenticação'},
    {uri: 'http://www.lucasfreitas.com.br', 'resource': '/', name: 'PortalLucas'}
];


servers.map((server => {
    urlStatusCode(server.uri, (error, urlStatusCode) => {
        if(error) {
            console.error(`Servidor ${server.name} está fora do ar`);
        }
    });
    
    router.use(server.resource, httpProxy(server.uri, {
        proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
            return proxyReqOpts;
        }
    }));
}))

module.exports = router;