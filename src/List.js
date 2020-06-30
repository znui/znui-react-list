var React = znui.React || require('react');
module.exports = React.createClass({
	displayName:'ZRList',
	getDefaultProps: function (){
		return {
			className: "zr-list-style-flex-row",
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
	__initValue: function (){
		var _value = null;
		if(this.props.value !== null){
			_value = this.props.value;
		}else{
			if(this.props.selectMode == 'single'){
				_value = '';
			} else {
				_value = [];
			}
		}

		return _value;
	},
	parseValue: function (value){
		if(window[this.props.dataType]){
			return (new window[this.props.dataType](value)).valueOf();
		}
		
		throw new Error('Data Type Of List Is Null.');
	},
	__isChecked: function (item, index){
		var _value = item[this.props.valueKey];
		if(zn.is(this.state.value, 'array')){
			if(this.state.value.indexOf(_value) != -1){
				return true;
			}
		}else{
			if(_value === this.state.value){
				return true;
			}
		}

		return false;
	},
	__itemClick: function (event, index){
		var _return = this.props.onItemClick && this.props.onItemClick(event, this);
		if(_return == null) {
			this.__clickDefault(event);
		}
	},
	__clickDefault: function (event){
		var _data = event.data,
			_value = _data[this.props.valueKey];
		if(this.props.selectMode == 'single') {
			this.state.value = _value;
		} else if(zn.is(this.state.value, 'array')) {
			if(this.state.value.indexOf(_value) != -1){
				this.state.value.splice(this.state.value.indexOf(_value), 1);
			}else{
				this.state.value.push(_value);
			}
		}
		event.value = this.state.value;
		this.forceUpdate();
		this.props.onChange && this.props.onChange(event, this);
	},
	__itemRender: function (item, index){
		if(!zn.is(item, 'object')){
			var _temp = { index: index };
			_temp[this.props.textKey] = _temp[this.props.valueKey] = item;
			item = _temp;
		}else{
			item.index = index;
		}

		var _return = this.props.itemRender && this.props.itemRender(item, index);
		if(!_return && this.props.textKey) {
			if(this.props.textKey.indexOf('{')!=-1 && this.props.textKey.indexOf('}')!=-1){
				_return = this.props.textKey.format(item);
			}else{
				_return = item[this.props.textKey];
			}
		}
		return <li key={index} className={znui.react.classname('zr-list-item', (this.__isChecked(item, index)?'checked':''))} onClick={(event)=>{
					event.data = item;
					event.index = index;
					this.__itemClick(event, index)
				}}>
			{_return}
		</li>;
	},
	__dataRender: function (data){
		return (
			<ul style={this.props.style} className={znui.react.classname("zr-list", this.props.className)}>
				{this.props.children}
				{
					data.map(this.__itemRender)
				}
			</ul>
		);
	},
	render: function(){
		return (
			<znui.react.DataView {...this.props} dataRender={this.__dataRender} />
		);
	}
});