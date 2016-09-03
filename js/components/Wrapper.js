import React from 'react';
//import ReactDOM from 'react-dom';
import ImageElement from './ImageElement'
import InputElement from './InputElement'

class Wrapper extends React.Component {

    render() {

        return (
            <div>
                <ImageElement path="./assets/img/logo.png" />
                <br />
                <InputElement type="text" ph="Input 1" />
                <br />
                <br />
                <InputElement type="text" ph="Input 2" />
            </div>
        )
    }
}

export default Wrapper;