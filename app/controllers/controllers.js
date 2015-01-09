/**
 * @file Provides a `setup`-function, that will set up all controllers, i.e. all
 * files that reside in the same directory as this file, that end in `".js"`.
 * 
 * @namespace controllers
 */
"use strict";

var fs = require( "fs" );
var path = require( "path" );
require( "colors" );

require( "string.prototype.endswith" );

var files = fs.readdirSync( __dirname );

files.filter( function(file) {
    return file.endsWith(".js") && file !== path.basename( __filename );
} ).forEach( function( file ) {

    console.log( "Setting up controller", file.green );
    var controller = require( "./" + file );
    var name = file.substring( 0, file.length - path.extname(file).length );

    module.exports[name] = controller;
} );
