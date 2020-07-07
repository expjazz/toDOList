import elements from './elements';
import Project from './project';


const createNewProject = (e) => {
  e.preventDefault();
};

const displayForm = (e) => {
  console.log(e.target);
  const form = e.target.parentElement.children[2];
  form.classList.toggle('d-none');

  setTimeout(() => form.classList.toggle('inactive'), 150);
};

// this creates a project object
const addNewProject = (e) => {
  e.preventDefault();

  const inputValues = [];
  const form = e.target;

  form.querySelectorAll('input').forEach((input) => {
    inputValues.push(input.value);
  });
  const newProject = Project.Project(...inputValues);
};
export default { createNewProject, displayForm, addNewProject };
