import { useState } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

const CreateProject = ({ auth, createProject }) => {
  const [inputs, setInputs] = useState({ title: '', content: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    createProject(inputs);
  };

  const handleInputChange = (event) => {
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
