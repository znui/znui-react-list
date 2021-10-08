require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var list = require('../../src/index');

znui.react.createApplication({
    render: <div>
        <list.List data={['a', 'b', 'c']} />
        <list.ListPager 
            data={{
                method: "POST",
                url: "http://127.0.0.1:8100/freeorder.merchant/crm.customer/paging"
            }} />
    </div>
});