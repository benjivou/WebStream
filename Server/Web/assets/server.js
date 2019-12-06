var io = require('socket.io');
var express = require('express');
var page = require('./constPage');
var app = express();
var generator = require('generate-password');
/**
 * Web Pages
 */
/*
    Choice Page
 */
app.get('/',(req,res)=>{
    res.sendfile(page.mainPage);
});

/*
    StreamPage Authentification
 */
app.get('/authenStreamer',(req,res)=>{
    res.sendfile(page.authStream);
});

/*
    StreamPage message
 */
app.get('/viewStreamer',(req,res)=>{
    res.sendfile(page.viewStream);
});
/*
    ClientPage Authentification
 */
app.get('/authenViewer',(req,res)=>{
    res.sendfile(page.authViewer);
});
/*
    ClientPage Stream
 */
app.get('/viewClient',(req,res)=>{
    res.sendfile(page.viewClient);

});

/**
 * GetMessage
 */
/*
get Stremear
 */

app.get('/stream/:twitchSession',(req,res)=>{
    var key = generator.generate({
        length: 10,
        numbers: true
    });
    // U get the session
    this.listSessions.append([request.route.query.twitchSession,key]);
    res.sendfile(page.viewClient);

});

app.listSessions = [];

/**
 * PostMessage
 */
app.listen(8080, () => {
    console.log('loauclzdla');
});