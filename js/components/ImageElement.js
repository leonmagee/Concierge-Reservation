import React from 'react';
class ImageElement extends React.Component {
    render() {
        return (
            <img src={this.props.path}/>
        )
    }
}
export default ImageElement;
