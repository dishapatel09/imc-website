class AddressDetail extends React.Component {
    state = {
        cities: []
    }
    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    componentWillMount() {
        this.setState({ cities: [] });
        //this.cities = [];
    }
    componentDidMount() {
        this.changeProvince(this.props.values.province);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.values.province !== this.props.values.province) {
            this.changeProvince(this.props.values.province);
        }
    }
    changeProvince = (province) => {
        if (province !== "") {
            fetch("https://imc-hiring-test.azurewebsites.net/contact/cities?province=" + province)
                .then(response => response.json())
                .then(
                    (response) => {
                        console.log(response);
                        if (response.Message === "All good!" && response.Items !== null && response.Items.length > 0) {
                            this.setState({
                                cities: response.Items
                            });
                        }
                    },
                    (error) => {
                        this.setState({ cities: [] });
                    }
                );
        }
        else {
            this.setState({ cities: [] });
        }

    }
    render() {
        const { values } = this.props;
        const provinces = [
            { name: "Ontario", value: "ON" },
            { name: "Quebec", value: "QC" },
            { name: "Nova Scotia", value: "NS" },
            { name: "New Brunswick", value: "NB" },
            { name: "Manitoba", value: "MB" },
            { name: "British Columbia", value: "BC" },
            { name: "Prince Edward Island", value: "PE" },
            { name: "Saskatchewan", value: "SK" },
            { name: "Alberta", value: "AB" },
            { name: "Newfoundland and Labrador", value: "NL" },
            { name: "Nunavut", value: "NU" },
            { name: "Northwest Territories", value: "NT" }

        ];
        return (
            <form>
                <h3 className="breadcrumb">Location</h3>
                <hr />
                <div className={`form-group
                    ${this.errorClass(values.formErrors.street)}`}>
                    <label>Street Address</label>
                    <input placeholder='street address' className='form-control'
                        onChange={this.props.handleChange('street')}
                        defaultValue={values.street}
                    />
                </div>
                <div className={`form-group
                    ${this.errorClass(values.formErrors.unit)}`}>
                    <label>Unit/Apt</label>
                    <input placeholder='unit/apt' className='form-control'
                        onChange={this.props.handleChange('unit')}
                        defaultValue={values.unit}
                    />
                </div>
                <div className={`form-group
                    ${this.errorClass(values.formErrors.province)}`}>
                    <label>Provice/Territory</label>
                    <select className='form-control' value={values.province} onChange={this.props.handleChange('province')}  >
                        {provinces.map((province) => <option key={province.value} value={province.value}>{province.name}</option>)}
                    </select>
                </div>
                <div className={`form-group
                    ${this.errorClass(values.formErrors.city)}`}>
                    <label>City</label>
                    <select className='form-control' value={values.city} onChange={this.props.handleChange('city')} >
                        {this.state.cities.map((city) => <option key={city} value={city}>{city}</option>)}
                    </select>
                </div>
                <button onClick={this.back} className="btn btn-primary" > &#60; Back</button>&nbsp;&nbsp;&nbsp;
                <button onClick={this.saveAndContinue} className="btn btn-primary">Next &#62; </button>
            </form>
        );
    }
}