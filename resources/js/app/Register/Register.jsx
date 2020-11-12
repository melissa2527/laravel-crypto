import React, {useState, useEffect} from 'react';


export default function Register() {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const allowed_names = ['name', 'email', 'password', 'password_confirmation'],
        name = event.target.name,
        value = event.target.value
        if (-1 !== allowed_names.indexOf(name)) {
          setValues(prev_values => {
            return ({
              ...prev_values,
              [name]: value
            }
            );
          });
        }
      }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const response = await fetch('/register', {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                'Accept' : 'application/json',  //tell Laravel (backend) what we want in response
                'Content-type' : 'application/json',  //tell backend what we are sending
                'X-CSRF-TOKEN' : document.querySelector('meta[name="csrf-token"]').getAttribute('content')  //prove to backend that this is authorized
            }
        })

        const response_data = await response_data.json();
        if (response_data.errors) {
            setErrors(response_data.errors);
        }
        console.log(response_data);
    }

    return (
        <form action="/register" className="register-form" method="post" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={handleChange} value={values.name} />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={handleChange} value={values.email}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handleChange} value={values.password} />
            </div>

            <div className="form-group">
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <input type="password" name="password_confirmation" onChange={handleChange} value={values.password_confirmation} />
            </div>

            <div className="form-group">
                <button>Register</button>
            </div>
           
        </form>
    )
}