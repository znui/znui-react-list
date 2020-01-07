var React = znui.React || require('react');
var loader = require('znui-react-loader');

var ListView = React.createClass({
	displayName:'List',
	render: function(){
		return (
			<div {...this.props} className={znui.react.classname("zr-list-view", this.props.className)}>
				{this.props.children}
				<znui.react.DataViewer {...this.props} />
			</div>
		);
	}
});

ListView.Item = require('./ListViewItem');

module.exports = ListView;
