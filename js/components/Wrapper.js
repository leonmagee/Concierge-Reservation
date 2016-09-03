import React from 'react';
//import ReactDOM from 'react-dom';
import ImageElement from './ImageElement'

class Wrapper extends React.Component {

    render() {

        return (
            <div>
                <ImageElement path="./assets/img/logo.png" />
            </div>
        )
    }
}

export default Wrapper;