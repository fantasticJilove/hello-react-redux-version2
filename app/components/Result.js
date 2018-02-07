import React, { Component } from 'react';
import store from '../../store';

class Result extends React.Component { 
    constructor(props) {
        super(props);

        // we will update local component state and force component to rerender 
        store.subscribe(() => { 
          this.setState({});
        });
      };
    render() {
        return (
            <div>
                <div>{store.getState().name}</div>
                <div>{store.getState().email}</div>
                <div>{store.getState().dob}</div>
            </div>
        );
    }
}

export default Result;