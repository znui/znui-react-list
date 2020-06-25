var React = znui.React || require('react');
var ListView = React.createClass({
	displayName:'ZRListView',
	getDefaultProps: function (){
		return {
			selectMode: 'single', // single, multiple,
			textKey: 'text',
			valueKey: 'value',
			dataType: 'String'
		};
	},
	getInitialState: function(){
		return {
			value: null
		};
	},
	render: function(){
		return (
			<div className={znui.react.classname("zr-list-view", this.props.className)} style={this.props.style}>
				<znui.react.DataView {...this.props} />
			</div>
		);
	}
});

ListView.Item = require('./ListViewItem');

module.exports = ListView;
