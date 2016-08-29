var GistAddForm = React.createClass({

    getInitialState() {

        return {
            text: ''
        }
    },

    onChange: function (e) {

        this.setState({text: e.target.value});
    },

    addGist: function (e) {
        e.preventDefault();
        console.log('working here');
        this.props.onAdd(this.state.text);
        this.setState({text: ''});

    },

    render: function () {

        return (
            <div>
                <form onSubmit={this.addGist}>
                    <input value={this.state.text } onChange={this.onChange} placeholder="Type a Github Username..."/>
                    <button>Fetch Latest Gist</button>
                </form>
            </div>
        );
    }
});

export default GistAddForm;

