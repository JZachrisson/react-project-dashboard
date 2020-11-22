import React from 'react';
import useForm from './signInHook';
import validate from './validate';

const SignUpForm = () => {
  const { inputs, handleInputChange, handleSubmit, errors } = useForm(
    {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
    },
    validate
  );

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
          />
        </div>
        {errors.email && <p>{errors.email}</p>}
        <div className="input-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={inputs.password}
          />
        </div>
        {errors.password && <p>{errors.password}</p>}
        <div className="input-field">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={inputs.firstName}
          />
        </div>
        <div className="input-field">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={inputs.lastName}
          />
        </div>
        <div className="input-field">
          <button type="submit" className="btn pink lighten-1 z-depth-0">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
