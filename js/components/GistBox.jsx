var GistBox = React.createClass({

    getInitialState() {

        return {
            gists: [{username: 'Jeffery', url: 'http://bing.com'}]
        };
    },

    render: function () {

        var newGist = function (gist) {

            return <Gist username={gist.username} url={gist.url} />
        };

        return (
            <div>
                <h1>GistBox</h1>

                { this.state.gists.map(newGist)}

            </div>
        );
    }
});

React.render(<GistBox />, document.querySelector('#app'));
