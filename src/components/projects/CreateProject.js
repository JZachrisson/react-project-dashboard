import { useState } from 'react';

const CreateProject = (initialValues, validate) => {
  const [inputs, setInputs] = useState(initialValues);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

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

export default CreateProject;
