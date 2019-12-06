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
    res.sendfile(page.mainPage );
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
app.get('/authenViewer',(req,res)=>{
    res.sendfile(page.viewClient);
});

/**
 * GetMessage
 */

/**
 * PostMessage
 */
app.listen(8080, () => {
    console.log('loauclzdla');
});