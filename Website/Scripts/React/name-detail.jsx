class NameDetail extends React.Component {
    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props;
        return (
            <form>
                <h3 className="breadcrumb">Name</h3>
                <hr />                
                <div className={`form-group
                    ${this.errorClass(values.formErrors.firstName)}`} >
                    <label>First Name</label>
                    <input className='form-control'
                        placeholder='First Name'
                        onChange={this.props.handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                </div>
                <div className={`form-group
                    ${this.errorClass(values.formErrors.lastName)}`}>
                    <label>Last Name</label>
                    <input className='form-control'
                        placeholder='Last Name'
                        onChange={this.props.handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                </div>
                <button onClick={this.saveAndContinue} className="btn btn-primary">Next > </button>
            </form>
        );
    }
}
