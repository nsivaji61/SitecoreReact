import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;
global.__SERVER__ = true;

require('expose-loader?React!react');
require('expose-loader?ReactDOM!react-dom');
var Components = require('expose-loader?Components!./components');
// Expose components globally so ReactJS.NET can use them
