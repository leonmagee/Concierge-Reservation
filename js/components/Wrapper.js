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
                <InputElement type="text" ph="Input 7" />
                <br />
                <br />
                <InputElement type="text" ph="Input 10" />
            </div>
        )
    }
}

export default Wrapper;