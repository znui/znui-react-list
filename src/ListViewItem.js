var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'ZRListViewItem',
	getDefaultProps: function (){
		return {
			checked: false,
			disabled: false
		}
	},
	__onClick: function (event){
		this.props.onClick && this.props.onClick(event, this);
	},
	render: function(){
		return (
			<div style={this.props.style} className={znui.react.classname('zr-list-view-item', this.props.className)}
				data-checked={this.props.checked} 
				data-disabled={this.props.disabled} 
				onClick={this.__onClick}>
				{this.props.children}
			</div>
		);
	}
});