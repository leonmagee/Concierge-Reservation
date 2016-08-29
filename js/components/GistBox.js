import Gist from './Gist';
import GistAddForm from './GistAddForm';

var GistBox = React.createClass({

    getInitialState() {

        return {
            gists: []
            //gists: [{username: 'leonmagee', url: 'http://google.com'}]
        };
    },

    addGist: function (username) {
        // ajax call
        var url = `https://api.github.com/users/${username}/gists`;
        $.get(url, function (result) {

            var username = result[0].owner.login;
            var url = result[0].html_url;
            var gists = this.state.gists.concat({username, url});
            this.setState({gists});
            console.log(this);
        }.bind(this));
    },

    render: function () {

        var newGist = function (gist) {

            return <Gist username={gist.username} url={gist.url}/>
        };

        return (
            <div>
                <h1>GistBox</h1>

                <GistAddForm onAdd={this.addGist}/>

                { this.state.gists.map(newGist)}

            </div>
        );
    }
});

export default GistBox;
