class ContactDetail extends React.Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        debugger;
        //if (this.props.values.formValid) {

            $.ajax({
                url: "https://imc-hiring-test.azurewebsites.net/contact/save",
                dataType: 'json',
                type: "POST",
                data: {
                    Name: this.props.values.firstName + ' ' + this.props.values.lastName,
                    Address: this.props.values.street,
                    Address2: '',
                    City: this.props.values.city,
                    Province: this.props.values.province,
                    Email: this.props.values.email
                },
                cache: false,
                success: function (data) {
                    debugger;
                    this.props.nextStep();
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error("https://imc-hiring-test.azurewebsites.net/contact/save", status, err.toString());
                }.bind(this)
            });
        //}
    }
    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return (
            <form>
                <h3 className="breadcrumb">Contact</h3>
                <hr />
                <div className={`form-group
                    ${this.errorClass(values.formErrors.email)}`}>
                    <label>Email</label>
                    <input placeholder='email' className='form-control'
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                    />
                </div>
                <button onClick={this.back} className="btn btn-primary" > &#60; Back</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.saveAndContinue} className="btn btn-primary">Submit</button>
            </form>
        );
    }
}