import React from 'react';

class AllInfo extends React.Component {
    back = e => {
        this.props.prevStep();
    }
    render() {
        const { firstName, secondName , jobTitle, jobLocation, jobCompany } = this.props;

        return (
            <>
                <h2>Here is the information you entered:</h2>
                First Name: <b>{firstName}</b><br />
                Last Name: <b>{secondName}</b><br />
                Job: <b>{jobTitle}</b><br />
                Company: <b>{jobCompany}</b><br />
                Location: <b>{jobLocation}</b><br />
                <button className="Back" onClick={this.back}>
                     Back
                </button>
            </>
        );
    }
}

export default AllInfo;