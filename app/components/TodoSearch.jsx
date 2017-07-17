var React = require("react");

var TodoSearch = React.createClass({
    handelSearch: function () {
        var showCompleted = this.refs.showCompleted.checked;
        var searchtext = this.refs.searchText.value;
        this.props.onSearch(showCompleted, searchtext);
    },
    render: function () {
        return (
            <div>
                <div>
                    <input type="text" onChange={this.handelSearch} ref="searchText" placeholder="search todos"/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handelSearch}/>
                        show completed todos
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;