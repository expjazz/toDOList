/* eslint-disable import/no-cycle */
import elements from './elements';
import Project from './project';
import projects from './logic';
import projectsList from './projectList';

const createNewProject = (e) => {
  e.preventDefault();
};

// display Form
const displayForm = (e) => {
  console.log(e.target);
  const form = e.target.parentElement.children[2];
  form.classList.toggle('d-none');

  setTimeout(() => form.classList.toggle('inactive'), 150);
};

// populate project list
const populateProjectList = (project) => {
  const { projectUl } = elements.ele();
  projects.projects.push(project);
  projectUl.innerHTML = projectsList.projectList(projects.projects);
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
  populateProjectList(newProject);
};

// show list item on the right
const showListItem = (e) => {
  console.log(e.target);
};


export default {
  createNewProject, displayForm, addNewProject, populateProjectList, showListItem,
};
