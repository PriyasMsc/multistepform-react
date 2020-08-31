import React from 'react';

class JobDetails extends React.Component {
    next = e => {
        this.props.nextStep();
    }
    back = e => {
        this.props.prevStep();
    }
    render() {
        const { handleChange, jobTitle, jobLocation, jobCompany } = this.props;

        return (
            <>
                <h2>Enter your Job information:</h2>
                <label>
                    <input
                        type="text"
                        name="jobTitle"
                        placeholder="Job title"
                        value = {jobTitle}
                        onChange={handleChange('jobTitle')}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="jobCompany"
                        placeholder="Job company"
                        value = {jobCompany}
                        onChange={handleChange('jobCompany')}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="jobLocation"
                        placeholder="Job Location"
                        value = {jobLocation}
                        onChange={handleChange('jobLocation')}
                    />
                </label>
                <button className="Back" onClick={this.back}>
                    Back
                </button>
                <button className="Next" onClick={this.next}>
                    Next
                </button>
            </>
        );
    }
}

export default JobDetails;