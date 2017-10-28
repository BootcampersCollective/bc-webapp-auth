var express = require('express'),
   http = require('http'),
   passport = require('passport'),
   util = require('util'),
   LinkedInStrategy = require('passport-linkedin').Strategy;


   module.exports = {
       get: (req, res) => {
           console.log("HIT LINKED IN ROUTE");
       }
   }
