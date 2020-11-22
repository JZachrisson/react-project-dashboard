import React from 'react';
import useForm from './signInHook';
import validate from './validate';

const SignInForm = () => {
  const { inputs, handleInputChange, handleSubmit, errors } = useForm(
    {
      email: '',
      password: '',
    },
    validate
  );

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign In</h5>
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
          <button type="submit" className="btn pink lighten-1 z-depth-0">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
