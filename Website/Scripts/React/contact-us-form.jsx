class MainForm extends React.Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        unit: '',
        city: '',
        province: 'ON',
        formErrors: {
            allRequired: '',
            firstName: '',
            lastName: '',
            email: '',
            street: '',
            unit: '',
            city: '',
            province: ''
        },
        allRequiredValid: false,
        firstNameValid: false,
        lastNameValid: false,
        streetValid: false,
        unitValid: false,
        cityValid: false,
        provinceValid: false,
        emailValid: false,
        formValid: false
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
    isFormValid = () => {
        return this.state.formValid;
    }
    handleChange = input => event => {
        this.validateField(input, event.target.value);
        //if (this.validateField(input, event.target.value)) {
        this.setState({ [input]: event.target.value });
        //}
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        //let allRequiredValid = this.state.allRequiredValid;
        let emailValid = this.state.emailValid;
        let firstNameValid = this.state.firstNameValid;
        let lastNameValid = this.state.lastNameValid;
        let streetValid = this.state.streetValid;
        let unitValid = this.state.unitValid;
        let cityValid = this.state.cityValid;
        let provinceValid = this.state.provinceValid;
        let isValid = true;
        if (value === "") {
            fieldValidationErrors.allRequired = "All fields except Unit/Apt are required.";
            isValid = false;
        }

        switch (fieldName) {
            case 'email':
                if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                    fieldValidationErrors.email = emailValid ? '' : 'Email must be in the correct format.';
                    isValid = false;
                }
                else {
                    emailValid = value.length <= 128;
                    fieldValidationErrors.email = emailValid ? '' : 'Email has a max of 128 characters.';
                    isValid = false;
                }
                break;
            case 'firstName':
                firstNameValid = value.length <= 40;
                fieldValidationErrors.firstName = firstNameValid ? '' : 'First Name has a max of 40 characters.';
                isValid = false;
                break;
            case 'unit':
                unitValid = value.length <= 40;
                fieldValidationErrors.unit = unitValid ? '' : 'Unit/Apt has a max of 128 characters.';
                isValid = false;
                break;
            case 'lastName':
                lastNameValid = value.length <= 40;
                fieldValidationErrors.lastName = lastNameValid ? '' : 'Last Name has a max of 40 characters.';
                isValid = false;
                break;
            case 'street':
                streetValid = value.length <= 128;
                fieldValidationErrors.street = streetValid ? '' : 'First Name has a max of 128 characters.';
                isValid = false;
                break;
            case 'city':
                cityValid = value.length <= 32;
                fieldValidationErrors.city = cityValid ? '' : 'City has a max of 32 characters.';
                isValid = false;
                break;
            case 'province':
                provinceValid = value.length <= 32;
                fieldValidationErrors.province = provinceValid ? '' : 'City has a max of 32 characters.';
                isValid = false;
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            firstNameValid: firstNameValid,
            lastNameValid: lastNameValid,
            streetValid: streetValid,
            unitValid: unitValid,
            cityValid: cityValid,
            provinceValid: provinceValid,
        }, this.validateForm);
        return isValid;
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.firstNameValid
                && this.state.lastNameValid && this.state.streetValid && this.state.unitValid && this.state.cityValid && this.state.provinceValid
        });
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, street, unit, city, province, formErrors, allRequiredValid, firstNameValid, lastNameValid, streetValid,
            unitValid, cityValid, provinceValid, emailValid, formValid } = this.state;
        const values = {
            firstName, lastName, email, street, unit, city, province, formErrors, allRequiredValid, firstNameValid, lastNameValid, streetValid,
            unitValid, cityValid, provinceValid, emailValid, formValid
        };
        switch (step) {
            case 1:
                return <div>
                    <div className='panel panel-default'>
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <NameDetail
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                </div>
            case 2:
                return <div>
                    <div className='panel panel-default'>
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <AddressDetail
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                </div>
            case 3:
                return <div>
                    <div className='panel panel-default'>
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <ContactDetail
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                </div>
            case 4:
                return <Success />
        }
    }
}