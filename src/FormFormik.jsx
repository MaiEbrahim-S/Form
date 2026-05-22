import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'


const FormFormik = () => {
    const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    country: '',
    terms: false
    }
    const validationSchema = Yup.object({
        firstName: Yup.string().max(20, 'First Name must be less than 20 characters').required('First Name is required'),
        lastName: Yup.string().max(20, 'Last Name must be less than 20 characters').required('Last Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
        gender: Yup.string().oneOf(['male', 'female'], 'Invalid gender').required('Gender is required'),
        country: Yup.string().required('Country is required'),
        terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
    })
    const countries = [
        { value: '', label: 'Select Country' },
        { value: 'usa', label: 'United States' },
        { value: 'canada', label: 'Canada' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'australia', label: 'Australia' },
        { value: "Egypt", label: "Egypt"}
    ]
    const handleSubmit = (values) =>{
        console.log(values)
    }
    return (
        <>
        <h2 className="form-title">Registration Form</h2>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
                {({isSubmitting}) => (
                    <Form style={{display: 'flex', flexDirection: 'column',backgroundColor: 'rgb(194 236 255)', padding: '50px', borderRadius: '5px',color:"black"}}>
                        <div className="form-group">
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <Field type="text" id="firstName" name="firstName" className="form-field"/>
                        <div className="error-message">
                            <ErrorMessage name="firstName" />
                        </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <Field type="text" id="lastName" name="lastName" className="form-field"/>
                        <div className="error-message">
                            <ErrorMessage name="lastName" />
                        </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <Field type="email" id="email" name="email" className="form-field"/> 
                        <div className="error-message">
                            <ErrorMessage name="email" />
                        </div>  
                        </div>
                        <div className="form-group">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <Field type="password" id="password" name="password" className="form-field" />
                        <div className="error-message">
                            <ErrorMessage name="password" />
                        </div>
                        </div>  
                        <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" className="form-field" />
                        <div className="error-message">
                            <ErrorMessage name="confirmPassword" />
                        </div>
                        </div>  
                        <div className="form-group">
                        <label htmlFor="gender" className="form-label">Gender:</label>
                        <label>
                        <Field type="radio" id="male" name="gender" value="male" className="form-field" />
                        Male
                        </label>
                        <label style={{marginLeft: '17px'}}>
                        <Field type="radio" id="female" name="gender" value="female" className="form-field" />
                        Female
                        </label>
                        
                        <div className="error-message">
                            <ErrorMessage name="gender" />
                        </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="country" className="form-label">Country:</label>
                        <Field as="select" id="country" name="country" className="form-field">
                            {countries.map((country) => (
                                <option key={country.value} value={country.value}>
                                    {country.label}
                                </option>
                            ))}
                        </Field>
                        <div className="error-message">
                            <ErrorMessage name="country" />
                        </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="terms" className="form-label">Terms and Conditions:</label>
                        <Field type="checkbox" id="terms" name="terms" className="form-field" />
                        <label style={{marginLeft: '10px'}} htmlFor="terms">
                            I agree to the terms and conditions
                        </label>
                        <div className="error-message">
                            <ErrorMessage name="terms" />
                        </div>
                        </div>
                        <div style={{marginTop: '20px'}}>
                        <button type="submit" disabled={isSubmitting} className="submit-btn">
                            {isSubmitting ? 'loading...' : 'Submit'}
                        </button>
                        </div>
                    </Form>
                )}
            
            </Formik>
        </>
    )
}
export default FormFormik