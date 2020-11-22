import { useState } from 'react';

const CreateProject = () => {
  const [inputs, setInputs] = useState({ title: '', content: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
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
        <h5 className="grey-text text-darken-3">Create new project</h5>
        <div className="input-field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={inputs.title}
          />
        </div>
        <div className="input-field">
          <label>Project Content</label>
          <textarea
            name="content"
            onChange={handleInputChange}
            className="materialize-textarea"
          ></textarea>
        </div>
        <div className="input-field">
          <button type="submit" className="btn pink lighten-1 z-depth-0">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
