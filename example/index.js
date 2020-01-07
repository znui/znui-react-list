var React = require('react');
var ReactDOM = require('react-dom');
var list = require('../src/index.js');
require('../src/index.less');
require('./index.less');


ReactDOM.render(
    <div>
        <list.List data={['a', 'b', 'c']} />
    </div>,
    document.getElementById('container'),
);
