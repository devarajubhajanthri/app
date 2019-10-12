import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextstep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevstep();
    }
    render() {
        const { values: { firstname, lastname, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Details" />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={ firstname } />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={ lastname } />
                        <ListItem
                            primaryText="Email"
                            secondaryText={ email } />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={ occupation } />
                        <ListItem
                            primaryText="City"
                            secondaryText={ city } />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={ bio } />                                                    
                    </List>
                    <RaisedButton
                        label="Confirm &continue"
                        primary={true}
                        onClick={this.continue} />
                    <RaisedButton
                        label="back"
                        primary={false}
                        onClick={this.back } />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Confirm;