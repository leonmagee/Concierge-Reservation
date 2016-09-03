import React from 'react';
class InputElement extends React.Component {
    render() {
        return (
            // <img src={this.props.path} />
            <input type={this.props.type} placeholder={this.props.ph} />
        )
    }
}

export default InputElement;
