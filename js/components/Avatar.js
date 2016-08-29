
/**
 * If you render to 'document.body' it will replace the entire content of that element.
 */
var Avatar = React.createClass({

    getDefaultProps: function() {

        return {
            path: 'http://img.cinemablend.com/cb/9/b/c/2/6/b/9bc26bc32777d7ab7d88671c67a4f0a210e4fb8d3aa97e6cd5115d39139bffeb.jpg'
        };
    },

    render: function () {
        return (
            <div>
            <a href={this.props.path}>
        <img src={this.props.path} />
        </a>
        </div>
        )
    }
});

React.render(<Avatar />, document.body);

