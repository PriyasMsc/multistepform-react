import React from "react";

import PersonalInfo from './PersonalInfo';
import JobDetails from './JobDetails';
import AllInfo from './AllInfo';

import AddressInfo from './AddressInfo';

class Main extends React.Component {
    state = {
        step: 1,

        // step 1
        firstName: '',
        secondName: '',
        contactNumber: '',
        email: '',

        // step 2
        addressLine1: '',
        city: '',
        state: '',
        country: '',
        pinCode: '',

        jobTitle: '',
        jobCompany: '',
        jobLocation: ''
    }

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });

    }

    prevStep = () => {
        const { step } = this.state;

        this.setState({
            step: step - 1
        });

    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    showStep = () => {
        const { step, firstName, secondName, contactNumber, email, addressLine1, city, state, country, pinCode, jobCompany, jobTitle, jobLocation } = this.state;
        if (step === 1)
            return (<PersonalInfo
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                firstName={firstName}
                secondName={secondName}
                contactNumber={contactNumber}
                email={email}
            />);
        if (step === 2)
            return (<AddressInfo
                handleChange={this.handleChange}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                addressLine1={addressLine1}
                city={city}
                state={state}
                country={country}
                pinCode={pinCode}
            />);
        if (step === 3)
            return (<AllInfo
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                firstName={firstName}
                secondName={secondName}
                jobTitle={jobTitle}
                jobCompany={jobCompany}
                jobLocation={jobLocation}
            />);

    }

    render() {
        const { step } = this.state;

        return (
            <>
                <h1>Step {step} of 3.</h1>
                {this.showStep()}
            </>
        );
    }
}

export default Main;