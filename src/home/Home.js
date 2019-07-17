import React, { Component } from 'react';
import './Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, signOut } from '../actions';

function Home() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="Home">
            <div>
                <h3>News App with Redux</h3>
            </div>
            <div>
                <a href="/news">Vnexpress</a>
            </div>
            <div>Redux</div>
            <div>
                <p>Counter {counter}</p>
                <button onClick={() => dispatch(increment(5))}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <div>
                    <button onClick={() => dispatch(signIn())}>Sign In</button>
                    <button onClick={() => dispatch(signOut())}>Sign Out</button>
                </div>
                {
                    isLogged ? <h3>Valuable information I shoudn't see</h3> : ''
                }
            </div>
        </div>
    );
}

export default Home;
