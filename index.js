const express = require('express'), //Alows to repspond to HTTP requests, defines routing and renders the required content
    fs = require('fs'), //Working with the file system (read and write)
    http = require('http'), //HTTP Server
    path = require('path'), //Utility that allows us to work with directory paths
    xml2js = require('xml2js'),//This is XML <-> JSON converter
    xmlParse = require('xslt-processor').xmlParse, //Parsing XML
    xsltProcess = require('xslt-processor').xsltProcess; //Processing XSLT

const router = express();
server = http.createServer(router);
router.use(express.static(path.resolve(_dirname,'views'))); //Serving static content from "views" folder
