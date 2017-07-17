/**
 * Created by Ibrahim Ayman on 17/07/2017.
 */
var React = require("react");
var Todo = React.createClass({
        render: function () {
            var text = this.props;
            return (
                <div>
                    {text.id} - {text.text}
                </div>
            )
        }
    })
;
module.exports = Todo;
