import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

    render() {
        return(
            <div className="Home">
                <div>
                    <h3>News App with Redux</h3>
                </div>
                <div>
                    <a href="/news">Vnexpress</a>
                </div>
            </div>
        );
    }
}

export default Home;