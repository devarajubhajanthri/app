import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextFields from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextstep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextFields
                        hintText="Enter Your Firstname"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstname')}
                        defaultValue={values.firstname} />
                    <br />
                    <TextFields
                        hintText="Enter Your Lastname"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastname')}
                        defaultValue={values.lastname} />
                    <br />
                    <TextFields
                        hintText="Enter Your Email"
                        floatingLabelText="email"
                        onChange={handleChange('email')}
                        defaultValue={values.email} />
                    <br />
                    <RaisedButton
                        label="continue"
                        primary={true}
                        style={StyleSheet.button}
                        onClick={this.continue} />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {

}
export default FormUserDetails;