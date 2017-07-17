var React = require("react");

var AddTodo = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            alert(this.refs.todoText.value);
            this.refs.todoText.value = '';
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                <input type="button" value="add new" className="button" onClick={this.handleSubmit} />
            </div>
        );
    }
});

module.exports = AddTodo;