import React from "react";
import {Field, reduxForm} from "redux-form";


const Form = ({handleSubmit}) => {
    return (
        <form className="col-md-6 mr-auto ml-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="firstName ">First Name</label>
                <Field id="firstName" className="form-control" name="username" component="input" type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor="Password ">Password</label>
                <Field id="Password" className="form-control" name="password" component="input" type="password"/>
            </div>
            <div className="form-group">
                <label htmlFor="Password2 ">Password2</label>
                <Field id="Password2" className="form-control" name="password2" component="input" type="password"/>
            </div>
            <div className="form-group">
                <button className="btn btn-success">Register</button>
            </div>
        </form>

    )
}

const ReduxForm = reduxForm({
    form: 'register'
})(Form)


const onSubmit = (value) => {
    console.log(value)
}


const Register = () => {
    return (
        <div className="container jumbotron mt-5">
            <ReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Register;