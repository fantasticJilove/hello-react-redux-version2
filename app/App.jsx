import React, { Component } from 'react';
import Result from './components/Result';
import Form from './components/Form';
//The name `Form` is not important you can name any thing 

class App extends React.Component {
    render() {
        return (
            <div>
                <Form/>
                <Result/>
            </div>
        );
    }
}

export default App;