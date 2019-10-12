import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>thank you for Your Submission</h1>
                    <p>you will get an email with further instructions</p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default Success;