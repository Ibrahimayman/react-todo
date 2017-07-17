var React = require("react");
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");
var uuid = require("node-uuid");

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchtext: '',
            todos: [
                {
                    id: uuid(),
                    text: "walk the dog"
                },
                {
                    id: uuid(),
                    text: "clean the yard"
                },
                {
                    id: uuid(),
                    text: "go to bed"
                }
            ]
        };
    },
    handelSearch: function (showCompleted, searchtext) {
        this.setState({
            showCompleted: showCompleted,
            searchtext: searchtext.toLowerCase()
        });
    },
    handelAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos, // get the old values and add newer
                {
                    id: uuid(),
                    text: text
                }
            ]
        });
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <TodoSearch onSearch={this.handelSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handelAddTodo}/>
            </div>
        )
    }
});

module.exports = TodoApp;
