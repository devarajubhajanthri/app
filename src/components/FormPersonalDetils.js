import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextFields from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextstep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevstep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextFields
                        hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation} />
                    <br />
                    <TextFields
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city} />
                    <br />
                    <TextFields
                        hintText="Enter Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio} />
                    <br />
                    <RaisedButton
                        label="continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue} />

                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back} />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {

}
export default FormPersonalDetails;