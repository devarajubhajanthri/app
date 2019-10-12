import React, { Component } from 'react';
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetils";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
    state = {
        step: 1,
        firstname: "",
        lastname: "",
        email: "",
        occupation: "",
        city: "",
        bio: ""
    }

    //proceed to next step  
    nextstep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    //proceed to previous step
    prevstep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    //handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
    render() {
        const { step } = this.state;
        const { firstname, lastname, email, occupation, city, bio, } = this.state;
        const values = { firstname, lastname, email, occupation, city, bio }

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextstep={this.nextstep}
                        handleChange={this.handleChange}
                        values={values} />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextstep={this.nextstep}
                        prevstep={this.prevstep}
                        handleChange={this.handleChange}
                        values={values} />
                )
            case 3:
                return (
                    <Confirm
                        nextstep={this.nextstep}
                        prevstep={this.prevstep}
                        values={values} />
                )
            case 4:
                return <Success/>
        }
    }
}

export default UserForm;