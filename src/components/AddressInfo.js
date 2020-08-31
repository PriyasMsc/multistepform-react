import React from 'react';

class AddressInfo extends React.Component {
    next = e => {
        this.props.nextStep();
    }
    back = e => {
        this.props.prevStep();
    }
    change = e =>{
        console.log('changed')
    }
    render() {
        const { handleChange, addressLine1, city, state, country, pinCode } = this.props;

        return (
            <>
                <div className="form-container">
                    <div class="row">
                        <div class="col-6">

                            <h5>Enter Current Address</h5>

                            <div className="form-group">
                                <label htmlFor="name">Address Line 1</label>
                                <textarea className="form-control" name="addressLine1" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">city</label>
                                <input type="text" className="form-control" name="secondName" onChange={handleChange('city')} value={city} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">State</label>
                                <input type="text" className="form-control" name="state" onChange={handleChange('state')} value={state} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Country</label>
                                <input type="text" className="form-control" name="country" onChange={handleChange('country')} value={country} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Pincode</label>
                                <input type="text" className="form-control" name="pinCode" onChange={handleChange('pinCode')} value={pinCode} />
                            </div>

                        </div>
                        <div class="col-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" onchange={this.change} id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                    Is Permanent Address same?  </label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Address Line 1</label>
                                <textarea className="form-control" name="addressLine1" rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">city</label>
                                <input type="text" className="form-control" name="secondName" onChange={handleChange('city')} value={city} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">State</label>
                                <input type="text" className="form-control" name="state" onChange={handleChange('state')} value={state} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Country</label>
                                <input type="text" className="form-control" name="country" onChange={handleChange('country')} value={country} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Pincode</label>
                                <input type="text" className="form-control" name="pinCode" onChange={handleChange('pinCode')} value={pinCode} />
                            </div>

                        </div>

                    </div>

                    <br />
                    <div className="row">
                        <div className="col-6">
                            <button className="btn btn-danger" onClick={this.back}>Back</button>
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

export default AddressInfo;