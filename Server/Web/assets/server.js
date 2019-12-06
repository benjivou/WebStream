var io = require('socket.io');
var express = require('express');

var app = express();

/**
 * Web Pages
 */
/*
    Choice Page
 */
app.get('/',(req,res)=>{
    res.sendfile('./public/index.html');
});

/*
    StreamPage Authentification
 */
app.get('/',(req,res)=>{
    res.sendfile('./public/index.html');
});

/*
    StreamPage message
 */

/*
    ClientPage Authentification
 */

/*
    ClientPage Stream
 */


/**
 * GetMessage
 */

/**
 * PostMessage
 */
app.listen(8080, () => {
    console.log('loauclzdla');
});