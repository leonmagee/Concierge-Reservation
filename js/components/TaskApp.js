var TaskApp = React.createClass({

    getInitialState: function() {

        return {

            items: ['go to store', 'masturbate']
        };
    },
    render: function() {
        return (
            <div>
                <h1>My Tasks</h1>

                <TaskList items={this.state.items} />

                <form>



                </form>
            </div>
        );
    }
});

React.render(<TaskApp />, document.body);