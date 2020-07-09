import projectsArray from '../project/projectsArray';
import showList from '../../toDoListGenerator';
import validate from '../../validations';
import Item from '../../item';
import itemPopulateTable from './itemPopulateTable';


// show list item on the right
const showListItem = (e) => {
  if (e.target.tagName === 'LI') {
    const y = e.target;
    const btn = e.target.querySelector('button');
    y.removeChild(btn);
    const x = projectsArray.projectsArray.find((project) => project.title === y.innerText);
    y.appendChild(btn);
    const index = projectsArray.projectsArray.indexOf(x);
    showList.toDoItem(x.items, index);
    y.classList.toggle('activate');
    y.parentElement.querySelectorAll('li').forEach((li) => {
      if (li !== y) {
        li.classList.remove('activate');
      }
    });
  }
};

const deleteTask = (index, project, count) => {
  const tempList = project.items.filter((item) => item !== project.items[count - 1]);
  showList.toDoItem(project.items, count, true);
  project.items = tempList;
  showList.toDoItem(project.items, index);
};

const displayForm2 = (e) => {
  const form = e.target.parentElement.querySelector('form') || document.getElementById('itemForm');
  form.classList.toggle('d-none');
  setTimeout(() => form.classList.toggle('inactive'), 150);
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
  itemPopulateTable.populateItemsTable(newItem, index);
  displayForm2(e);
};


export default {
  showListItem, deleteTask, displayForm2, submitItemForm,
};