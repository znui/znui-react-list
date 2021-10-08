var React = znui.React || require('react');
var pager = require('znui-react-pager');

module.exports = React.createClass({
	displayName:'ZRListPager',
	getDefaultProps: function (){
		return {
			pageSize: 10,
			textKey: 'Name'
		};
	},
	getInitialState: function (){
		return {
			count: 0,
			current: 1,
			data: null,
			total: 0,
			pageIndex: this.props.pageIndex || 1
		};
	},
	setPageIndex: function (pageIndex){
		if(this.data){
			this.state.pageIndex = pageIndex;
			this.state.current = pageIndex;
			this.forceUpdate();
			this.data._argv = this.__onDataInitial(this.props.data);
			this.data.refresh();
		}
	},
	refresh: function (){
		if(this.data){
			this.data.refresh();
		}
	},
	__handlePageChanged: function (newPage){
		var _return = this.props.onPageChanged && this.props.onPageChanged(newPage, this);
		if(_return !== false) {
			this.setPageIndex(newPage);
		}
	},
	__onDataInitial: function (data){
		var _method = data.method||'post',
			_params = {},
			_keyMaps = zn.deepAssign({
				total: "total",
				pageIndex: 'pageIndex',
				pageSize: 'pageSize',
				data: 'data'
			}, this.props.keyMaps);

		_params[_keyMaps.pageIndex] = this.state.pageIndex || 1;
		_params[_keyMaps.pageSize] = this.props.pageSize || 10;
		if(_method == 'get'){
			data = zn.deepAssign(data, {
				params: _params
			});
		}else{
			data = zn.deepAssign(data, {
				data: _params
			});
		}
		
		return this.state.keyMaps = _keyMaps, data;
	},
	__onLoadFinished: function (data){
		if(this.props.zxnz !== false){
			if(zn.is(data, 'object') && data.code != 200){
				return console.error(data.detail), false;
			}
			if(!zn.is(data, 'array')){
				return console.error("TablePager Component Data Type Error."), false;
			}
			var _data = data[0],
				_pagerCount = data[1][0].count;
			var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, this);
			if(_return === false){
				return false;
			}

			this.setState({
				data: _data,
				total: Math.ceil(_pagerCount/this.props.pageSize),
				count: _pagerCount,
				current: this.state.current,
			});
		}else{
			if(zn.is(data, 'array')){
				return console.error('The data is array, but it need return object'), false;
			}
			var _data = data.data;
			var _return = this.props.onDataLoaded && this.props.onDataLoaded(_data, this);
			if(_return === false){
				return false;
			}

			this.setState({
				data: _data[this.state.keyMaps.data],
				total: Math.ceil(_data[this.state.keyMaps.total]/this.props.pageSize),
				count: _data[this.state.keyMaps.total],
				current: _data[this.state.keyMaps.pageIndex],
			});
		}
	},
	__renderPager: function (){
		if(!this.state.data || !this.state.data.length){
			return null;
		}
		var _state = this.state,
			_element = null,
			_pagerProps = {
				total: _state.total,
				count: _state.count,
				current: _state.current,
				onPageChanged: this.__handlePageChanged
			},
			_Component = this.props.pager || pager.Pager;
		if(zn.is(_Component, 'string')){
			_Component = zn.path(window, _Component);
		}else if(zn.is(_Component, 'object') && _Component.component){
			_element = znui.react.createReactElement(_Component.component, zn.extend({}, _Component, _pagerProps), this.props.context);
		}

		if(this.props.pagerRender){
			_element = znui.react.createReactElement(this.props.pagerRender, _pagerProps, this.props.context);
		}

		if(!_element && _Component && zn.is(_Component, 'function')){
		 	_element = <_Component {..._pagerProps} />;
		}

		return (
			<div className="list-pager">{_element}</div>
		);
	},
	__onItemClick: function (event, item, index){
		this.props.onItemClick && this.props.onItemClick(event, item, index);
	},
	__renderItem: function (item, index){
		item.index = index;
		var _element = znui.react.createReactElement(this.props.itemRender, {
			data: item,
			
		}, this.props.context);
		if(!_element){
			_element = (
				<li key={index} onClick={(event)=>this.__onItemClick(event, item, index)} className="list-item">
					{item[this.props.textKey]}
				</li>
			);
		}

		return _element;
	},
	__render: function (data){
		if(!this.state.data){
			return <div className="no-data">
				<i className="fa fa-spinner" />
				<span>加载中...</span>
			</div>;
		}
		if(this.state.data.length) {
			var _element = znui.react.createReactElement(this.props.dataRender, {
				data: this.state.data,
				listPager: this
			}, this.props.context);
			if(!_element){
				_element = (
					<ul className="list-data">
						{
							this.state.data.map(this.__renderItem)
						}
					</ul>
				);
			}

			return _element;
		}else{
			return <div className="no-data">
				<i className="fa fa-desktop" />
				<span>暂无数据</span>
			</div>;
		}
	},
	__onDataCreated: function (data, lifecycle){
		this.data = data;
		this.props.onDataCreated && this.props.onDataCreated(data, this, lifecycle);
	},
	render: function(){
		return (
			<div className={znui.react.classname('zr-list-pager', this.props.className)} style={this.props.style} >
				<znui.react.DataLifecycle
					data={this.__onDataInitial(this.props.data)}
					dataRender={this.__render}
					loadingEnabled={this.props.loadingEnabled||false}
					onFinished={this.__onLoadFinished}
					onDataCreated={this.__onDataCreated}
					responseHandler={this.props.responseHandler}
					onLoading={this.props.onLoading}
					onError={this.props.onLoadError} />
				{this.__renderPager()}
			</div>
		);
	}
});