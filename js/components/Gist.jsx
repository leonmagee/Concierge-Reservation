var Gist = React.createClass({

    render: function() {

        return (
            <h1>This is {this.props.name}'s Gist</h1>
        );
    }
});

React.render(<Gist name="Leon"/>, document.getElementById('app'));