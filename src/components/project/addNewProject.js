import displayProjectForm from './displayProjectForm';
import projectHelpers from './projectHelpers';
import Project from '../../common/project';
import validate from '../../common/validations';

const addNewProject = (e) => {
  e.preventDefault();

  const inputValues = [];
  const form = e.target;
  let validateFlag = true;
  form.querySelectorAll('input').forEach((input) => {
    validateFlag = validate.empty(input);
    if (validateFlag === false) {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
    } else {
      input.classList.add('is-valid');
      input.classList.remove('is-invalid');
    }
    inputValues.push(input.value);
  });
  if (validateFlag === false) return;
  form.querySelectorAll('input').forEach((input) => input.classList.remove('is-valid'));
  const newProject = Project.Project(...inputValues);
  projectHelpers.populateProjectList(newProject);
  form.reset();
  displayProjectForm.displayForm();
};

export default { addNewProject };
