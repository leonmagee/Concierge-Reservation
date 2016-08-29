var TaskApp = React.createClass({

    getInitialState: function () {

        return {

            items: [],
            task: ''
        };
    },
    addTask: function(e) {

        this.setState({
            items: this.state.items.concat([this.state.task]),
            task: ''
            //items: this.state.items.concat(this.state.task) // this works too???
        });

        e.preventDefault();
    },
    onChange: function(e) {
        this.setState({ task: e.target.value })
        //console.log(this.state.items);
    },
    onDelete: function(e) {
        
    },
    render: function () {
        return (
            <div className="react-wrapper-class">
                <h1>My Tasks</h1>

                <TaskList items={this.state.items}/>

                <form onSubmit={this.addTask}>
                    <input onChange={this.onChange} value={this.state.task} />
                    <button>Add Task</button>
                </form>
            </div>
        );
    }
});

React.render(
    <TaskApp />
    , document.body);