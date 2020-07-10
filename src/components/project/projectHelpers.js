/* eslint-disable no-use-before-define */
import elements from '../../common/elements';
import projectsList from './projectList';
import input from '../../common/input';
import btn from '../../common/addBtn';
import projectsArray from './projectsArray';

const createNewProject = (e) => {
  e.preventDefault();
};


const populateProjectList = (project = null) => {
  const { projectUl } = elements.ele();
  if (project !== null) projectsArray.projectsArray.push(project);
  projectUl.innerHTML = projectsList.projectList(projectsArray.projectsArray);
  projectUl.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', deleteProject);
  });
  localStorage.setItem('Projects', JSON.stringify(projectsArray.projectsArray));
};

const deleteProject = (e) => {
  const projectTitle = e.target.dataset.title;

  const newProjects = projectsArray.projectsArray.filter((proj) => proj.title !== projectTitle);
  projectsArray.projectsArray = newProjects;
  populateProjectList();
};


const projectFormInputs = () => {
  const { projectForm } = elements.ele();

  const projectTitle = input.input('title');
  const projectDescription = input.input('description');
  const projectDate = input.dateInput('date');
  const submitBtn = btn.addBtn('Create Project');
  projectForm.innerHTML = projectTitle + projectDescription + projectDate;
  projectForm.appendChild(submitBtn);
};

export default {
  createNewProject, deleteProject, populateProjectList, projectFormInputs,
};