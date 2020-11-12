import React, {useState, useEffect} from 'react';

export default function Register() {
    return (
        <form action="" className="register-form" method="post">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="text" value="" />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value="" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value="" />
            </div>

            <div className="form-group">
                <label htmlFor="password_confirmation">Password Confirmation</label>
                <input type="password" name="password_confirmation" value="" />
            </div>
        </form>
    )
}