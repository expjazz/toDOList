/* eslint-disable import/no-cycle */
import elements from './elements';
import Project from './project';
import projects from './logic';
import projectsList from './projectList';
import showList from './toDoListGenerator';
import input from './input';
import btn from './addBtn';
import Item from './item';
import itNote from './itemNote';

const createNewProject = (e) => {
  e.preventDefault();
};

// display Form
const displayForm = (e) => {
  const form = e.target.parentElement.querySelector('form');
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
  const index = projects.projects.indexOf(x);
  showList.toDoItem(x.items, index);
};

const populateItemForm = (itemForm) => {
  const itemTitle = input.input('title');
  const itemDescription = input.input('description');
  const itemDueDate = input.input('dueDate');
  const itemPriority = input.input('priority');
  const itemNotes = input.input('notes');
  const itemChecklist = input.input('checkList');


  const submitBtn = btn.addBtn('Create item');
  itemForm.addEventListener('submit', submitItemForm);
  itemForm.innerHTML = itemTitle + itemDescription + itemDueDate + itemPriority + itemNotes + itemChecklist;
  itemForm.appendChild(submitBtn);
};

const populateItemsTable = (item, index) => {
  const { itemsTable } = elements.ele();
  const project = projects.projects[index];
  project.items.push(item);
  itemsTable.querySelector('tbody').innerHTML += `<tr>
    <th scope="row">1</th>
    <td>${item.title}</td>
    <td>${item.description}</td>
    <td>${item.dueDate}</td>
    <td>${item.priority}</td>
    <td id="itemNote">${item.notes}</td>
    <td>${item.checkList}</td>
  </tr>`;
  const { itemNote } = elements.ele();
  itemNote.addEventListener('click', itNote.itNote);
};

const submitItemForm = (e) => {
  e.preventDefault();

  const inputValues = [];
  const form = e.target;

  form.querySelectorAll('input').forEach((input) => {
    inputValues.push(input.value);
  });

  const { index } = form.parentElement.children[0].dataset;

  const newItem = Item.Item(...inputValues);
  populateItemsTable(newItem, index);
};


export default {
  createNewProject, displayForm, addNewProject, populateProjectList, showListItem, populateItemForm, submitItemForm,
};
