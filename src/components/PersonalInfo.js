import React from 'react';

class PersonalInfo extends React.Component {
    next = e => {
        this.props.nextStep();
    }
    render() {
        const { handleChange, firstName, secondName, email, contactNumber } = this.props;

        return (
            <>
                <div className="form-container">

                    <div className="form-group">
                        <label htmlFor="name">First Name</label>
                        <input type="text" className="form-control" name="firstName" onChange={handleChange('firstName')} value={firstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Last Name</label>
                        <input type="text" className="form-control" name="secondName" onChange={handleChange('secondName')} value={secondName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Contact</label>
                        <input type="text" className="form-control" name="secondName" onChange={handleChange('contactNumber')} value={secondName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Email</label>
                        <input type="email" className="form-control" name="secondName" onChange={handleChange('email')} value={secondName} />
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-6">

                        </div>
                        <div className="col-6 text-right">
                            <button className="btn btn-primary" onClick={this.next}>Continue</button>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default PersonalInfo;