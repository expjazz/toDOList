/* eslint-disable import/no-cycle */
import elements from './elements';
import Project from './project';
import projects from './logic';
import projectsList from './projectList';
import showList from './toDoListGenerator';
import input from './input';

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
  const x = projects.projects.find((project) => project.title === e.target.innerText);
  showList.toDoItem(x.items);
  console.log(x);
};

const addNewItem = (e) => {
  console.log(e.target);
};

const populateItemForm = () => {
  const { itemForm } = elements.ele();

  const itemTitle = input.input('title');
  const itemDescription = input.input('description');
  const itemDueDate = input.input('dueDate');
  const itemPriority = input.input('priority');
  const itemNotes = input.input('notes');
  const itemChecklist = input.input('checkList');


  const submitBtn = btn.addBtn('Create item');
  itemForm.addEventListener('submit', addNewItem);
  itemForm.innerHTML = itemTitle + itemDescription + itemDueDate + itemPriority + itemNotes + itemChecklist;
  itemForm.appendChild(submitBtn);
};

const showItemForm = () => {

};


export default {
  createNewProject, displayForm, addNewProject, populateProjectList, showListItem, populateItemForm,
};
