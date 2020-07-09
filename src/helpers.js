/* eslint-disable no-use-before-define */
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
import validate from './validations';

const createNewProject = (e) => {
  e.preventDefault();
};

// display Form
const displayForm = () => {
  const form = document.getElementById('projectForm');
  form.classList.toggle('d-none');
  setTimeout(() => form.classList.toggle('inactive'), 150);
};
const deleteProject = (e) => {
  const projectTitle = e.target.dataset.title;

  const newProjects = projects.projects.filter((proj) => proj.title !== projectTitle);
  projects.projects = newProjects;
  populateProjectList();
};

const displayForm2 = (e) => {
  const form = e.target.parentElement.querySelector('form') || document.getElementById('itemForm');
  form.classList.toggle('d-none');
  setTimeout(() => form.classList.toggle('inactive'), 150);
};

// populate project list
const populateProjectList = (project = null) => {
  const { projectUl } = elements.ele();
  if (project !== null) projects.projects.push(project);
  projectUl.innerHTML = projectsList.projectList(projects.projects);
  projectUl.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', deleteProject);
  });
  localStorage.setItem('Projects', JSON.stringify(projects.projects));
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
  form.reset();
  displayForm();
};

// show list item on the right
const showListItem = (e) => {
  if (e.target.tagName === 'LI') {
    const y = e.target;
    const btn = e.target.querySelector('button');
    y.removeChild(btn);
    const x = projects.projects.find((project) => project.title === y.innerText);
    y.appendChild(btn);
    const index = projects.projects.indexOf(x);
    showList.toDoItem(x.items, index);
    y.classList.toggle('activate');
    y.parentElement.querySelectorAll('li').forEach((li) => {
      if (li !== y) {
        li.classList.remove('activate');
      }
    });
  }
};

const submitItemForm = (e) => {
  e.preventDefault();

  const inputValues = [];
  const form = e.target;
  let validateFlag = true;
  form.querySelectorAll('input').forEach((input) => {
    // validation method
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

  if (validateFlag === false) {
    return;
  }
  const { index } = form.parentElement.children[0].dataset;

  const newItem = Item.Item(...inputValues);
  populateItemsTable(newItem, index);
  displayForm2(e);
};

const populateItemForm = (itemForm) => {
  const itemTitle = input.input('title');
  const itemDescription = input.input('description');
  const itemDueDate = input.dateInput('dueDate');
  const itemPriority = input.input('priority');
  const itemNotes = input.input('notes');
  const itemChecklist = input.input('checkList');


  const submitBtn = btn.addBtn('Create item');
  itemForm.addEventListener('submit', submitItemForm);
  itemForm.innerHTML = itemTitle + itemDescription + itemDueDate + itemPriority
  + itemNotes + itemChecklist;
  itemForm.appendChild(submitBtn);
};

const deleteTask = (index, project, count) => {
  const tempList = project.items.filter((item) => item !== project.items[count - 1]);
  showList.toDoItem(project.items, count, true);
  project.items = tempList;
  showList.toDoItem(project.items, index);
};


const populateItemsTable = (item, index) => {
  const { itemsTable } = elements.ele();
  const project = projects.projects[index];
  const count = document.querySelector('tbody').childElementCount + 1;
  project.items.push(item);
  itemsTable.querySelector('tbody').innerHTML += `<tr>
    <th scope="row">${count}</th>
    <td class='title'>${item.title}</td>
    <td class='description'>${item.description}</td>
    <td class='dueDate'>${item.dueDate}</td>
    <td class='priority'>${item.priority}</td>
    <td id="${count}itemNote" class='notes'>${item.notes}</td>
    <td class='checkList'>${item.checkList}</td>
    <td><button class="btn btn-danger" id="${count}-deleteBtn"><i class="fas fa-trash"></i></button></td>
  </tr>`;
  const itemNote = document.getElementById(`${count}itemNote`);
  itemNote.addEventListener('click', itNote.itNote);
  itemsTable.querySelectorAll('button').forEach((btn) => {
    const { id } = btn;
    const indexItem = id.split('-')[0];
    btn.addEventListener('click', () => { deleteTask(index, project, indexItem); });
  });
  itNote.editEventListeners();
};


export default {
  createNewProject,
  displayForm,
  addNewProject,
  populateProjectList,
  showListItem,
  populateItemForm,
  submitItemForm,
  deleteTask,
  deleteProject,
  displayForm2,
};
