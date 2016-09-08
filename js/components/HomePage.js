import React from 'react';
import Links from './Links';

class HomePage extends React.Component {

    render() {

        return (
            <div className="homepage-wrapper">
                <div className="homepage-wrapper-inner">
                    <Links />
                    <div className="home-logo-wrap">
                        <img src="./assets/img/logo.png"/>
                    </div>
                    <div className="login-wrap">
                        <a className="login-button">Log In</a>
                    </div>
                </div>
            </div>
        )

    }
}

export default HomePage
