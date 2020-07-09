import displayProjectForm from './displayProjectForm';
import projectHelpers from './projectHelpers';
import Project from '../../common/project';

const addNewProject = (e) => {
  e.preventDefault();

  const inputValues = [];
  const form = e.target;

  form.querySelectorAll('input').forEach((input) => {
    inputValues.push(input.value);
  });
  const newProject = Project.Project(...inputValues);
  projectHelpers.populateProjectList(newProject);
  form.reset();
  displayProjectForm.displayForm();
};

export default { addNewProject };