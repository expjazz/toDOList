import elements from '../../elements';
import projectsList from './projectList';
import proj from './projectsArray';

const createNewProject = (e) => {
  e.preventDefault();
};

const projectsArray = proj.exportProjectsArray;

const populateProjectList = (project = null) => {
  const { projectUl } = elements.ele();
  if (project !== null) projectsArray.projects.push(project);
  projectUl.innerHTML = projectsList.projectList(projectsArray.projects);
  projectUl.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', deleteProject);
  });
  localStorage.setItem('Projects', JSON.stringify(projectsArray.projects));
};

const deleteProject = (e) => {
  const projectTitle = e.target.dataset.title;

  const newProjects = projectsArray.projects.filter((proj) => proj.title !== projectTitle);
  projectsArray.projects = newProjects;
  populateProjectList();
};

const projectFormInputs = () => {
  const { projectForm } = elements.ele();

  const projectTitle = input.input('title');
  const projectDescription = input.input('description');
  const projectDate = input.dateInput('date');
  const submitBtn = btn.addBtn('Create Project');
  projectForm.addEventListener('submit', helpers.addNewProject);
  projectForm.innerHTML = projectTitle + projectDescription + projectDate;
  projectForm.appendChild(submitBtn);
};

export default {
  createNewProject, deleteProject, projectsArray, projectFormInputs,
};