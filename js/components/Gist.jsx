var Gist = React.createClass({

    render: function() {

        return (
            <h1>{this.props.username}'s' last Gist is <a href={this.props.url} target="_blank">here</a></h1>
        );
    }
});

// React.render(<Gist username="Leon" url="http://google.com"/>, document.getElementById('app'));