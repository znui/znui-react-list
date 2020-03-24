require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var list = require('../../src/index');

znui.react.createApplication({
    render: <div>
        <list.List data={['a', 'b', 'c']} />
    </div>
});