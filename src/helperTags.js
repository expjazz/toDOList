/* eslint-disable import/no-cycle */
import elements from './elements';
import input from './input';
import btn from './addBtn';
import helpers from './helpers';

const title = (titleContent) => {
  const title = document.createElement('h1');
  title.innerText = titleContent;
  return title;
};

const projectFormInputs = () => {
  const { projectForm } = elements.ele();

  const projectTitle = input.input('title');
  const projectDescription = input.input('description');
  const projectDate = input.input('date');
  const submitBtn = btn.addBtn('Create Project');
  projectForm.addEventListener('submit', helpers.addNewProject);
  projectForm.innerHTML = projectTitle + projectDescription + projectDate;
  projectForm.appendChild(submitBtn);
};

export default { projectFormInputs, title };
