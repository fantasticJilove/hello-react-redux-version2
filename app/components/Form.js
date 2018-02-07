import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {setUserDob,setUserName,setUserEmail,setDataFetched} from '../actions/userAction';
import {connect} from 'react-redux';
// import { bindActionCreators } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event){
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let dob = document.getElementById("dob").value;

        this.props.setUserName(name);
        this.props.setUserEmail(email);
        this.props.setUserDob(dob);
        this.props.setDataFetched(true);
    }
    render() {
        return (
            <MuiThemeProvider>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextField id="name" hintText = "Enter your name" floatingLabelText="Name"/>
                    <br/>
                    <TextField id="email" hintText = "Enter your email" floatingLabelText="Email"/>
                    <br/><br/><br/>
                    <DatePicker id="dob" hintText="Date of Birth"/>
                    <br/>
                    <RaisedButton label="Submit" primary={true} type="Submit"/>
                </form>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        name: state.name,
        email: state.email,
        dob: state.dob,
        fetch: state.fetch,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // setUserName: bindActionCreators(setUserName, dispatch), 
        
        setUserName: (name) => {
            dispatch(setUserName(name))
        },
        setUserEmail: (email) =>{
            dispatch(setUserEmail(email))
        },
        setUserDob: (dob) =>{
            dispatch(setUserDob(dob))
        },
        setDataFetched: (fetched) =>{
            dispatch(setDataFetched(fetched))
        }

    }
  }

const AppConnect = connect(mapStateToProps, mapDispatchToProps)(Form);

export default AppConnect;